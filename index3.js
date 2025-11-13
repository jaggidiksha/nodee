const express=require("express")
const app=express()
const path=require("path")



app.use(express.static(public))

app.get("/",(req,res)=>{
    res.send( )
})


// localhost:8000 o/p : please provide your age 

// localhost:8000?age=15 o/p you can access this page 

// localhost:8000?age=78  o/p by default res