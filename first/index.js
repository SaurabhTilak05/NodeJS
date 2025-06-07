let express=require("express");
let app=express();
app.get("/welcome",(req,res)=>{
    res.send("We are working with web app ");
  res.end();
});
app.listen(3000,()=>{
    console.log("Server is Started Successfully............");
});