let express=require("express");
let foodctrl=require("../controller/foodctrl.js");
let router=express.Router();

router.get("/",foodctrl.homePage);

//Category
router.get("/catgoryadd",foodctrl.showadd );
router.post("/saveCategory", foodctrl.addcatgory);
router.get("/getAllCategory",foodctrl.getAllCategory);
router.get("/searchcategoryByName",foodctrl.searchCategoryByName);
router.get("/updatecat",foodctrl.updateCategory);
router.post("/updatecategory",foodctrl.CatFinalUpdate);
router.get("/deldept", foodctrl.delCat);

// Food
router.get("/addfodd",foodctrl.showget);
router.post("/addfoodi",foodctrl.addfood);
router.get("/viewAllFood",foodctrl.getAllFood);
router.get("/searchfoodBycategory",foodctrl.searchCategory);
router.get("/deletefood",foodctrl.deleteFood);
router.get("/updFood",foodctrl.updateFood);
router.post("/updateFood",foodctrl.foodFinalUpdate);


module.exports=router;