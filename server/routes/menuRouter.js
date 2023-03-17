const express = require("express");
const router = express.Router();
const menuController = require("./../controllers/menuController");
const verifyToken = require("./../middleware/verifyToken");

// @Router get /api/menu/find/all
router.get("/find/all", menuController.findAll);

// @Router post /api/menu/kind/food/create
router.post("/kind/food/create", verifyToken, menuController.createKindOfFood);

module.exports = router;
