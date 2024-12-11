const express = require ('express');

const app = express();


app.use(express.static(__dirname+"/views"))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/portfolio.html");
}).listen(3000,()=>{
    console.log('http://localhost:3000');
})