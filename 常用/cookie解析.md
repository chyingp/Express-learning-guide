## 为什么需要cookie-parser

我们知道，在nodejs里面，我们想要读取、设置cookie，可以分别通过如下方式：

1、读取cookie：可以通过\`req.headers.cookie\`来获取HTTP请求携带的cookie。大概是类似下面的字符串

```
uid=23ddjl3k2k; age=23; bid=0sdaadckx2;
```

2、设置cookie：

