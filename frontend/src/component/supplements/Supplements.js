import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Usernav from "../Navbar/Usernav";
import "../supplements/Supplements.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Supplements = () => {
  const [products, setProducts] = useState([]);
  const [cartQuantities, setCartQuantities] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleQuantityChange = (productId, e) => {
    const value = parseInt(e.target.value) || 0;
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value,
    }));
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8800/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = (product) => {
    if (!isLoggedIn()) {
      toast.error("You must log in to add products to your cart.", {
        position: "top-center",
      });
      return;
    }

    const cartQuantity = cartQuantities[product._id] || 0;

    // Find the product's quantity from the response data
    const selectedProduct = products.find((p) => p._id === product._id);
    const stockQuantity = selectedProduct ? selectedProduct.quantity : 0;
    console.log("stock Quantity:", stockQuantity);
    console.log("selected product:", selectedProduct);

    if (cartQuantity <= 0) {
      toast.error("Please select a quantity greater than 0.", {
        position: "top-center",
      });
      return;
    } else if (cartQuantity > stockQuantity) {
      toast.error("The quantity exceeds the stock", { position: "top-center" });
      return;
    } else {
      toast.success("Item added to cart successfully", {
        position: "top-center",
      });
    }

    // Send the cart item data to the backend
    const cartItem = {
      user_id: localStorage.getItem("userId"),
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: cartQuantity,
    };

    axios
      .post("http://localhost:8800/cart/", cartItem)
      .then((response) => {
        console.log("Product added to cart:", response.data);
        // Reset product quantity to 0 after successfully adding to cart
        const updatedProducts = products.map((prod) =>
          prod._id === product._id ? { ...prod, quantity: 0 } : prod
        );
        setProducts(updatedProducts);
        setCartQuantities((prevQuantities) => ({
          ...prevQuantities,
          [product._id]: 0,
        }));
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  const isLoggedIn = () => {
    return localStorage.getItem("userId") !== null;
  };

  return (
    <>
      <Usernav />
      <div className="Supplements">
        <h1 className="SupplementsHeading">Supplements</h1>
        <div className="products-container">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3 className="SupplementTitle">{product.title}</h3>
              <div className="price-and-cart">
                <p>Price: ₹{product.price}</p>
                <div className="quantity-control">
                  <input
                    className="cartquantity"
                    type="number"
                    id={`cartquantity-${product._id}`}
                    required
                    onChange={(e) => handleQuantityChange(product._id, e)}
                    value={cartQuantities[product._id] || 0}
                    placeholder="0"
                  />
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Supplements;
