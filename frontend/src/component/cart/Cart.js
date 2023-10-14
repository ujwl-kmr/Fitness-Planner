import React, { useState, useEffect } from "react";
import Usernav from "../Navbar/Usernav";
import Footer from "../Footer/Footer";
import CheckoutForm from "./CheckoutForm";
import "../supplements/Supplements.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  // const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (isLoggedIn()) {
      const userId = localStorage.getItem("userId");
      axios
        .get(`http://localhost:8800/cart/${userId}`)
        .then((response) => {
          setCartItems(response.data);
          fetchProductDetails();
        })
        .catch((error) => console.error("Error fetching cart items:", error));
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleProceedToCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  // const handleProceedToPayment = (formData) => {
  const checkoutHandler = async () => {
    const {
      data: { key },
    } = await axios.get("http://localhost:8800/api/getkey");

    const { data } = await axios.post("http://localhost:8800/api/checkout", {
      amount: totalAmount,
    });
    console.log(totalAmount);

    const options = {
      key: key,
      amount: totalAmount * 100,
      currency: "INR",
      name: "Fitness Planner",
      description: "Purchase of Supplements",
      image:
        "https://thumbs.dreamstime.com/b/initial-letter-fp-logo-icon-isolated-white-background-simple-vector-logo-initial-letter-fp-logo-icon-isolated-white-201249388.jpg",
      order_id: data.id,
      callback_url: "http://localhost:8800/api/paymentverification",
      prefill: {
        name: localStorage.getItem("userName"),
        email: localStorage.getItem("userEmail"),
        contact: localStorage.getItem("userNumber"),
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#ff0000",
      },
    };

    const razor = new window.Razorpay(options);
    // razor.on("payment.success", async function (response) {
    //   console.log("Payment success:", response);
    //   await handlePaymentSuccess();
    // });

    razor.open();
  };

  // const handlePaymentSuccess = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8800/api/paymentverification",
  //       {
  //         method: "POST",
  //       }
  //     );

  //     const data = await response.json();
  //     if (data.success && data.redirectUrl) {
  //       window.location.href = data.redirectUrl;
  //     } else {
  //       console.error("Payment was successful, but unable to redirect.");
  //     }
  //   } catch (error) {
  //     console.error("Error processing payment:", error);
  //   }
  // };

  const fetchProductDetails = () => {
    axios
      .get("http://localhost:8800/products")
      .then((response) => {
        const productsData = response.data.reduce((acc, product) => {
          acc[product.title] = product;
          return acc;
        }, {});
        setProductDetails(productsData);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      const product = productDetails[item.title];
      if (product) {
        total += product.price * item.quantity;
      }
    }
    return total;
  };

  const totalAmount = calculateTotalPrice();

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = cartItems.map((item, i) => {
      if (i === index) {
        const product = productDetails[item.title];
        if (product && newQuantity > product.quantity) {
          toast.error("The quantity exceeds the stock", {
            position: "top-center",
          });
          return item;
        }
        item.quantity = newQuantity;
        axios
          .put(`http://localhost:8800/cart/${item._id}`, {
            quantity: newQuantity,
          })
          .then(() => console.log("Quantity updated successfully"))
          .catch((error) => console.error("Error updating quantity:", error));
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDeleteItem = (index) => {
    const itemToDelete = cartItems[index];
    axios
      .delete(`http://localhost:8800/cart/${itemToDelete._id}`)
      .then(() => {
        console.log("Item deleted successfully from the backend");
        const updatedCartItems = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCartItems);
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  const isLoggedIn = () => {
    return localStorage.getItem("userId") !== null;
  };

  return (
    <>
      <Usernav />
      <div className="Supplements">
        <h1 className="SupplementsHeading">Your Cart</h1>
        {isLoggedIn() ? (
          <>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <div key={index} className="product-card">
                    <img
                      src={productDetails[item.title]?.image}
                      alt={item.title}
                    />
                    <h3 className="SupplementTitle">{item.title}</h3>
                    <div className="price-and-cart">
                      <p>Price : ₹{productDetails[item.title]?.price} </p>
                      <input
                        type="number"
                        className="cartquantity"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                      />
                      <button
                        className="cartDelete"
                        onClick={() => handleDeleteItem(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <p className="totalprice">Total Price: ₹{totalAmount}</p>
                <div className="checkcon">
                  <button
                    className="checkout"
                    onClick={handleProceedToCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>

                {isCheckoutOpen && (
                  <CheckoutForm
                    onClose={handleCloseCheckout}
                    onProceedToPayment={checkoutHandler}
                  />
                )}
              </div>
            )}
          </>
        ) : (
          <p>You must log in to view your cart.</p>
        )}
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
      />
    </>
  );
};

export default Cart;
