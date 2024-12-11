import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)

app.use(express.static(path.join(__dirname,"views")))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","portfolio.html"));
}).listen(3000,()=>{
    console.log("http://localhost:3000")
})
