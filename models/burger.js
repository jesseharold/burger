var orm = require("./../config/orm");

function addBurger(burgerName, callback){
    orm.insertOne(burgerName, function(result){
        callback(result);
    });
}

function devourBurger(id, callback){
    orm.updateOne(id, "devoured", true, function(result){
        callback(result);
    });
}

function getBurgers(callback){
    orm.selectAll(function(result){
        callback(result);
    });
}

module.exports = {
    addBurger: addBurger,
    devourBurger: devourBurger,
    getBurgers: getBurgers
};