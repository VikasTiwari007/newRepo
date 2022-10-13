
const mongoose=require("mongoose");

const db= "mongodb+srv://admin:admin@cluster0.0but2r7.mongodb.net/coral?retryWrites=true&w=majority"
mongoose.connect(db,{
    useNewUrlParser:true
}).then((res)=>{
console.log("connected")
}).catch((err)=>
console.log(err)
)
