const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization");

    // Bearer eyJhbGciOiJ....
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: false,
            message: "Access token not found",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ status: false, message: "Invalid token" });
    }
};

module.exports = verifyToken;
