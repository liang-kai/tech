## vue 生命周期
- beforeCreated
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestory
- destoryed

## vue的响应式数据是如何实现的

- 遍历实例中data的所有属性，通过Object.defineProperty 将其转化为setter\getter
- 每个实例都有个watcher, 通过Dep 去关联data 中的setter\getter
- 当data更新的时候，setter会触发Dep依赖，触发watcher.update