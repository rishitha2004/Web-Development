const express=require('express');
const app=express();

app.get("/",function(req,res){
    // console.log(req);
    res.send("<h1><em>Haii Rishi</em></h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at 1234@gmail.com");
});

app.get("/hobbies",function(req,res){
    res.send("Coding is good");
});

app.get("/about",function(req,res){
    res.send("I am a sophomore CSE student named Rishitha");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});