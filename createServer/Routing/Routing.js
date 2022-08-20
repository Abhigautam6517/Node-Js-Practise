const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello I am Home")
    }
    else if(req.url=="/index"){
        res.end(path);
    }
    else{
        res.end("Error 404 ")
    }
});
server.listen(8001,'127.0.0.1',()=>{
    console.log("I am listening");
});