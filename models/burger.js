var orm = require("./../config/orm");

function addBurger(burgerName, callback){
    orm.insertOne("burgers", burgerName, function(result){
        callback(result);
    });
}

function devourBurger(id, callback){
    orm.updateOne("burgers", parseInt(id), "devoured", 1, function(result){
        callback(result);
    });
}

function getBurgers(callback){
    orm.selectAll("burgers", function(result){
        callback(result);
    });
}

module.exports = {
    addBurger: addBurger,
    devourBurger: devourBurger,
    getBurgers: getBurgers
};