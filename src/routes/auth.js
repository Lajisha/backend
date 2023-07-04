const express=require("express")

const router=express.Router()

router.post('/',(req,res)=>{
res.send("done")
})

router.get('/',(req,res)=>{
res.send("browser")
})

module.exports=router;