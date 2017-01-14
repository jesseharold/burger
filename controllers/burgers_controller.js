var burger = require("./../models/burger");

function getRoute(request, response) {
    var data = burger.getBurgers();
    response.render("index", { burgers: data });
}

function postRoute(request, response) {
    var data = burger.addBurger(request.body.name);
    response.redirect("/");
}

function putRoute(request, response) {
    var data = burger.devourBurger(request.body.id);
    response.redirect("/");
}

module.exports = {
    getRoute: getRoute,
    postRoute: postRoute,
    putRoute: putRoute
};