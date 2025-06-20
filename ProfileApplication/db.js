require("dotenv").config();

let mysql=require("mysql2/promise");
let conn=mysql.createPool({

    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_pass,
    database:process.env.db_name,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
    
});

module.exports=conn;