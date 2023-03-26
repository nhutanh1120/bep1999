const express = require("express");
const router = express.Router();
const tableController = require("./../controllers/tableController");
const verifyToken = require("./../middleware/verifyToken");

// @Router get /api/table/find/all
router.get("/find/all", tableController.findAll);

// @Router post /api/table/quickly/create
router.post("/quickly/create", verifyToken, tableController.quicklyCreateTable);

module.exports = router;
