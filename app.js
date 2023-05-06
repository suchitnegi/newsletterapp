const express = require("express")
const app = express()
const request = require("request")
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extends:true}));

app.use(express.static("public"));

app.get("/",function(req,res){

    console.log("dekho haa");
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res){
    let a = req.body.fname;
    console.log(a);
    res.sendFile(__dirname + "/success.html")

})

app.listen(3000,function(req,res){
    console.log("server is running");
})