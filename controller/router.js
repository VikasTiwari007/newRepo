const express=require("express");
const router= new express.Router();
const restro=require("../model/schema")



router.post("/example",async(req,res)=>{
    const body={
        name:req.body.name,
        Reviews:req.body.Reviews
    }
try{
    const user= await restro.restroDetails(body );
  user.save();
    res.status(201).send(user);
}catch(err){
    console.log(err)
}
});

router.get("/example",async(req,res)=>{

    try{
    const user= await restro.restroDetails.find()
    res.status(200).send(user);
}catch(err){
    console.log(err)
}
})

router.delete("/example/:id",async(req,res)=>{
const id=req.params.id;
    try{
    const user= await restro.restroDetails.findByIdAndDelete(id)
    res.status(200).send(user);
}catch(err){
    console.log(err)
}
})


router.put("/example/:id",async(req,res)=>{
    const id=req.params.id;
    const body={
        name:req.body.name,
        Reviews:req.body.Reviews
    }
try{
    const user= await restro.restroDetails.findByIdAndUpdate(id,body,{new:true});
    res.status(200).send(user);
}catch(err){
    console.log(err)
}
});
module.exports=router;