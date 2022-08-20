const express = require('express');
const router = express.Router();
router.get('/login',(request , response)=>{
    const obj = request.query;
    if(obj.userid == obj.pwd){
        response.send('Welcome '+obj.userid);
    }
    else{
        response.send("Invalid Userid or password");
    }
    // console.log(request.query); // ?name=AmitSrivastava&company=BrainMentors
    // response.send("Welcome User");
});


router.post('/login',(request , response)=>{
    console.log('Post Data comes in the request body ', request.body);
    const obj = request.body;
    if(obj.userid == obj.pwd){
        response.send('Welcome '+obj.userid);
    }
    else{
        response.send("Invalid Userid or password");
    }
    // console.log(request.query); // ?name=AmitSrivastava&company=BrainMentors
    // response.send("Welcome User");
});

router.post('/login-json',(request , response)=>{
    console.log('Post Data comes in the request body ', request.body);
    const obj = request.body;
    if(obj.userid == obj.pwd){
        response.send('Welcome '+obj.userid);
    }
    else{
        response.send("Invalid Userid or password");
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