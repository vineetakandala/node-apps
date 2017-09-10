//Environment Setup
var express = require('express'),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var todolist = [];
//Routing
app.get("/", function(req, res){
    res.render("todo");
});

app.post("/hi", function(req,res){
    var newtodo = req.body.newtodo;
    todolist.push(newtodo);
    console.log(req.body, req.params);
    res.render("hi",{todo: todolist});
});

//Listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started"); 
});