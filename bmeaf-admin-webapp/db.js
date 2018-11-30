'user strict';

const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'bmeaf',
    password : 'bmeaf',
    database : 'bmeaf'
});

connection.connect(function(err) {
    if (err) throw err;
    console.info("connected");
});

/**
 * avoid PROTOCOL_CONNECTION_LOST
 */
setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

module.exports = connection;