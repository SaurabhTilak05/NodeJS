let db=require("../../db.js");

exports.addProduct=(name,category,price,quantity)=>{
    return new Promise ((resolve,reject)=>{
       db.query("insert into product values('0',?,?,?,?)",[name,category,price,quantity],(err,result)=>{
        if(err){
            reject(err);
        }
        else{
            resolve("Product save successfully.....");
        }
       })
    });
}



exports.getAllProduct=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from product",(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};


exports.getcategoryByName=(category)=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from product where category like '%"+category+"%'",(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    });
}




exports.delProductById=(id)=>{
    return new Promise((resolve, reject)=>{
        db.query("delete from product where id=?",[id],(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve("success deleted...");
            }
        });
    });
}



exports.finalUpdateProduct=(id,name,category,price,quantity)=>{
    return new Promise((resolve,reject)=>{
         db.query("update product set name=?,category=?, price=?, quantity=? where id=?",[name,category,price,quantity,id],(err,result)=>{
         if(err){
            reject(err);
         }
         else{
            resolve("success");
         }
           
         });
    });
   
}