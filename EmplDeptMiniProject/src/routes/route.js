let express=require("express");
let router=express.Router();

router.post(".adddept", (req,res)=>{
    res.send("I am Handeler worker as coontroller..");
});
module.exports=router;