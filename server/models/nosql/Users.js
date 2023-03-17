const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        username: {
            type: String,
            require: [true, "Please enter your username!"],
            unique: true,
        },
        password: {
            type: String,
            require: [true, "Please enter your password!"],
        },
        forename: {
            type: String,
        },
        surname: {
            type: String,
        },
        male: {
            type: Boolean,
            default: true,
        },
        birthday: {
            type: Date,
        },
        phone: { type: Number },
        address: {
            type: String,
        },
        description: {
            type: String,
        },
        avatar: {
            type: String,
        },
        role: {
            type: Number,
            default: 0, // 0 = customer, 1 = manager, 2 = boss
        },
        isDeleted: {
            type: Boolean,
            default: false, // true allow access, false not allow access
        },
        message: [
            {
                title: { type: String },
                status: { type: String },
                time: { type: Date, default: Date.now },
            },
        ],
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("users", UserSchema);
