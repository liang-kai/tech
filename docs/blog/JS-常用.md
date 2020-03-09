## 模块规范

### AMD && CMD

AMD 例子：
```javascript
    require(['./add', './square'], function(addModule, squareModule){
        console.log(addModule.add(1,2))
        console.log(squareModule.square(3))
    })
```

CMD 例子：
```javascript
    define(function(require, exports, module){
        var addModule = require('./add')
         console.log(addModule.add(1,2))
         var squareModule = require('./square')
        console.log(squareModule.square(3))
    })
```


## CommonJs

不同于浏览器端的AMD、CMD规范，不需要异步加载模块并指定回调，服务端文件都在本地，同步调用即可，这个规范是CommonJs

主要有 module.exports require


## ES6 module

在浏览器运行的时候，script标签需要加上 type="module"

和 commonJS 相比，有两点差异：
1. commonJS 输出的是值的拷贝，ES6模块输出的是值的引用
2. commonJS 是运行时加载， ES6模块是编译时输出接口