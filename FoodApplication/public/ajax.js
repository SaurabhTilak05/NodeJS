
let searchCategory=(str)=>{ // search Category
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
         let jsonObj=JSON.parse(this.responseText);
         let  tableBody=document.getElementById("tblBody");
         tableBody.innerHTML="";
         jsonObj.forEach((element, index) => {
            let row=document.createElement("tr");
            let col=document.createElement("td");
            col.innerHTML=(index+1);
            row.appendChild(col);
            col=document.createElement("td");
            col.innerHTML=element.category;
            row.appendChild(col);
            col=document.createElement("td");
            col.innerHTML="<a href='/deldept?category_id="+element.deptid+"'>DELETE</a>";
            row.appendChild(col); 
            col=document.createElement("td");
            col.innerHTML="<a href='/upddept?cn="+element.deptname+"&category_id="+ element.deptid+"'>UPDATE</a>";
            row.appendChild(col);


            tableBody.appendChild(row);
         });
        }
    };
    xhttp.open("get","/searchcategoryByName?cn="+str,true);
    xhttp.send();
}



let searchFoodByCategory=(str)=>{   
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
           let jsonOjb=JSON.parse(this.responseText);
           let tablebody=document.getElementById("tblBody");
            tablebody.innerHTML="";
           jsonOjb.forEach((element ,index)=> {
                let row=document.createElement("tr");
                let col=document.createElement("td");
                col.innerHTML=(index+1);
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML=element.name;
                row.append(col);
                col=document.createElement("td");
                col.innerHTML=element.price;
                row.append(col);
                col=document.createElement("td");
                col.innerHTML=element.available;
                row.append(col);

                col=document.createElement("td");
                col.innerHTML=element.category;
                row.append(col);
                col=document.createElement("td");
                col.innerHTML="<a href='/deletefood?id="+element.id+"' >DELETE</a>";
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML="<a href='/updFood?name="+element.name+"&id="+element.id+"' >UPDATE</a>";
                row.appendChild(col);   

                tablebody.appendChild(row);
           });
        }
    };
    xhttp.open("get","/searchfoodBycategory?food_item="+str,true);
    xhttp.send();
};


