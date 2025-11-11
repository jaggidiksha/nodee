const express=require("express")
const app=express()



app.get("/",(req,res)=>{
res.send("hello basic server")
})


app.get('/user/:userid',(req,res)=>{
let a= req.params.userid
res.send(`user id is ${a}`)
})


app.get("/search",(req,res)=>{
let b=req.query.age;
res.send(`search query is ${b}`)
})


// app.listen(9000,()=>{
//     console.log("server started")
// })

const server=app.listen(0,()=>{
 const port=server.address().port
 console.log(`server started at ${port}`)
})

// methods 
// query string 
// parameter

// they help us to extract the data from req and represent that data in the res

// parameter we have to specify the name of parameter in the url itself followed by the colons
// to extract the data : req.params.nameofparameter


// query string :we do need to specify the name of query in the url , we directly extract the data using method 
// req.query.nameofquery