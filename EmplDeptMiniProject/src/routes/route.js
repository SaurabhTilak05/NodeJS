let express=require("express");
let deptctrl=require("../controllers/deptcontroller.js");
let router=express.Router();

router.post("/adddept",deptctrl.saveDept );
router.get("/",deptctrl.homePage);
router.get("/newdept",deptctrl.newDept);
router.get("/viewalldept",deptctrl.getAllDept)
router.get("/deldept", deptctrl.delDept);
router.get("/upddept",deptctrl.updateDept);
router.post("/updatedept",deptctrl.deptFinalUpdate);
router.get("/searchDeptByName",deptctrl.searchDeptByUsingName);
module.exports=router;