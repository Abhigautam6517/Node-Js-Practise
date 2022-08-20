const fs = require('fs');
const bigFile = "F:/Movies/Age_of_Ultron.mp4";
const file = "F:\Movies\Age_of_Ultron.mkv";
const stream = fs.createReadStream(file);

stream.on('open',()=>{
    console.log("stream is open")
})
// stream.on('data',chunk=>{
    
//     console.log("stream is open")
// })
stream.on('end',()=>{
    console.log("Data is copied")
})
stream.on('close',()=>{
    console.log("stream cloesd")
})
