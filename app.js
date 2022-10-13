require("dotenv").config();
require("./model/model");
const express=require("express");
const router  = require("./controller/router");

const PORT=process.env.port||3000

const app=express();


app.use(express.json());
app.use("/",router)




app.listen(PORT,()=>{
    console.log(`port is running in server ${PORT}`);
})


