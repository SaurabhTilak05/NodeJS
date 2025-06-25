
let db=require("../../db.js");

exports.saveEmployee=(...empDate)=>{

    return new Promise((resolve,reject)=>{
        db.query("insert into employee values('0',?,?,?,?,?,?)",[...empDate],(err,result)=>{
            if(err)
            {
                reject("Data Not Save");
            }
            else{
                resolve("Employee Save Successfully.....");
            }
        });
    });
}




exports.finalUpdateEmp=(eid,name)=>{
    return new Promise((resolve,reject)=>{
         db.query("update employee set name=? where eid=?",[name,eid],(err,result)=>{
         if(err){
            reject(err);
         }
         else{
            resolve(result);
         }
           
         });
    });
   
}
exports.verifyEmail=(userEmail)=>{
    return new Promise((resolve,reject)=>{
       db.query("select *from employee where email=?",[userEmail],(err,result)=>{
        if(err){
            reject(err);
        }
        else{
            resolve(result);
        }
       })
    });
}





exports.getAllEmp=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from employee e join dept d on d.deptid=e.deptid",(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};




exports.getEmployeeByDeptID=(deptId)=>{
    return new Promise((resolve,reject)=>{
       db.query("select eid, name, email, contact, photo, deptname from employee e join dept d on e.deptid = d.deptid where e.deptid = ?",[deptId],(err,result)=>{
        if(err){
            reject(err);
        }
        else{
            resolve(result);
        }
       })
    });
}





exports.deleteEmpById=(eid)=>{
    return new Promise((resolve ,reject)=>{
        db.query("delete from employee where eid=?",[eid],(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}



exports.getEmp=(eid)=>{
    return new Promise((resolve ,reject)=>{
        db.query("select * from employee e join dept d on e.deptid=d.deptid where e.eid=?",[eid],(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}



exports.getEmpByDept=(deptname)=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from employee e join dept d on d.deptid=e.deptid where d.deptname like '%"+deptname+"%'",(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}



exports.finalUpdateEmp=(id,name)=>{
    return new Promise((resolve,reject)=>{
        db.query("update employee set name=? where eid=?",[name,id],(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}