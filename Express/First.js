const express = require('express')
const app= express();

app.use(function(resq , res ,next){

})


app.get("/",(req, res)=>{
res.send("hello my name is anand")
})


app.get("/anand",(req, res)=>{
res.send("hello my name is anand Sharma")
})


app.get("/Profile",(req, res)=>{
res.send("This is my profile")
})
 

app.listen("5000")


// where do we going 
// why  do you cry
// what does he say