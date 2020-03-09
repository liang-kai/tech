# React 实战

## 简介

声明式语法可以组织复杂的界面逻辑

繁荣的生态圈，带来大量最佳时间实践

活跃的技术社区，快速的解决问题

## 历史背景

（2013年FB推出的）

1. 传统UI的问题：工程师关注太多细节，model-view相互绑定，不好追踪
2. react 始终整体刷新页面，不用关注细节
3. Flux 架构-单向数据流，redux\mobx框架

## 以组件的方式考虑UI的构建

1. 以组件化的方式思考
2. 单一职责原则，组件尽可能小，提高性能
3. 状态管理 DRY 原则
    - 计算的状态不要单独存储
    - 组件尽量无状态，所需数组通过props获取

## JSX不是模板语法，而是语法糖
优点：
1. 声明式创建UI
2. 代码创建模板的灵活性

## 生命周期
constructor 初始化内部状态(不常使用))；唯一可以直接修改state的地方
getDerievedStateFromProps (名字这么长，就是不像让用) 
    - 当state 需要从props初始化时使用
    - 尽量不要用，维护两者状态一致性增加复杂度
    - 典型应用场景：表单控件的默认值
    - 每次render都会调用。毕竟是代替原来的componentWillRecieveProps的

componentDidMount 只执行一次，获取网络请求
getSnapShotBeforeUpdate 更新前获取前一个状态的属性的节点
componentDidUpdate  根据props变化重新执行
shouldCompentUpdate 

## VDOM 

两个假设：
1. 组件的DOM结构相对稳定
2. 类型相同的兄弟节点可以被唯一标识

## 高阶组件 和 函数作为子组件


## context api 

createContext

Provider

Consumer

## 脚手架

create React app

## 打包和部署
为啥需要：
1. 编译ES6 语法
2. 整合资源、例如图片、less
3. 优化体积

## redux
状态管理框架

可预测性



