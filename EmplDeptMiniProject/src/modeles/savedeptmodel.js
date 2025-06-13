let db=require("../../db.js");
exports.saveDept=(deptname)=>{
    return new Promise ((resolve,reject)=>{
       db.query("insert into dept values('0',?)",[deptname],(err,result)=>{
        if(err){
            reject("Dept not save....");
        }
        else{
            resolve("Dept save successfully.....");
        }
       })
    });
}