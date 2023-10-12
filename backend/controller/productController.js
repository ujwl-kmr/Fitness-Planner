const Product = require("../models/Product");

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProduct: async (req, res) => {
    const { title, image, price, quantity } = req.body;

    try {
      const product = new Product({
        title,
        image,
        price,
        quantity,
      });

      const savedProduct = await product.save();
      res.json(savedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { title, image, price, quantity } = req.body;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { title, image, price, quantity },
        { new: true }
      );

      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;

    try {
      await Product.findByIdAndDelete(id);
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = productController;
