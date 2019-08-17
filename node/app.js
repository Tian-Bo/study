// 导入核心模块
const express = require('express');
const app = express();

// 导入 mysql 文件
let mysql = require('./mysql.js');

//封装查询数据
let myQuery = (url, list) => {
    app.all(url, (req, res) => {
        let id = req.param('id');
        let sql = id ? `select * from ${list} where id=${id}` : `select * from ${list}`;
        mysql.query(sql, (error, result) => {
        if(error){
            return res.json({status: 0, message: error });
        }
        res.json({status: 1, data: result});
        });

    });
}
// 设置跨域
app.all('*', (req, res, next) => {
    console.log(req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type,Authorization');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age', 1728000); // 预请求缓存20天
    next();  
});

myQuery('/users', 'users') //查询users表单数据
myQuery('/posts', 'posts') //查询posts表单数据
myQuery('/categories', 'categories') //查询categories表单数据
myQuery('/comments', 'comments') //查询comments表单数据
myQuery('/options', 'options') //查询options表单数据



// 开启服务器
let server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})


