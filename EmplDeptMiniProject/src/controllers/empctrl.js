
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
    });
    promise.catch((err) => {
        res.send(err);
    });
}
exports.getAllEmp = (req, res) => {
    let promise = empCrud.getallEmp();
    promise.then((result) => {
        res.render("viewemployee.ejs", { EmpList: result });
    });
    promise.catch((err) => {
        res.send(err);
    });
}

exports.delEmp = (req, res) => {
    let eid = parseInt(req.query.eid);
    let promise = empCrud.delEmpById(eid);
    promise.then((result) => {
        let p = empCrud.getallEmp();
        p.then((result) => {
            res.render("viewemployee.ejs", { EmpList: result });
        });
        p.catch((err) => {
            res.send(err);
        });
    });
    promise.catch((err) => {

    });
}


exports.updateEmp = (req, res) => {
    res.render("updateemp.ejs", {
        name: req.query.name,
        eid: req.query.eid
    });
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

exports.viewEmployee = (req, res) => {
    let p = dbmodel.getAllDept();
    let emps = empCrud.getallEmp();
    p.then((r) => {
        res.render("viewemployee.ejs", { deptList: r });
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

// exports.getAllEmployee=(req,res)=>{

// }