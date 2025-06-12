let express=require("express");
let bodyParser=require("body-parser");
let app=express();
app.set("views engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.render("demo.ejs",{msg:""});
});

app.use((req, res, next)=>{
    let {user,pass}=req.body;
    if(user=="admin")
    {
        next();
    }
    else{
        res.render("demo.ejs",{msg:"Login Failed"});
    }
});

app.post("/save", (req, res)=>{
    res.send("Request Recives");
});
app.listen(3000, (req, res)=>{
    console.log("Server is Start..............");
});

