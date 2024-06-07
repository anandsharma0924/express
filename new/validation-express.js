// import express from "express"
const express = require("express");
const app = express();

// app.get('/type/:ID',(req,res)=>{
//     console.log(req.params)
//     res.send("post or Artical")
// })
//////////////////////////////////////////////////////

// app.get('/:type(Post|Artical)/:ID',(req,res)=>{
//     console.log(req.params)
//     res.send("post or Artical")
// })
///////////////////////////////////////////////////////

// app.param("id", (req, res, next, id) => {
//   console.log(`Called only once ID :${id}`);
//   next();
// });

// app.get("/user/:id", (req, res ,next) => {
//   console.log("This is the user ID path 1");
//   res.send("Response");
//   next();
  
// });
// app.get("User/:id", (req, res) => {
//   console.log("This is the user ID path 2");
//   res.send("Response");
// });
/////////////////////////////////////////////////////////

app.param(['id','page'],(req,res,next,id,value)=>{
    console.log(`Called only once ${value}`)
    res.send(`called done ${value}`)
    next()
})

app.get('/user/:id/:page',(req,res,next)=>{
    console.log("this is the path 1")
    res.send("done")
    next()
})
app.get('/user/:id/:page',(req,res,next)=>{
    console.log("this is the path 2")
    res.send("welcome")
})


app.listen(5000)
