const mongoose = require("mongoose");
const URL = process.env.MONGODB_URL || "mongodb://localhost:27017/ct593";

async function connect() {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("Connect MongoDb success!");
    } catch (error) {
        console.log("Connect MongoDb error!");
    }
}

module.exports = { connect };
