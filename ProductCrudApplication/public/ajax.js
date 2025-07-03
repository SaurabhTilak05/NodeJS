
let searchCategory=(str)=>{ 
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
            col.innerHTML=element.name;
            row.appendChild(col);

              col=document.createElement("td");
            col.innerHTML=element.category;
            row.appendChild(col);

              col=document.createElement("td");
            col.innerHTML=element.price;
            row.appendChild(col);

              col=document.createElement("td");
            col.innerHTML=element.quantity;
            row.appendChild(col);

            col=document.createElement("td");
            col.innerHTML="<a href='/deldept?id="+element.id+"'>DELETE</a>";
            row.appendChild(col); 
            col=document.createElement("td");
          col.innerHTML = "<a href='/updateProd?name=" + element.name +
                "&category=" + element.category +
                "&price=" + element.price +
                "&quantity=" + element.quantity +
                "&id=" + element.id + "'>UPDATE</a>";

            row.appendChild(col);

            tableBody.appendChild(row);
         });
        }
    };
    xhttp.open("get","/searchcategoryByName?cn="+str,true);
    xhttp.send();
}

