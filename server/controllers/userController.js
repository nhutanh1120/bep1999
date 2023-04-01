const User = require("./../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userControllers = {
    // @Router post /api/auth/register
    // @access public
    register: async (req, res) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({
                    status: false,
                    message: "Please fill in all fields.",
                });
            }

            if (password.length < 6) {
                return res.status(400).json({
                    status: false,
                    message: "Password must be at least 6 characters.",
                });
            }

            const [user, _] = await User.findIdByUsername(username);
            if (user.length !== 0) {
                return res.status(400).json({
                    status: false,
                    message: "Username already taken.",
                });
            }

            const passwordHash = await bcrypt.hash(password, 12);

            const userObj = {
                username,
                password: passwordHash,
            };
            let newUser = new User(userObj);
            newUser = await newUser.save();
            return res.json({
                status: true,
                message: "Username create successfully.",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
    // @Router post /api/auth/login
    // @access public
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const [user, _] = await User.findOneByUsername(username);
            if (user.length === 0) {
                return res.status(400).json({
                    status: false,
                    message: "This username does not exist!",
                });
            }

            const isMatch = await bcrypt.compare(password, user[0].password);
            if (!isMatch) {
                return res.status(400).json({
                    status: false,
                    message: "Password is incorrect.",
                });
            }

            const token = createRefreshToken({ id: user[0].id });
            res.status(202).cookie("refresh", token, {
                httpOnly: true,
                path: "/",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
                sameSite: "strict",
            });

            res.json({
                status: true,
                message: "Login success!",
                token,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
    // @Router post /api/auth/logout
    // @access private
    logout: async (req, res) => {
        try {
            res.clearCookie("refresh");
            return res.json({ status: true, message: "Logged out." });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
    // @Router post /api/auth/refresh
    // @access private
    getAccessToken: (req, res) => {
        try {
            const rfToken = req.cookies.refresh;
            if (!rfToken) {
                return res.status(400).json({
                    status: false,
                    message: "Please login now!",
                });
            }
            jwt.verify(rfToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.status(400).json({
                        status: false,
                        message: "Please login now!",
                    });
                }

                const accessToken = createAccessToken({ id: user.id });
                return res.json({
                    status: true,
                    token: accessToken,
                });
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
};

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
    });
};

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "6h",
    });
};

module.exports = userControllers;
