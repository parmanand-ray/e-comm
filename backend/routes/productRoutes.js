const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");
const router = express.Router();

router
  .route("/")
  .get(getProduct)
  .post(protect, admin, upload.single("image"), createProduct);

router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, upload.single("image"), updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;
