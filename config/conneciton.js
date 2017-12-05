var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "james",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connectin: " + err.stack)
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;