var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var controller = require("./controllers/burgers_controller.js");

var app = express();
var PORT = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// handlebars boilerplate
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
    console.log("app is listening on port ", PORT);
});