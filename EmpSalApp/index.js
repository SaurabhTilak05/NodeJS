let express=require("express");
let bodyparser=require("body-parser");
let app=express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}))
app.get("/", (req, res) => {
    res.render("employee");
});
app.post("/display",(req,res)=>{
   const { name, email, contact, sal } = req.body;
    let bassicSalary=parseFloat(sal);
    let da=0.3*bassicSalary;
   let hra = 0.3 * bassicSalary;
   let totalsal = bassicSalary + da + hra;
   res.render("detail", {
    name,
    email,
    contact,
    sal: bassicSalary,
    da: da,
    hra: hra,
    total: totalsal
    });

});
app.listen(8888, ()=>{
    console.log("Server Start...........");
});