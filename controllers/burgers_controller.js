var express = require("express");
var router = express.Router();

// import the model to use the functions
var burger = require("./../models/burger");

// ROUTES
router.use(express.static('public'));

router.get("/", function (request, response) {
    burger.getBurgers(function(data) {
        //console.log(data);
        response.render("index", { burgers: data });
    });
});

router.post("/", function (request, response) {
    //console.log("creating burger ", request.body.burger_name);
    burger.addBurger(request.body.burger_name, function() {
        response.redirect("/");
    });
});

router.put("/:id", function (request, response) {
    //console.log("devouring burger #", request.params.id);
    burger.devourBurger(request.params.id, function() {
        response.redirect("/");
    });
});

// export for server.js
module.exports = router;