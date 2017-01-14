var connectInfo = require("./connection");
var mysql = require("mysql");

var connection = mysql.createConnection(connectInfo);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

function selectAll(){
    connection.query("SELECT (id, burger_name, devoured, date) FROM burgers", function(err, data) {
        if (err) throw err;
        // Test it
        // console.log(data);
        return data;
    });
}

function insertOne(burgerName){
    connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [burgerName], function(err, data) {
        if (err) throw err;
        // Test it
        // console.log(data);
        return data;
    });
}

function updateOne(id, property, value){
    connection.query("UPDATE burgers SET ? = ? WHERE id = ?;", [property, value, id], function(err, data) {
        if (err) throw err;
        // Test it
        // console.log(data);
        return data;
    });
}

module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
};