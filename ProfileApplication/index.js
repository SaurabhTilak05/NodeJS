let app=require("./src/app.js");

require("dotenv").config();
app.listen(process.env.server_port,()=>{

    console.log("Sarver Started......!!");  
});