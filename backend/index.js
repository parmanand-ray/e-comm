const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/db.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/auth", require("./routes/authRoutes.js"));
app.use("/api/products", require("./routes/productRoutes.js"));
app.use("/api/orders", require("./routes/orderRoutes.js"));
app.use("/api/payment", require("./routes/paymentRoutes.js"));
app.use("/api/analytics", require("./routes/analyticsRoutes.js"));

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
