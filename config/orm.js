var connection = require("./connection");

function selectAll(table, callback){
    connection.query("SELECT id, burger_name, devoured, date FROM ??", [table], function(err, data) {
        if (err) throw err;
        // Test it
        //console.log(data);
        callback(data);
    });
}

function insertOne(table, burgerName, callback){
    connection.query("INSERT INTO ?? (burger_name) VALUES (?);", [table, burgerName], function(err, data) {
        if (err) throw err;
        // Test it
        //console.log(data);
        callback(data);
    });
}

function updateOne(table, id, property, value, callback){
    connection.query("UPDATE ?? SET ?? = ? WHERE id = ?;", [table, property, value, id], function(err, data) {
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