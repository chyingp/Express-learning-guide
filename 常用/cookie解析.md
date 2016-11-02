## 为什么需要cookie-parser

我们知道，在nodejs里面，我们想要读取、设置cookie，可以分别通过如下方式：

1、读取cookie：可以通过 **req.headers.cookie** 来获取HTTP请求携带的cookie。大概是类似下面的字符串。

```
uid=23ddjl3k2k; visit=3; 
```

2、设置cookie：通过 **Set-Cookie** 首部来达到设置cookie的目的。

```javascript
res.setHeader('Set-Cookie', 'visit=3; Max-Age=60; Path=/; Expires=Wed, 02 Nov 2016 12:02:58 GMT');
```

**问题在哪呢**？

很明显，无论是读取分析cookie的值，还是设置cookie，都不够方便。

在express里，我们可以通过 cookie-parser 来方便的完成cookie的读、写。

## cookie-parser中间件使用

使用很简单，demo如下。也可以看[官方文档说明](https://github.com/expressjs/cookie-parser)。

* 读取cookie值：req.cookies.visit
* 设置cookie值：res.cookie('visit', '3')

```javascript
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/', function (req, res, next) {
    
    if(req.headers.cookie){
        console.log('解析前的cookie：' + req.headers.cookie);    
    }

    var visit = req.cookies.visit || 0; // 讀取cookie

    res.cookie('visit', ++visit, {maxAge: 60000}); // 設置cookie
    
    res.set('Content-Type', 'text/html; charset=utf-8');
    
    res.send( '您已訪問：' + visit + '次' );
})

app.listen(3000)

```

## 进一步使用

至于cookie的过期时间、path、domain等设置，可以参考官方文档。

在后续文档 会话管理 里面，还会进一步接触 cookie-parser 的使用。




