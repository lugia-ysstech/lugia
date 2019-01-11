# Lugiax

一个基于 Redux 的前端状态管理工具。提供简单高效的全局状态管理方案、 基于 async/await 的异步操作、
快捷的双向绑定。LugiaX 内置路由库，对 react-router 做了轻量封装，使用起来更加简单明了。

## 设计思想

基于`redux` + `redux-saga` 封装出更加简单的状态管理工具。我们引入了 `mutation` 的概念（`mutation` + `state`），
简化了 `redux`。lugiax 的 state 是 不可变类型的数据，
可参看 [Immutable ](https://facebook.github.io/immutable-js/docs/#/)；
Immutable数据一旦创建，就不能更改。而 `mutation` 就是修改 `state` 的唯一途径。state 被修改后，
并不会通知全局来进行更新，而是通知所绑定的对应的 Component 来进行更新。

### state

`state` 是单独的，每个 model 都有自己的 `state`，并且是不可变类型的

### mutation

`mutation` 是一个标准函数，是唯一修改 `state` 的途径，修改方式是通过返回一个新的 state ，然后通过 state.set 来修改 state。
并且 `mutation` 只能修改自己域下面的 `state`。
`mutation` 提供了 async 和 sync 两种不同的操作方式。

### mutation 进阶

* 可以通过 `wait` 等待一个mutation结束，然后处理返回新的 state
* 可以通过 `lugiax.on` 进行全局监听，被监听状态改变后，会执行 `lugiax.on`
* 可以通过 `lugiax.getState` 获取其他 model 状态

```javascript
## wait:
const mutation = {
  async: {
    async changePwd(data, inParam, { mutations, }) {
      return data.set('pwd', inParam.pwd);
    },
    async changeName(data, inParam, { mutations, }) {
      return data.set('name', inParam.name);
    },
    async start(data, inParam, { mutations, }) {          
      await mutations.changeName();
      state.set('pwd','333')
    }
  }
};
lugiax.register({model:'user',state:{name: 'li',pwd: '12345'},mutation});


## lugiax.on:

const getAsyncResult = new Promise((resolve,reject) => {
  const asyncResult = [];
  lugiax.on(async (mutation, params, { mutations, wait, }) => {
    if(true){ // 做一些判断
      asyncResult.push(params)
    }
    if(asyncResult.length === 2){ // mutation 全部响应后放回
      resolve(asyncResult);
    }
  })
})

## lugiax.getState:

import lugiax from "@lugia/lugiax";
const userModel = lugiax.register({
  model: 'user',
  state: {name: 'user'},
  mutations: {}
});
const loginModel = lugiax.register({
  model: 'login',
  state: {login: ' '},
  mutations: {}
});

lugiax.getState().get('user').get('name'); // user
```

## lugiax API

### lugiax.register

params:

```javascript
{
  model: '', // string 模块名称（必填），值必须唯一否则将会报错；
  state: {}，//组件的初始状态 类型为非 null & 非 undefined即可
  mutations:{ // 本模型对外提供的一系列业务操作
    sync: {
      doSomethings() { // 一个同步操作} // Function
    },
    async: {
      login() { // 一个异步业务操作}  // Function
    } 
  }
}
```

returned:

```javascript
{
  mutations:{ //供React组件或其它Model的Action进行调用的触发更新 state 的方法。 
    doSomethings,  // Function
    asyncLogin // Function 异步操作会返回 async 开头的方法名： login -> asyncLogin
  }
}  
```

### lugiax.connect

```javascript
lugiax.connect(
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

### lugiax.bind

双向绑定，需要指定 `mutation`，不能动态生成 `mutation` 。

```javascript
const mutations = {
  sync: {
    changeName(data, inParam) {
      return data.set('name', inParam.name);
    },
    changePwd(data, inParam) {
      return data.set('pwd', inParam.pwd);
    },
  }
}
const userModel = lugiax.register({model:'user',state:{name: 'li',pwd: '12345'},mutations})
lugiax.bind(
  userModel,
  model => {
    const result = { value: model.get('name'), pwd: model.get('pwd'), };
    return result;
  },
  {
    onChange: (mutations, e) => {
      return mutations.changeName({ name: e.target.value, });
    },
    onClick: (mutations, e) => {
      return mutations.changePwd({ pwd: newPwd, });
    },
  }
)(InputTask //Component 组件)
```

### lugiax.bindTo

双向绑定，并且可以动态生成 `mutation`。

```javascript
lugiax.bindTo(
  tomato, // 模块名称（必填）
  {
    taskName: 'value', // string 绑定属性值（必填）
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

### lugiax.getState()

某个 model 获取其他 model 的 state，使用之前要在该model 引入要获取 state 的 model。

````javascript
lugiax.getState(modelName)
````

### lugiax.on()

某个操作可能在多个 异步 `mutation` 执行完成后触发，这时候你可能用到 `lugiax.on` 来监听这些 `mutation`。

````javascript
## example：
const getAsyncResult = new Promise((resolve,reject) => {
  const asyncResult = [];
  lugiax.on(async (mutation, params, { mutations, wait, }) => {
    if(true){ // 做一些判断
      asyncResult.push(params)
    }
    if(asyncResult.length === 2){ // mutation 全部响应后放回
      resolve(asyncResult);
    }
  })
})
````

## lugiax-router 路由

lugiax 对 react-router 做了轻量的封装，createApp 和 createRoute 供你创建路由使用。

### createRoute

```javascript
createRoute({
  [path: string]:{
     render?: Function,
     exact?: boolean, 
     strict?: boolean,
     component?: Function,
     onPageLoad?: Function,
     onPageUnLoad?: ?Function
  }
})
```
除了 component 的静态打包外，还提供了 render 动态打包，用于代码分割。

#### 页面生命周期函数

* onPageLoad 页面加载完成后执行
* onPageUnLoad 页面卸载时执行

### createApp

```javascript
createApp({
  routerMap: RouterMap, // type: Object，通过 createRoute 创建后的route
  history: Object,
  param?: CreateAppParam = {}
})
```
param 提供 loading 和 onBeforeGo 两个api；

* loading: 路由切换的加载页面，可配置 Component 组件
* onBeforeGo 跳转之前的回调，可做权限处理
