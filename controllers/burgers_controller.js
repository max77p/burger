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
    burger.create(["burger_name"],[req.body.burger],function(result){
        console.log(result);
    });
    res.redirect("/");
});

router.put("/api/burgers/:id",function(req,res){
var id=req.params.id;
var condition=req.params.burger;
console.log(id);
console.log(condition);
// res.redirect("/");
burger.update(
    {
      devoured: true
    },
    id="id="+id,
    function(result) {
    //   if (result.changedRows === 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   }
    console.log(result);
    //   res.status(200).end();

    }
  );
});

module.exports=router;