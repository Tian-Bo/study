const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'my_weibo'
});

connection.connect()


// 查询
exports.query = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (error, results, fields) => {
            if(error) reject(error)
            resolve(results)
        })
    })
}