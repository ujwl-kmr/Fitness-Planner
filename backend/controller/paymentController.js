require("dotenv").config();
const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.SECRET_KEY,
});

const checkout = async (req, res) => {
  try {
    const options = {
      total: Number(req.body.total * 100),
      currency: "INR",
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
  const { razorpay_order_id, razorpay_payment_id } = req.body;
  try {
    const payment = await instance.payments.fetch(razorpay_payment_id);
    if (payment && payment.order_id === razorpay_order_id) {
      return res
        .status(200)
        .json({ success: true, message: "Payment successful" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid payment" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res
      .status(500)
      .json({ success: false, message: "Error verifying payment" });
  }
};

module.exports = { checkout, paymentVerification };
