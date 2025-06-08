let express=require("express");
let path=require("path");
let bodyParser=require("body-parser");
let mysql=require("mysql2");


let app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let p=path.join(__dirname+"/public");
app.get("/",(req,res)=>{
    res.sendFile(p+"/register.html");
});

let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Saurabh@2003",
    database:"registration"
});

con.connect((err)=>{
    if(err)console.log("Connection failed !!!")
    else console.log("Connection successfull !!");
})

app.post("/save",(req,res)=>{
    let {name,email,phn,qualification,dob,university}=req.body;
    con.query("insert into Registration values(?,?,?,?,?,?)",[name,email,phn,qualification,dob,university],(err,result)=>{
        if(err){ 
            console.log("Not inserted"+err);
		}else{
		   if(result.affectedRows>0){
                res.send("Registartion successfull");
			}
		   else{
			   res.send("Registartion failed");
		   }
		}
    })
});

app.listen(3000,()=>{
    console.log("server started.....");
});

