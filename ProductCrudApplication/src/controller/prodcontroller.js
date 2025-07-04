let prodModel=require("../models/ProdCtrlModel.js");

exports.homePage=(req,res)=>{
    res.render("viewhome.ejs");
}

exports.addProdpage=(req,res)=>{
    res.render("addproduct.ejs",{msg:""});
}


exports.addProduct=((req,res)=>{
    let {name,category,price,quantity}=req.body;
    let promise=prodModel.addProduct(name,category,price,quantity);
    promise.then((result)=>{
        res.render("addproduct.ejs",{msg:result});
    }).catch((err)=>{
         res.render("addproduct.ejs",{msg:err});
    });
});

exports.getAllProducts=(req,res)=>{
    let promise=prodModel.getAllProduct();
    promise.then((result)=>{
        res.render("viewallproduct.ejs",{ProdList:result}); 
    });
    promise.catch((err)=>{
        res.send(err);
    });
}




exports.searchCategoryByName=((req,res)=>{
    let category=req.query.cn;
   let promise=prodModel.getcategoryByName(category);
   promise.then((result)=>{
    res.json(result);
   }).catch((err)=>{
    res.send("Something went wrong...");
   })
});



exports.delProduct=(req, res)=>{
   let id=parseInt(req.query.id);
   let promise=prodModel.delProductById(id);
   promise.then((result)=>{
         let p=prodModel.getAllProduct();
    p.then((result)=>{
        res.render("viewallproduct.ejs",{ProdList:result}); 
    });
    p.catch((err)=>{
        res.send(err);
    });
   });
   promise.catch((err)=>{

   });
}




exports.updateProduct=(req,res)=>{
    res.render("updateProduct.ejs",{name:req.query.name,
                                category:req.query.category,
                                price:req.query.price,
                                quantity:req.query.quantity,
                                id:req.query.id

    });
}

exports.ProductFinalUpdate=(req,res)=>{
    let {id,name,category,price,quantity}=req.body;
    let promise=prodModel.finalUpdateProduct(id,name,category,price,quantity);
    promise.then((result)=>{
       let p=prodModel.getAllProduct();
    p.then((result)=>{
        res.render("viewallproduct.ejs",{ProdList:result}); 
    });
    });
    promise.catch((err)=>{
        res.send("Category Not Updated... ");
    });
}