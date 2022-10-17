const express = require("express");
const router = express.Router();
const user = require("../models/SignupModel")

const bcrypt=require("bcrypt");
router.use(express.json());



router.get("/",(req,res)=>{
    res.send("hello")
})

router.post("/singup", async (req, res) => {
    
    try {
        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(req.body.password,salt)
        const singUpData = new user({
            fullname: req.body.fullname,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        })  
        const result = await singUpData.save();
        res.status(201).json(result)
    } catch (err) {
        console.log(err)
    }
})


router.post("/singin",async(req,res)=>{

try{
const result=await user.find({email:req.body.email});
console.log(result);
res.status(200).json(result);
}catch(err){
    console.log(err)
}
})

router.get("/singin/:id",async(req,res)=>{
    const id=req.params.id
try{
const result=await user.find({_id:id});
console.log(result);
res.status(200).json(result);
}catch(err){
    console.log(err)
}
})

router.get("/singin",async(req,res)=>{
// console.log(signInData)
try{
const result=await user.find();
console.log(result);
res.status(200).json(result);
}catch(err){
    console.log(err)
}
})

router.delete("/singin/:id",async(req,res)=>{
    const id=req.params.id
// console.log(signInData)
try{
const result=await user.deleteOne({_id:id});
console.log(result);
res.status(200).json(result);
}catch(err){
    console.log(err)
}
})

router.put("/signin/:id", async (req, res) => {
    const id=req.params.id
  const body={
    fullname:req.body.fullname,
    email:req.body.email,
    username:req.body.username,
    password:req.body.password
  }
    try {
        const result = await user.findByIdAndUpdate({_id:id},body);
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }
})



module.exports = router;