import React, { useState, useEffect } from "react";
import axios from "axios";
import Adminnavbar from "../Navbar/Adminnavbar";
import Footer from "../Footer/Footer";
import "../AdminSupplements/ProductsDashboard.css";

const ProductsDashboard = () => {
  const initialProduct = { title: "", image: "", price: 0, quantity: 0 };
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(initialProduct);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8800/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleAddProduct = () => {
    axios
      .post("http://localhost:8800/products/", currentProduct)
      .then((response) => {
        setProducts([...products, response.data]);
        setCurrentProduct(initialProduct);
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  const handleEditProduct = (index) => {
    const editedProduct = products[index];

    const editedTitle = prompt("Enter updated title:", editedProduct.title);
    const editedPrice = parseFloat(
      prompt("Enter updated price:", editedProduct.price)
    );
    const editedQuantity = parseInt(
      prompt("Enter updated quantity:", editedProduct.quantity),
      10
    );
    const editedImage = prompt("Enter updated image URL:", editedProduct.image);

    if (editedTitle !== null && !isNaN(editedPrice) && !isNaN(editedQuantity)) {
      const updatedProducts = products.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            title: editedTitle,
            price: editedPrice,
            quantity: editedQuantity,
            image: editedImage,
          };
        }
        return product;
      });

      setProducts(updatedProducts);
      console.log("Product updated:", updatedProducts);

      axios
        .put(`http://localhost:8800/products/${products[index]._id}`, {
          title: editedTitle,
          image: editedImage,
          price: editedPrice,
          quantity: editedQuantity,
        })
        .then((response) =>
          console.log("Product updated on server:", response.data)
        )
        .catch((error) => console.error("Error updating product:", error));
    }
  };

  const handleDeleteProduct = (index) => {
    axios
      .delete(`http://localhost:8800/products/${products[index]._id}`)
      .then(() => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <div>
      <Adminnavbar />
      <div className="ProductsDashboard">
        <h1>Products Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>
                  <img src="" alt={`${product.title}.jpg`} />
                </td>
                <td>₹{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="edit"
                    onClick={() => handleEditProduct(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDeleteProduct(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Add Product</h2>
        <div className="ProductInputs">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={currentProduct.title}
            onChange={handleInputChange}
          />

          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={currentProduct.image}
            onChange={handleInputChange}
          />

          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={currentProduct.price}
            onChange={handleInputChange}
          />

          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={currentProduct.quantity}
            onChange={handleInputChange}
          />

          <button className="AddProducts" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsDashboard;
