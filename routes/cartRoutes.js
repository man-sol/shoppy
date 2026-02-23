const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  addToCart,
  updateCart,
  deleteCart
} = require("../controllers/cartController");

router.post("/", auth, addToCart);
router.put("/:id", auth, updateCart);
router.delete("/:id", auth, deleteCart);

module.exports = router;