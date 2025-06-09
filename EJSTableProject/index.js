const bodyParser=require("body-parser");
let express=require("express");
let app=express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("table.ejs",{no:0});
});
app.post("/table",(req,res)=>{
    let {num}=req.body;
    res.render("table.ejs",{no:num});
});
app.listen(3000,()=>{
    console.log("Server Start");
})


