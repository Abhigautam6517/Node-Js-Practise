const fs = require("fs");

console.log("Hello Node js")
const filepath = __dirname+"/read.txt";
console.log(filepath)
console.log(__dirname);
console.log(__filename);
// fs.readFileSync(filepath, (error,buffer)=>{
//     if(error){
//         console.log("Error is",error);
//     }
//     else{
//         console.log("Data is ",buffer.toString())
//     }
// });
try{
    const read_file = fs.readFileSync(filepath);
    console.log(read_file.toLocaleString())

}
catch(err){
    console.log("error is",err);
}


console.log("Hii node js")