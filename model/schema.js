const mongoose=require("mongoose");

const restroSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Reviews:{
        type:Number,
        required:true
    }
})
const restroDetails=new mongoose.model("restro",restroSchema)
module.exports={
    restroDetails
}