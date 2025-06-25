
let dbmodel = require("../modeles/savedeptmodel.js");
let empCrud = require("../modeles/empcrudmodel.js");
const { parse } = require("dotenv");
exports.newemp = (req, res) => {

    let promise = dbmodel.getAllDept();
    promise.then((result) => {
        res.render("newemp.ejs", { deptList: result, msg: "" });
    });
}
exports.saveEmployee = (req, res) => {
    let { name, email, contact, sal, deptid } = req.body;
    let filename = req.file.filename;
    let promise = empCrud.saveEmployee(name, email, contact, sal, filename, deptid);

    promise.then((result) => {
        let p = dbmodel.getAllDept();
        p.then((r) => {
            res.render("newemp.ejs", { deptList: r, msg: result });
        });
    })
    .catch((err) => {
        res.send(err);
    });
}




exports.getAllEmp=(req,res)=>{
    let promise=empCrud.getAllEmp();
    promise.then((result)=>{
        res.render("viewAllemp.ejs",{Emplist:result})
    }).catch((err)=>{
        res.send(err);
    });
}





exports.deleteEmp=(req,res)=>{
    let eid=parseInt(req.query.eid);
    let promise=empCrud.deleteEmpById(eid);
    promise.then((result)=>{
        let p=empCrud.getAllEmp();
        p.then((result)=>{
            res.render("viewAllemp.ejs",{Emplist:result})
        }).catch((err)=>{
            res.send(err);
        })
    }).catch((err)=>{
        res.send(err);
    })
}



exports.viewEmp=(req,res)=>{
    let eid=parseInt(req.query.eid);
    let promise=empCrud.getEmp(eid);
    promise.then((result)=>{
        res.render("singleEmp.ejs",{Emplist:result})
    }).catch((err)=>{
        res.send(err);
    });
}




exports.searchEmp=(req,res)=>{
    let dept=req.query.dept;
    let promise=empCrud.getEmpByDept(dept);
        promise.then((result)=>{
            res.json(result);
        }).catch((err)=>{
            res.send("Something went wrong");
    });
}



exports.updateEmp=(req,res)=>{
    res.render("updateEmp.ejs",{name:req.query.name,
                                id:req.query.id});
}




exports.empFinalUpdate=(req,res)=>{
    let {id,name}=req.body;
        let promise=empCrud.finalUpdateEmp(id,name);
        promise.then((result)=>{
            let p=empCrud.getAllEmp();
            p.then((result)=>{
                res.render("viewAllemp.ejs",{Emplist:result})
            }).catch((err)=>{
                res.send(err);
            });
        }).catch((err)=>{
            res.send(err);
        })  
}


exports.verifyEmail = (req, res) => {
    let userEmail = req.query.e;
    let promise = empCrud.verifyEmail(userEmail);
    promise.then((result) => {
        if (result.length > 0) {
            res.send("Email already exist");
        }
        else {
            res.send("");
        }

    });
}

exports.getEmployeeByDeptId = (req, res) => {
    let deptId = parseInt(req.query.deptId);
    let promise = empCrud.getEmployeeByDeptID(deptId);
    promise.then((result) => {
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    })
}
