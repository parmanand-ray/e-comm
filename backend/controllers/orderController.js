const express = require("express");
const { protect } = require("../middleware/authMiddleware.js");
const { admin } = require("../middleware/authMiddleware.js");

const Order = require("../model/Order.js");
const sendEmail = require("../utils/sendEmail.js");

const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentid } = req.body;
    if (
      !items ||
      items.length === 0 ||
      !totalAmount ||
      !address ||
      !paymentid
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newOrder = new Order({
      user: req.user._id,
      items,
      totalAmount,
      address,
      paymentid,
    });
    const order = await newOrder.save();
    // Send order confirmation email

    const userEmail = req.user.email;
    const customerName = req.user.name;
    const orderId = order._id;
    const orderDate = order.createdAt.toDateString();
    const deliveryDate = new Date(
      order.createdAt.getTime() + 5 * 24 * 60 * 60 * 1000,
    ).toDateString(); // Estimated delivery in 5 days
    const itemsList = items
      .map((item) => `${item.name} × ${item.qty} - ₹${item.price}`)
      .join("\n");
    const emailContent = `Hi ${customerName},

Thank you for shopping with us.

Your order has been successfully placed and is now being processed. We’re preparing your items for shipment and will notify you once your package is dispatched.

Order Details:

Order ID: ${orderId}
Order Date: ${orderDate}
Payment Status: Successful
Total Amount: ₹ ${totalAmount}

Shipping Address:
${address}

Items Ordered:
${itemsList}

Estimated Delivery: ${deliveryDate}

You can track your order status anytime from your account dashboard.

If you have any questions or need assistance, feel free to contact our support team.

Thank you for choosing us.

Best Regards,
ShopEase
Customer Support Team
`;

    await sendEmail(userEmail, "Your Order Has Been Confirmed", emailContent);
    res.status(201).json(order, { message: "Order created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "id name");
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      user: req.user._id,
      _id: req.params.id,
    });

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    order.status = status || order.status;
    const updatedOrder = await order.save();
    res
      .status(200)
      .json({ message: "Order status updated successfully", updatedOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
  myOrders,
  getOrders,
  getOrderById,
  updateOrderStatus,
};
