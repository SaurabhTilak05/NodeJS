let express=require("express");
let deptctrl=require("../controllers/deptcontroller.js");
let router=express.Router();
let empctrl=require("../controllers/empctrl.js");
let upload=require("../middleware/fileupload.js");

//Dept
router.post("/adddept",deptctrl.saveDept );
router.get("/",deptctrl.homePage);
router.get("/newdept",deptctrl.newDept);
router.get("/viewalldept",deptctrl.getAllDept)
router.get("/deldept", deptctrl.delDept);
router.get("/upddept",deptctrl.updateDept);
router.post("/updatedept",deptctrl.deptFinalUpdate);
router.get("/searchDeptByName",deptctrl.searchDeptByUsingName);


//Employee
router.get("/newemployee",empctrl.newemp);
router.get("/getEmpByDeptId",empctrl.getEmployeeByDeptId);
router.get("/viewallemp",empctrl.getAllEmp);
router.get("/deleteEmp",empctrl.deleteEmp);
router.get("/searchEmpByDept",empctrl.searchEmp);
router.get("/viewEmp",empctrl.viewEmp);
router.get("/updEmp",empctrl.updateEmp);

router.post("/updateemp",empctrl.empFinalUpdate);

router.post("/saveemp",upload.single("photo"),empctrl.saveEmployee);
router.get("/searchEmail",empctrl.verifyEmail);

module.exports=router;