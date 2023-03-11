const express = require("express");
const router = express.Router();
const userProfileController = require("./../controllers/profileController");
const verifyToken = require("./../middleware/verifyToken");

// @Router get /api/profile/info
router.get("/info", verifyToken, userProfileController.getUserInfo);

// @Router patch /api/profile/update
router.patch("/update", verifyToken, userProfileController.updateUser);

module.exports = router;
