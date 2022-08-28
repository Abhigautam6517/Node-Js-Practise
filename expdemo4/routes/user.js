const { response } = require('express');
const express = require('express');
const router = express.Router();
router.get('/slow', (req, res)=>{
    for(let i = 1; i<=100000; i++){
        for(let j = 1; j<=500000;j++){}
    }
    res.send('Slow Task Done....');
    
})
router.get('/welcome',(req, res)=>{
    const menus = ["orders","products","cart","payments"];
    res.render('welcome', {"menus":menus}); // welcome.ejs 
});
router.get('/login',(request , response)=>{
    const obj = request.query;
    if(obj.userid == obj.pwd){
       response.send("<h1>Hello </h1>");
        // response.send('Welcome '+obj.userid);
    }
    else{
        response.send("<h2>Invalid Userid or password</h2>");
    }
    // console.log(request.query); // ?name=AmitSrivastava&company=BrainMentors
    // response.send("Welcome User");
});


router.post('/login',(request , response)=>{
    console.log('Post Data comes in the request body ', request.body);
    const obj = request.body;
    if(obj.userid == obj.pwd){
        response.redirect('/welcome');
        //response.send('Welcome '+obj.userid);
        // const routeDir = __dirname;
        // const path = require('path');
        // const parentDir = path.normalize(routeDir+"/..")
        // const fullPath = path.join(parentDir,"/public","/dashboard.html");
        // response.sendFile(fullPath);
        //response.redirect("/orders/1000/MobilePhone");
    }
    else{
        response.send("Invalid Userid or password");
    }
    // console.log(request.query); // ?name=AmitSrivastava&company=BrainMentors
    // response.send("Welcome User");
});

router.get('/download', (req, res)=>{
    res.download("/Users/amitsrivastava/Documents/nodejs/expressdemo/downloads/jin.gif");
})

router.post('/login-json',(request , response)=>{
    console.log('Post Data comes in the request body ', request.body);
    const obj = request.body;
    response.contentType("application/json");
    if(obj.userid == obj.pwd){
        response.status(200).json({"msg": "welcome", "user":obj.userid});
        //response.send('Welcome '+obj.userid);
    }
    else{
      
        response.status(401).json({"msg":"Invalid Userid or Password ", "user":obj.userid});
        //response.send("Invalid Userid or password");
    }
    // console.log(request.query); // ?name=AmitSrivastava&company=BrainMentors
    // response.send("Welcome User");
});

router.get('/orders/:oid/:name',(request , response)=>{
    const oid = request.params['oid'];
    const name = request.params['name'];
   response.send("Order Id is "+oid+" Name is "+name);
    // console.log(request.query); // ?name=AmitSrivastava&company=BrainMentors
    // response.send("Welcome User");
});
module.exports = router;