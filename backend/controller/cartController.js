const Product = require("../models/cart");

const addToCart = async (req, res) => {
  const { title, price, quantity, user_id, image } = req.body;

  try {
    const product = new Product({ title, price, quantity, user_id, image });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not add to cart", error: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const products = await Product.find({ user_id: req.params.user_id });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCartItem = async (req, res) => {
  const { quantity } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.quantity = quantity;
    await product.save();

    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not update cart item", error: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product removed from cart" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not remove cart item", error: error.message });
  }
};

module.exports = { addToCart, getCart, updateCartItem, deleteCartItem };
