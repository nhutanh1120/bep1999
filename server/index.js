require("dotenv").config();
const express = require("express");

const authRouter = require("./routes/authRouter");

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Hello worlds"));
app.use("/api/auth", authRouter);

app.listen(port, () => console.log("Server running on port " + port));
