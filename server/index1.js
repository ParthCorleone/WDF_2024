const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.method ==='GET' && req.url==='/' ){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("Hello!");
    }else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("Issue he!");
    }
}).listen(3000,()=>{
    console.log("run ho gaya")
})