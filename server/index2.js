const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send("badiya he sabh")
}).listen(3000,()=>{
    console.log("http://localhost:3000")
})