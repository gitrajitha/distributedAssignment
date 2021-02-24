const mysql = require('mysql');

//create here mysql connection

const dbConn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'node_mysql_crud_db',
    port: 3307
});


dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database connected successfully');
})

module.exports = dbConn;