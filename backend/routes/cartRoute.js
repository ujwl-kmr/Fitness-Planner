const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  updateCartItem,
  deleteCartItem,
} = require("../controller/cartController");

router.post("/", addToCart);

router.get("/:user_id", getCart);

router.put("/:id", updateCartItem);

router.delete("/:id", deleteCartItem);

module.exports = router;
