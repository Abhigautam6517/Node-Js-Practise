const express = require('express');
const app = express();
//const userRouter = require('./routes/user');
const userRouter = require('./routes/user_route');
app.use(express.static('public')); // app is going to use the middleware app.use(middleware)
// middleware is at the end is just a function.
// to add the router in the application (we need to add it as a middleware)
app.use(express.urlencoded()); // key=value&key=value
app.use(express.json()); // {key:value, key:value}
app.use('/',userRouter);
app.set('view engine', 'ejs'); // Node is using which template engine
//app.use('/admin',adminuserRouter);
const server = app.listen(1234,(err)=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Started... ', server.address().port);
    }
})