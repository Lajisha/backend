const express=require("express")


const app=express()

app.use(express.json())

const AuthRoute=require('./routes/auth.js')

app.use("/",AuthRoute)

// app.post('/',(req,res)=>{
//  console.log(req.body);
// res.send(req.body);         //single res.send
// })

// app.post('/Login',(req,res)=>{
//     res.send("hii"); 
// })

app.listen(8000,()=>console.log("server listening at 8000"));