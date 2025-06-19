let searchDept=(str)=>{
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
            col.innerHTML=element.deptname;
            row.appendChild(col);
            col=document.createElement("td");
            col.innerHTML="<a href='/deldept?did="+element.deptid+"'>DELETE</a>";
            row.appendChild(col); 
            col=document.createElement("td");
            col.innerHTML="<a href='/upddept?dn="+element.deptname+"&did="+ element.deptid+"'>UPDATE</a>";
            row.appendChild(col);


            tableBody.appendChild(row);
         });
        }
    };
    xhttp.open("get","/searchDeptByName?dn="+str,true);
    xhttp.send();
}


let checkEmailExistance=(str)=>{

    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
           if(this.responseText.length>0)
           {
            document.getElementById("lableMsg").innerHTML=this.responseText;
            document.getElementById("uemail").focus();
           }
           else{
             document.getElementById("lableMsg").innerHTML="";
           }
        }
    };
    xhttp.open("get","/searchEmail?e="+str,true);
    xhttp.send();
}

// let getEmployeeByDept=()=>{
//     let deptId=parseInt(document.getElementById("did").value);
//     let xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){

//         if(this.readyState==4 && this.status==200){
//             let jsonArr=JSON.parse(this.responseText);
//             document.getElementById("tblBody").innerHTML="";
//             let tableBody=document.getElementById("tblBody");
//             let str="";

//              if (jsonArr.length == 0) {
//                 str = "<tr><td colspan='5'>No Employees Found for this Department.</td></tr>";
//                 tableBody.innerHTML=str;
//             } else {


//             for(let i=0;i<jsonArr.length;i++)
//             {
//                 str=str+"<tr>";
//                 str=str+"<td>"+jsonArr[i].name+"</td>";
//                 str=str+"<td>"+jsonArr[i].email+"</td>";
//                 str+="<td>"+jsonArr[i].contact+"</td>";
//                str += "<td><img src='/images/" + jsonArr[i].photo + "' alt='Employee Photo' width='50' height='50'></td>";  
//                str += "<td>" + jsonArr[i].deptname + "</td>"; 
              
//             }
//             tableBody.innerHTML=str;
//         }
//     }
//     };
//     xhttp.open("get","/getEmpByDeptId?deptId="+deptId,true);
//     xhttp.send();
// }




let searchEmpByDept=(str)=>{
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
                col.innerHTML=element.deptname;
                row.append(col);
                col=document.createElement("td");
                col.innerHTML=element.contact;
                row.append(col);
                col=document.createElement("td");
                col.innerHTML="<a href='/deleteEmp?eid="+element.eid+"' >DELETE</a>";
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML="<a href='/updEmp?name="+element.name+"&id="+element.eid+"' >UPDATE</a>";
                row.appendChild(col);
                col=document.createElement("td");
                col.innerHTML="<a href='/viewEmp?eid="+element.eid+"' >View Details</a>";
                row.appendChild(col);

                tablebody.appendChild(row);
           });
        }
    };
    xhttp.open("get","/searchEmpByDept?dept="+str,true);
    xhttp.send();
};