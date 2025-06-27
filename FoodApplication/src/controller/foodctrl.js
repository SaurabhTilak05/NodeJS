let foodmodel=require("../models/foodcurdmodel.js");

exports.homePage=(req,res)=>{
    res.render("home.ejs");
}

exports.showadd=((req,res)=>{
   res.render("addcategory.ejs",{msg:""});
});

exports.showget = (req, res) => {
    let promise = foodmodel.getAllCategory(); 
    promise.then((result) => {
        res.render("addfood.ejs", { CatList : result, msg: "" }); 
    })
    .catch((err) => {
       console.log(err);
       
    });
};

exports.addcatgory=((req,res)=>{
    let {category}=req.body;
    let promise=foodmodel.addCat(category);
    promise.then((result)=>{
        res.render("addcategory.ejs",{msg:result});
    }).catch((err)=>{
         res.render("addcategory.ejs",{msg:err});
    });
});

exports.getAllCategory=(req,res)=>{
    let promise=foodmodel.getAllCategory();
    promise.then((result)=>{
        res.render("viewcategory.ejs",{CatList:result}); 
    });
    promise.catch((err)=>{
        res.send(err);
    });
}

exports.searchCategoryByName=((req,res)=>{
    let category=req.query.cn;
   let promise=foodmodel.getcategoryByName(category);
   promise.then((result)=>{
    res.json(result);
   }).catch((err)=>{
    res.send("Something went wrong..");
   })
});


exports.updateCategory=(req,res)=>{
    res.render("updateCategory.ejs",{category :req.query.cn,
                                    category_id:req.query.category_id
    });
}

exports.CatFinalUpdate=(req,res)=>{
    let {id,name}=req.body;
    let promise=foodmodel.finalUpdateCategory(id,name);
    promise.then((result)=>{

    let p=foodmodel.getAllCategory();
    p.then((r)=>{
        res.render("viewcategory.ejs",{CatList:r}); 
    });
    });
    promise.catch((err)=>{
        res.send("Category Not Updated... ");
    });
}

exports.delCat=(req, res)=>{
   let category_id=parseInt(req.query.category_id);
   let promise=foodmodel.delcategoryById(category_id);
   promise.then((result)=>{
          let p=foodmodel.getAllCategory();
    p.then((r)=>{
        res.render("viewcategory.ejs",{CatList:r}); 
    });
    p.catch((err)=>{
        res.send(err);
    });
   });
   promise.catch((err)=>{

   });
}

// Food 
exports.addfood=((req,res)=>{
    let {name,price,availabel,cid}=req.body;
    let promise=foodmodel.addf(name,price,availabel,cid);
    promise.then((result)=>{
        res.render("addfood.ejs",{CatList:result,   msg:result});
    }).catch((err)=>{
         res.render("addfood.ejs",{CatList:[], msg:err});
    });
   
});

exports.getAllFood=(req,res)=>{
    let promise=foodmodel.getAllFood();
    promise.then((result)=>{
        res.render("viewAllFood.ejs",{FoodList:result})
    }).catch((err)=>{
        res.send(err);
    });
}

exports.searchCategory=(req,res)=>{
    let food_item=req.query.food_item;
    let promise=foodmodel.getEmpfoodBycat(food_item);
        promise.then((result)=>{
            res.json(result);
        }).catch((err)=>{
            res.send("Something went wrong");
    });
}


exports.deleteFood=(req,res)=>{
    let id=parseInt(req.query.id);
    let promise=foodmodel.deleteFoodById(id);
    promise.then((result)=>{
        let p=foodmodel.getAllFood();
    p.then((r)=>{
        res.render("viewAllFood.ejs",{FoodList:r});
    }).catch((err)=>{
        res.send(err);
    });
    }).catch((err)=>{
        res.send(err);
    })
}
exports.updateFood = (req, res) => {
    let promise = foodmodel.getAllCategory(); 
    promise.then((result) => {
        res.render("updateFood.ejs", {CatList : result, msg: "" ,name: req.query.name,
        price: req.query.price,
        available: req.query.available,
        category: req.query.category,
        id: req.query.id,}); 
    })
    .catch((err) => {
      res.send(err);
       
    });
}

exports.foodFinalUpdate=(req,res)=>{
    let {id, name, price, available, cid} = req.body;
   
    let promise = foodmodel.finalUpdateFood(id, name, price, available, cid);
        promise.then((result)=>{
             let p=foodmodel.getAllFood();
    p.then((r)=>{
        res.render("viewAllFood.ejs",{FoodList:r});
    }).catch((err)=>{
        res.send(err);
    });
        }).catch((err)=>{
            res.send(err);
        })  
}