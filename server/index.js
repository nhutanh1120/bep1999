require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/authRouter");

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: (origin, callback) => callback(null, true), //accept all
    }),
);

app.get("/", (req, res) => res.send("Hello worlds"));
app.use("/api/auth", authRouter);

app.listen(port, () => console.log("Server running on port " + port));
