const express = require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var numb1=Number(req.body.num1);
    var numb2=Number(req.body.num2);
    var result=numb1+numb2;
    res.send("The sum is:"+result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var h1=Number(req.body.height);
    var w2=Number(req.body.weight);
    var result=w2/(h1*h1);
    res.send("Your BMI:"+result);
});

app.listen(3000,function(){
    console.log("Server started");
})