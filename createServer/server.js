const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.end("hello I am response")
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("I am listening")
});