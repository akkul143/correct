mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");
var express = require('express');
var router = express.Router();
const userModel=require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});
router.get("/create",async function(req,res){

 const createduser=await userModel.create({
    username:"akkul",
    age:25,
    name:"gautam"
  })
  res.send(createduser);

});

module.exports = router;
