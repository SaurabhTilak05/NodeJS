let express=require("express");
let bodyParser=require("body-parser");
let db=require("../db.js");
let router=require("./routes/route.js");
require("dotenv").config();

let app=express();
app.use(express.static("public"));
app.use('/src', express.static('src'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.set("views engine", "ejs");


app.use("/",router);
module.exports=app;
