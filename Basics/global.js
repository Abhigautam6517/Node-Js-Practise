console.log('Hii node js')
console.log(__filename);
console.log(__dirname);
console.log(process.cwd());
// console.log(process.argv);
console.log(process.arch);
console.log(process.memoryUsage());
console.log(process.cpuUsage());
// console.log(process.env);

process.on('uncaughtException',(err)=>{
    console.log('Error Occur...',err);
    // SMS, MAIL
});


var e = new Buffer.alloc(100);
console.log(e);

setTimeout(()=>{
    console.log('I will run after 30 sec');
    clearInterval(t);
    },30000);
    const t =setInterval(()=>{
        console.log('I Call After Some Interval Every time');
    },4000);