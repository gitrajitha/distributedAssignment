const mysql = require('mysql');

//create here mysql connection

const dbConn = mysql.createConnection({
    host: 'databasemployee.mysql.database.azure.com',
    user: 'rajitha@databasemployee',
    password: 'Password1',
    database: 'node_mysql_crud_db',
    //port: 3306
});


dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database connected successfully');
})

module.exports = dbConn;