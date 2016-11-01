var express = require('express');
var path = require('path');
var app = express();

// 模板引擎配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 返回模板渲染的页面
app.get('/index', function(req, res, next){
	res.render('index', {
		title: '程序猿小卡的第一个模板'
	});
});

app.listen(3000);