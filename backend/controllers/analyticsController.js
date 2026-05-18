const User = require("../model/User.js");
const Produt = require("../model/Product.js");
const Order = require("../model/Order.js");

const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalProducts = await Produt.countDocuments({});
    const totalOrders = await Order.countDocuments({});

    const orders = await Order.find({});

    const totalRevenueData = orders.reduce(
      (acc, order) => acc + order.totalAmount,
      0,
    );

    res.status(200).json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenueData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAdminStats };
