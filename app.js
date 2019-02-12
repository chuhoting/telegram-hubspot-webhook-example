//jshint esversion:6

const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(process.env.PORT || 3000,function(req,res){
  console.log("Server is running on port 3000");
});

app.post("/hook",function(req,res){
  var object = req.body;
  var objectlastname = object.properties.lastname.value;
  var objectfirstname = object.properties.firstname.value;
  var message = objectfirstname+" "+objectlastname+" is enrolled into workflow";

  var options = {
    url:"https://api.telegram.org/bot743501577:AAFeulDtnW13uGflLZn6DmHT-GwbSNPGjLw/sendMessage?text="+message+"&chat_id=@hstestchannelapac"
  };
});

app.get("/hook", function(req,res){
  console.log("siao");
});
