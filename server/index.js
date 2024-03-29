require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");
const menuRouter = require("./routes/menuRouter");
const tableRouter = require("./routes/tableRouter");
const orderRouter = require("./routes/orderRouter");

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(
    cors({
        credentials: true,
        origin: (origin, callback) => callback(null, true), //accept all
    }),
);
app.use(cookieParser());

app.get("/", (req, res) => res.send("Hello worlds"));
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/menu", menuRouter);
app.use("/api/table", tableRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => console.log("Server running on port " + port));
