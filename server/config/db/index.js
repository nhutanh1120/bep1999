require("dotenv").config();

const mysql = require("mysql2");
const host = process.env.HOST || "localhost";
const user = process.env.USER || "root";
const database = process.env.DB;

const pool = mysql.createPool({
    host,
    user,
    database,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
});

module.exports = pool.promise();
