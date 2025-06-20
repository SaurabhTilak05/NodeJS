let express=require("express");
let ctrl = require("../controller/loginctrl.js");
let upload=require("../middleware/uploadmiddleware.js");

let router=express.Router();


router.get("/",ctrl.loginController);
router.get("/reg",ctrl.regController);
router.post("/regsave",upload.single("photo"), ctrl.saveReg);
router.post("/validateUser",ctrl.validateLoginUser);
router.get("/getLoginUserProfile",ctrl.getLoginUserProfile);
router.get("/getupdaeform",ctrl.getupdteform);
router.post("/updateprofile",ctrl.getUpdateRegister);

router.post("/logout",ctrl.loginController);
module.exports=router;