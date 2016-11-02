var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/', function (req, res, next) {
	
	if(req.headers.cookie){
		console.log('解析前的cookie：' + req.headers.cookie);	
	}

	var visit = req.cookies.visit || 0;	// 讀取cookie

	res.cookie('visit', ++visit, {maxAge: 60000}); // 設置cookie
	
	res.set('Content-Type', 'text/html; charset=utf-8');
	
	res.send( '您已訪問：' + visit + '次' );
})

app.listen(3000)