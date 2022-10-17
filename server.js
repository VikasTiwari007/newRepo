const express=require("express");
const app=express();
const router=require("./routes/routes")
const morgan=require("morgan");
const helmet=require("helmet");
const mongoose=require("mongoose");
const cors=require("cors")
const dotenv=require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)

})

const port=process.env.PORT||8000;
//middleware
app.use("/api",router)
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));




app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})