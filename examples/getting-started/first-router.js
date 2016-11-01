var express = require('express');
var app = express();

app.get('/hello', function(req, res, next){
    res.send('hello world!');
});

app.listen(3000);