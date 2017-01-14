var orm = require("./../config/orm");

function addBurger(burgerName){
    var data = orm.insertOne(burgerName);
    console.log(data);
    return data;
}

function devourBurger(id){
    var data =  orm.updateOne(id, "devoured", true);
    console.log(data);
    return data;
}

function getBurgers(){
    var data = orm.selectAll();
    console.log(data);
    return data;
}

module.exports = {
    addBurger: addBurger,
    devourBurger: devourBurger,
    getBurgers: getBurgers
};