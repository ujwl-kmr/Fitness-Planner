// CheckoutForm.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../cart/checkoutForm.css";

const CheckoutForm = ({ onClose, onProceedToPayment }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.address) {
      toast.error("Please provide your name, phone number, and address.", {
        position: "top-center",
      });
      return;
    }

    // Call function to proceed to payment with the form data
    onProceedToPayment(formData);
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <p>Phone number:</p>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <p>Address:</p>
        <textarea
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <div className="buttons">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Proceed to Payment</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
