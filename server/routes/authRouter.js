const express = require("express");
const router = express.Router();
const userControllers = require("./../controllers/userController");

//localhost/api/auth/register
router.post("/register", userControllers.register);

// @Router post /api/auth/login
router.post("/login", userControllers.login);

module.exports = router;
