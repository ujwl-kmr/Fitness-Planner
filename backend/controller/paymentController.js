require("dotenv").config();
const Razorpay = require("razorpay");
const Cart = require("../models/cart");
const Product = require("../models/Product");
// const crypto = require("crypto");

const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.SECRET_KEY,
});

const checkout = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount,
      currency: "INR",
      payment_capture: 0,
    };
    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "An error has occured while doing payment",
    });
  }
};

const paymentVerification = async (req, res) => {
  try {
    await clearCartAndProductQuantities();

    return res.redirect("http://localhost:3000/Cart");
  } catch (error) {
    console.error("Error processing payment:", error);
    return res
      .status(500)
      .json({ success: false, message: "Error processing payment" });
  }
};

const clearCartAndProductQuantities = async (user_id) => {
  try {
    await updateProductQuantities();
    await clearCart(user_id);
  } catch (error) {
    console.error(
      "Error clearing cart and updating product quantities:",
      error
    );
    throw new Error("Error clearing cart and updating product quantities");
  }
};

const updateProductQuantities = async () => {
  try {
    const cartItems = await Cart.find();
    for (const cartItem of cartItems) {
      const product = await Product.findOne({ title: cartItem.title });
      if (product) {
        product.quantity -= cartItem.quantity;
        await product.save();
      }
    }

    console.log("Product quantities updated based on cart items");
  } catch (error) {
    console.error("Error updating product quantities:", error);
    throw new Error("Error updating product quantities");
  }
};

const clearCart = async (user_id) => {
  try {
    await Cart.deleteMany({ userId: user_id });
    console.log("Cart cleared for user:");
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw new Error("Error clearing cart");
  }
};

module.exports = { checkout, paymentVerification };
