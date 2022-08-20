const express = require('express');
const app = express();
const userRouter = require('./routes/user');
app.use(express.static('public')); // app is going to use the middleware app.use(middleware)
// middleware is at the end is just a function.
// to add the router in the application (we need to add it as a middleware)
app.use(express.urlencoded());
app.use(express.json());
app.use('/',userRouter);
//app.use('/admin',adminuserRouter);
const server = app.listen(1547,(err)=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Started... ', server.address().port);
    }
})