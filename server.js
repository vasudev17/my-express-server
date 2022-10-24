const express = require("express");
const app = express();

app.get("/", function(req, res){ // Request, Response
    res.send("<h1>Hello</h1>");
});
app.get("/contact", function(req,res){
    res.send("Contact me at vasudevmehra17@gmail.com");
});
app.get("/about", function(req,res){
    res.send("This is Vasu's website!");
});
app.get("/hobbies", function(req,res){
    res.send("<ul><li>Tennis</li></ul>");
});
app.listen(3000, function() {
    console.log("Server started at port 3000");
});

