let express=require("express");
let deptctrl=require("../controllers/deptcontroller.js");
let router=express.Router();

router.post("/adddept",deptctrl.saveDept );
router.get("/",deptctrl.homePage);
router.get("/newdept",deptctrl.newDept);
module.exports=router;