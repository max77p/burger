var express = require("express");
var router=express.Router();
var burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.all(function(data){
        console.log(data);
        var hasObject = {
            burgers: data
          };
          console.log(hasObject);
          res.render("index", hasObject);
    });
});

router.post("/api/burgers",function(req,res){
    burger.createOne(["name","sleepy"],[req.body.name,req.body.sleepy],function(result){
        console.log(result);
    });
});

module.exports=router;