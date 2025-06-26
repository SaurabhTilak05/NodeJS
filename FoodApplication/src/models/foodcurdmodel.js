let db=require("../../db.js");

exports.addCat=(category)=>{
    return new Promise ((resolve,reject)=>{
       db.query("insert into category values('0',?)",[category],(err,result)=>{
        if(err){
            reject(err);
        }
        else{
            resolve("Catgory save successfully.....");
        }
       })
    });
}


exports.addf=(name, price,availabel,cid)=>{
    return new Promise ((resolve,reject)=>{
       db.query("insert into food_item values('0',?,?,?,?)",[name, price,availabel,cid],(err,result)=>{
        if(err){
            reject(err);
        }
        else{
            resolve("Food Data save successfully.....");
        }
       })
    });
}


exports.getAllCategory=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from category",(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(result);
            }

        });
    });
}



exports.getcategoryByName=(category)=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from category where category like '%"+category+"%'",(err,result)=>{
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



exports.finalUpdateCategory=(category_id,category)=>{
    return new Promise((resolve,reject)=>{
         db.query("update category set category=? where category_id=?",[category,category_id],(err,result)=>{
         if(err){
            reject(err);
         }
         else{
            resolve("success");
         }
           
         });
    });
   
}


exports.delcategoryById=(category_id)=>{
    return new Promise((resolve, reject)=>{
        db.query("delete from category where category_id=?",[category_id],(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve("success");
            }
        });
    });
}


// food


exports.getAllFood=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from food_item f join category c on f.category_id=c.category_id",(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};



exports.getEmpfoodBycat=(category)=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from food_item f join category c on f.category_id=c.category_id where c.category like '%"+category+"%'",(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
}



exports.deleteFoodById=(id)=>{
    return new Promise((resolve ,reject)=>{
        db.query("delete from food_item where id=?",[id],(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}




exports.finalUpdateFood=(id,name,price,availabel,category)=>{
  
    if(category!=0)
    {
return new Promise((resolve,reject)=>{                           
        db.query("UPDATE food_item SET name=?, price=?, available=?, category_id=? WHERE id=?",
         [name, price, availabel, category, id],(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
    }
    else
    {
return new Promise((resolve,reject)=>{                           
        db.query("UPDATE food_item SET name=?, price=?, available=? WHERE id=?",
         [name, price, availabel, id],(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
    }
    
}