require("dotenv").config();  // ✅ Fix here
let mysql = require("mysql2");

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
});

conn.connect((err) => {
    if (err) {
        console.log("error is  " + err);
        console.log("Database is not connected...." + err);
    } else {
        console.log("Database is connected");
    }
});

module.exports = conn;
