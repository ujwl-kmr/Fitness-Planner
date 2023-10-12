const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/config");
const adminRoute = require("./routes/adminRoute");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const userDetailRoute = require("./routes/userDetailRoute");
const historyRoute = require("./routes/historyRoute");
const productRoutes = require("./routes/productRoute");
const cartRoutes = require("./routes/cartRoute");
const paymentRoutes = require("./routes/paymentRoute");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8800;

connectDB(); // Connect to the database

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount API routes
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/userDetail", userDetailRoute);
app.use("/history", historyRoute);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/api", paymentRoutes);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.KEY_ID })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
