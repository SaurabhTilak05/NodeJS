let conn=require("../../db.js");

async function saveReg(...regData){
    let result=conn.query("insert into register values('0',?,?,?,?,?,?)",[...regData]);
    return result;
}


async function validateUser(uname,upass){
    let result=await conn.query("select *from register where username=? and password=?", [uname,upass]);
    return result;
}


async function getLoginUserProfile(loginUserId){
    let userData=await conn.query("select *from register where rid=?",[loginUserId]);
    return userData;
}

async function getUpdateReg(name,email,contact,username,password,newphoto,rid){
    if(newphoto.length==0)
    {
let regid = await conn.query(
            "UPDATE register SET name=?, email=?, contact=?, username=?, password=? WHERE rid=?",
            [name, email, contact, username, password ,rid]
        );
        return regid;
    }
    else
    {
let regid = await conn.query(
            "UPDATE register SET name=?, email=?, contact=?, username=?, password=?, photo=? WHERE rid=?",
            [name, email, contact, username, password ,newphoto,rid]
        );
        return regid;
    }
    
}


module.exports={saveReg,validateUser,getLoginUserProfile, getLoginUserProfile,getUpdateReg};

