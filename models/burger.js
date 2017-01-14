var orm = require("./../config/orm");

function addBurger(burgerName){
    return orm.insertOne(burgerName);
}

function devourBurger(id){
    return orm.updateOne(id, "devoured", true);
}

function getBurgers(){
    return orm.selectAll;
}

module.exports = {
    addBurger: addBurger,
    devourBurger: devourBurger,
    getBurgers: getBurgers
};