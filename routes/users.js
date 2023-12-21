const mongoose=require("mongoose");

const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number
});
module.exports=mongoose.model("user",userschema);