const express = require("express");
const router = express.Router();
const userControllers = require("./../controllers/userController");

//localhost/api/auth/register
router.post("/register", userControllers.register);

// @Router post /api/auth/login
router.post("/login", userControllers.login);

// @Router get /api/auth/logout
router.get("/logout", userControllers.logout);

// @Router post /api/auth/refresh
router.get("/refresh", userControllers.getAccessToken);

module.exports = router;
