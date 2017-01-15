var connection = require("./connection");

function selectAll(callback){
    connection.query("SELECT id, burger_name, devoured, date FROM burgers", function(err, data) {
        if (err) throw err;
        // Test it
        //console.log(data);
        callback(data);
    });
}

function insertOne(burgerName, callback){
    connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [burgerName], function(err, data) {
        if (err) throw err;
        // Test it
        //console.log(data);
        callback(data);
    });
}

function updateOne(id, property, value, callback){
    connection.query("UPDATE burgers SET ? = ? WHERE id = ?;", [property, value, id], function(err, data) {
        if (err) throw err;
        // Test it
        //console.log(data);
        callback(data);
    });
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};