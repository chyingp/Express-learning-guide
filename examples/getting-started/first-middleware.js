var express = require('express'); 
var app = express(); 

app.get('/hello', function(req, res, next){ 
    console.log('打印访问日志');
    next();
}); 

app.get('/hello', function(req, res, next){
    console.log('假设我在访问数据库');
    next();
});

app.get('/hello', function(req, res, next){
    res.send('你好我是中间件！');
});

app.listen(3000);
