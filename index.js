


var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'password',
    database: 'bamazonDB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    connection.query("SELECT * FROM products", function (err, res){
        if (err) throw err;
        console.log(res);

        console.log(res[2].typeName);
    });
});