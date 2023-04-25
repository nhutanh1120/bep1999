const express = require("express");
const router = express.Router();
const orderController = require("./../controllers/orderController");
const verifyToken = require("./../middleware/verifyToken");

// @Router post /api/order/table/:id
router.post("/table/:id", verifyToken, orderController.createOrder);

module.exports = router;
