// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
//read data
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "games_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();

});

function Games(id, name) {
    this.id = id;
    this.name = name;
}

function Users(id, name) {
    this.id = id;
    this.name = name;

}


function afterConnection() {
    connection.query("SELECT * FROM games_db.gamePlay", function (err, res) {
        if (err) throw err;

        console.log(res);
        connection.end();
    });
}