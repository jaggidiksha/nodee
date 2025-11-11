const express=require("express")
 const app=express()   //instance of express application  


//  c            r               u               d
// create        read           update          delete

// post            get              put           delete    http methods 

app.get("/",(req,res)=>{
res.send("hello basic server")
})


app.get("/about",(req,res)=>{
res.send("hello about page server")
})



app.get("/contact",(req,res)=>{
res.send("hello contact page server")
})



app.listen(8000,()=>{
    console.log("server stared")
})