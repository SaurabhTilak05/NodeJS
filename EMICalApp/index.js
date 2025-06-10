let express=require("express");
let bodyparser=require("body-parser");
let app=express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
   res.render("emical",{emi :null,principal:null , interest:null});
});

app.post("/emical",(req,res)=>{
    let principal=parseFloat(req.body.amount);
    let rate=parseFloat(req.body.rate);
    let years=parseFloat(req.body.yrs);

    let r=rate / 12 / 100;
    let n = years*12;

    let emi=(principal* r * Math.pow(1+r,n)/ (Math.pow(1 + r, n) - 1) );
    let totalPayment = emi * n;
   let inte = totalPayment - principal;

    res.render("emical", {
        emi: emi,
        principal: principal,
        interest: inte
    });
});
app.listen(3000, ()=>{
    console.log("Server Start..................");
});