const express=require("express")
const app=express()


const mymiddleware=(req,res,next)=>{
 console.log("this is my middleware !"+req.url)
 next()
}


app.use(mymiddleware)

app.get('/',(req,res)=>{
res.send("hello")
})

// random port generation

const server=app.listen(0,()=>{
 const port= server.address().port;
 console.log(`server started at ${port}`)
})





// middleware in context of full stack web dvelopemnt is a bridge to connect the frontend and the backend together
// in express .js 

// middlewware is a thing which has the access to the incoming req. object as well as the outgoing res object and the next operation in the sequence

// pre defined 
// user defined 

//static files : express.static()
// we create a function of middleware : 3 parameter req,res,next

// until we do not invoke the next function res are not visible 

// to use the middleware   app.use(mymiddleware )
                    //     app.use(express.static()) 