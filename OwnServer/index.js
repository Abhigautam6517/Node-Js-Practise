const http = require('http')
const path = require('path')
const fs = require('fs')

function handleRequestResponse(req,res){
    const request = req.url;
    if(request=="/"){
        const buffer = fs.readFileSync('./public/index.html');   
        res.end(buffer)
    }
}


const server = http.createServer(handleRequestResponse)

server.listen(8500, ()=>{
    console.log("server Listen port 8500")
})