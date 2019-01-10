# Lugiax

一套更易上手的状态管理工具。

## 设计思想

基于`redux` + `redux-saga` 封装出更加简单的状态管理工具。

* 引入 model，作为 store 根对象下唯一的属性列；
* 将 acition 分为 datachange-action 和 event-action 两种.datachange-action是通过特定的API自动触发，
重新计算对应的 reducer，而不会重新计算所有的 reducer。datachange-action不对外公开使用；
* 对值组件（泛指所有有value属性指定值，onChange指定值变化的React组件），引入双向绑定功能。
方便开发人员进行页面开发；
* action 为最小业务处理单位，可以将其理解为一次事务操作，action 中可以调用自己或其它 model 的 action。

## 特性

* 处理简单交互：数据自动绑定
* 处理中等交互：action监听
* 处理复杂交互：异步任务编排、Obserable进行流程编排

## API

### lugiax.register

params:

```javascript
{
  model: '', // 模块名称（必填），值必须唯一否则将会报错；
  state: {}，//组件的初始状态 类型为非 null & 非 undefined即可
  actions:{ // 本模型对外提供的一系列业务操作
    async login(){ // 一个业务操作}
  }
}
```

returned:

```javascript
{
  mutations:{
    login //供React组件或其它Model的Action进行调用的触发action的方法。 
  }
}  
```

### lugiax.connect

```javascript
connect(
  todo, // 模块名称（必填）
  state => {
    return { data: state.data, };
  },
  mutations => {
    const { todo, } = mutations;
    return { delItem: todo.delTask, };
  }
)(List);
```

### lugiax.bindTo

```javascript
bindTo(
  tomato, // 模块名称（必填）
  {
    taskName: 'value', // 绑定属性值（必填）
  },
  {
    onChange: {
      taskName(v) {
        return v;
      },
    },
  }
)(InputTask //Component 组件)
```

