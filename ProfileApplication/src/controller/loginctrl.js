
let regModel=require("../models/regmodel.js");
let upload = require("../middleware/uploadmiddleware.js");
exports.loginController= (req,res)=>{
    res.render("login.ejs",{msg:""});
}

exports.regController=(req,res)=>{
    res.render("register.ejs",{msg:""});
}

exports.saveReg=(req,res)=>{
    let{name,email,contact,username,password}=req.body;
   let result=regModel.saveReg(name,email,contact,username,password,req.file.filename);
   result.then((r)=>{
   if(r[0].affectedRows>0)
   {
    res.render("register.ejs",{msg:"Registration successfull...!!"});
   }
   else{
    res.render("register.ejs",{msg:"Registration Failed...!!"});
   }
   }).catch((err)=>{
    console.log(err);
   })
}

exports.validateLoginUser=(req,res)=>{
  
    let {username,password}=req.body;
    let result=regModel.validateUser(username,password);
    result.then((r)=>{
        if(r[0].length>0){
             let userData=r[0];
            req.session.loginUserId=userData[0].rid;
            req.session.loginUsername=userData[0].name;
            res.render("viewProfile.ejs",{loginUserName:userData[0].name});
        }
        else{
            res.render("login.ejs",{msg:"Login Failed..."});
        }

           }).catch((err)=>{
         res.render("login.ejs",{msg:"Login Failed..."});

    })
}

exports.getLoginUserProfile=(req,res)=>{
    let loginUserId=req.session.loginUserId;
    let result=regModel.getLoginUserProfile(loginUserId);
    result.then((r)=>{
      if(r[0].length>0){
        let userData=r[0][0];
        res.render("showProfile.ejs",{u:userData});
      }  
    })
}

exports.getUpdateRegister=(req,res)=>{
    let {name,email,contact,username,password} =req.body;
     let loginUserId=req.session.loginUserId;
    
   let ss = regModel.getUpdateReg(name,email,contact,username,password,loginUserId);
   console.log(ss);
}

exports.getupdteform=(req,res)=>
{
    let loginUserId=req.session.loginUserId;
    let result=regModel.getLoginUserProfile(loginUserId);
    result.then((r)=>{
      if(r[0].length>0){
        let userData=r[0][0];
        res.render("updateProfile.ejs",{u:userData});
      }  
    }).catch((err) => {
        console.error("Error fetching user profile for update form:", err);
        res.redirect("/"); // Handle error
    });

 }
