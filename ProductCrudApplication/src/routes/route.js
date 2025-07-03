let express=require("express");
let Prodctrl=require("../controller/prodcontroller.js")
let router=express.Router();

router.get("/",Prodctrl.homePage);

router.get("/addProdPage",Prodctrl.addProdpage);

router.post("/addProd",Prodctrl.addProduct);
router.get("/getAllProd",Prodctrl.getAllProducts);
router.get("/searchcategoryByName",Prodctrl.searchCategoryByName);

router.get("/deleteProd", Prodctrl.delProduct);

router.get("/updateProd",Prodctrl.updateProduct);
router.post("/UpdateProd",Prodctrl.ProductFinalUpdate);

module.exports=router;