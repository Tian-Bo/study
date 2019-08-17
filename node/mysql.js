
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'my_weibo'
});

connection.connect();

module.exports = {
    //查询数据
    query: (sql, callback) => {
        
        connection.query(sql, (err, result) => {
        if (err){
            callback(error.sqlMessage, false);
            return;
        };

        callback(err, result);
        });
        
    },

}


