//variable declartion
var express			=require("express"),
	request			=require("request"),
	bodyParser    	=require("body-parser"),
	methodOverride 	=require("method-override");

var app=express();


// setting up app
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));	// to be added every time we setup a post route 
app.use(express.static(__dirname+"public"));
app.use(methodOverride("_method"));




app.listen(3002,function(){
	console.log("YELP camp server has started");
});