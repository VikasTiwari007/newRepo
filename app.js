require("./model/model");
const express=require("express");
const router  = require("./controller/router");

const app=express();


app.use(express.json());
app.use("/",router)




app.listen(3000,()=>{
    console.log("port is running in server 3000");
})