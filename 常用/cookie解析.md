## 为什么需要cookie-parser

我们知道，在nodejs里面，我们想要读取、设置cookie，可以分别通过如下方式：

1、读取cookie：可以通过\`req.headers.cookie\`来获取HTTP请求携带的cookie。大概是类似下面的字符串。

```
uid=23ddjl3k2k; visit=3; 
```

2、设置cookie：通过\`Set-Cookie\`首部来达到设置cookie的目的。

```
res.setHeader('Set-Cookie', 'visit=3; Max-Age=60; Path=/; Expires=Wed, 02 Nov 2016 12:02:58 GMT');
```

问题在哪呢？很明显，无论是读取分析cookie的值，还是设置cookie，都不够方便。

