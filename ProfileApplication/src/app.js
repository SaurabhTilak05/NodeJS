let express=require("express");
let bodyParser=require("body-parser");
let session=require("express-session");
let path=require("path");
let router=require("../src/routes/router.js");
let app=express();
let db=require("../db.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret:"12#####3",
    resave:false,
    saveUninitialized:true
}))



app.set("view engine", "ejs");
app.use("/", router);

module.exports=app;

