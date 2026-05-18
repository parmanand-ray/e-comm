const express = require("express");
const { createOrder,varifyPayment } = require("../controllers/paymentController.js");

const router = express.Router();

router.post('/order',createOrder);
router.post('/varify',varifyPayment);

module.exports = router;