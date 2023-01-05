var express=require('express');
var router =express.Router();

router.get("/",function(req,res,next){
    res.send("API is working properly");
});
module.exports=router;


//express code in js and then include it in app.js then run the localhost