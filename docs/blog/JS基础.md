# JS 基础知识

## 原型和原型链

```javascript
    function Person(){}
    Person.prototype.name = 'Li'
    var person1 = new Person()
    console.log(person1.name)

    person1.__proto__ == Person.prototype
    Person.prototype.constructor == Person

    Person.prototype.__proto__ == Object.prototype
```

```javascript

```


## 执行上下文 作用域链 调用栈

执行上下文里有：变量环境、作用域链、this
箭头函数没有执行上下文，也就没有arguments,this,也无法改变this


## this

全局执行上下文中的this

函数执行上下文中的this

this->self，把this体系 改变成 作用域体系 

## 类数据和arguments

类数据就是类似数组

## 伪类和伪元素

区别在于是否表示一个文档元素。
伪元素——::after , ::before
伪类——:hover :not

## 观察者模式 和 发布-订阅模式

原理类似，都能实现 订阅-通知的机制，有差异：
- `观察者模式`中，观察者是知道被观察者的存在的；`发布-订阅模式`中，双方是不知道对方存在的，松散耦合。
- `观察者模式`常常是同步的，`发布-订阅模式`常常是异步的

## TCP三次握手、四次挥手
握手：1. client建立连接 2. server响应连接 3. client确认连接
挥手：1. client关闭连接 2. server确认关闭 3. server 关闭连接 4. client确认关闭


## post vs put

post 创建资源
put 更新资源
patch 局部更细资源

## webpack

### loader 和 plugins




```javascript
Promise.resolve().then(()=>{},()=>{console.log('ee')})
```
```javascript

```
```javascript

```
```javascript

```
```javascript

```v