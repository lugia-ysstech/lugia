# 项目实战

在复杂的项目中，你可能会用到 Redux 或者 dva 这样的数据流方案，同样，我们也推出了自己的状态管理工具 lugiax 来与 lugia-web 组件库
搭配使用，同样，我们也推荐你在项目使用 lugiax。

## 创建一个新应用

让我们创建一个新目录来开始新的项目：

首先，创建一个新目录，

```bash
$ mkdir my-project
$ cd my-project
```

然后，使用 lugia-mega 来安装一个空的脚手架，

```bash
$ mega create lugiax
```

安装完成后，你会看到如下代码，

```bash
Success! Created lugiax at D:\Work\my-project\lugiax

Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

We suggest that you begin by typing:

  cd D:\Work\my-project\lugiax
  yarn start

Happy hacking!
```

一个简单的脚手架，已经安装成功了！

启动项目：
```bash
## 运行
$ yarn start
```

在浏览器的 [http://localhost:8000](http://localhost:8000)， 你会看到 mega 的欢迎界面。

![welcome](./img/welcome.png)

## 使用 lugia-web

在使用 lugia-web 组件库之前，需要配置 `lugia.config.js`，来处理 lugia-web 的按需加载，配置如下：

```bash
export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  publicPath: '/',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@lugia/lugia-web',
        libraryDirectory: 'dist'
      }
    ]
  ],
  applyWebpack(webpackConfig, { webpack, mega }) {
    return webpackConfig;
  }
};

```

由于，我们创建的是一个空的脚手架，所以配置完成后，需要安装 `babel-plugin-import` `lugia-web` `lugiax` `lugiax-router`，
```bash
$ yarn add babel-plugin-import
$ yarn add @lugia/lugia-web
$ yarn add @lugia/lugiax
$ yarn add @lugia/lugiax-router
```

## 编写 Component

我们先在 `src` 文件夹下创建 `component` 文件夹，并创建如下文件：

![component](./img/component.png)

代码为：

```jsx harmony
## nav-menu/index.js :

import React from 'react';
import {Link} from '@lugia/lugiax-router';
import {Button} from '@lugia/lugia-web';

export default class Header extends React.Component {
  render(){
    return (
      <div>
        <Link to="/home"><Button type="primary">Home 首页</Button></Link>
        <Link to="/list"><Button type="primary">List 列表</Button></Link>
      </div>
    )
  }
}

## home/index.js :

import React from 'react';

export default class Home extends React.Component {
  render(){
    return (
      <div>
        Home
      </div>
    )
  }
}


## list/index.js :

import React from 'react';

export default class List extends React.Component {
  render(){
    return (
      <div>
        List
      </div>
    )
  }
}
```

## 创建路由

修改 `src/App/APP.jsx` 和 `src/index.js` 文件代码如下：

```jsx harmony
## APP.jsx:

import React, { Component } from 'react';
import reactLogo from '../assets/react.logo.svg';
import megaLogo from '../assets/logo.png';
import './App.css';
import { createRoute} from '@lugia/lugiax-router';
import NavMenu from '../component/nav-menu';

const route = {
  '/': {
    render: async () => import('../component/home'),
    exact: true,
  },
  '/home': {
    render: async () => import('../component/home')
  },
  '/list': {
    render: async () => import('../component/list')
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={megaLogo} alt="mega-logo" />
          <span className="App-plus">+</span>
          <img src={reactLogo} className="App-logo" alt="react-logo" />
        </header>
        <h1 className="App-title">Lugia Mega of React</h1>
        <p className="App-intro">
          <code>React 实现</code> 标准、高效、开箱即用的前端可视化开发工具
        </p>
        <NavMenu />
        {createRoute(route)}
      </div>
    );
  }
}

export default App;


## index.js :

import React from 'react';
import { createBrowserHistory } from "history";
import { createApp, go, render } from "@lugia/lugiax-router";
import './index.css';
import "@lugia/lugia-web/dist/css/global.css";
import Main from "./App";

const history = createBrowserHistory();
const App = createApp(
  {
    "/": {
      component: Main
    }
  },
  history,
  {
    async onBeforeGo({ url }) {
      if (url === "/nowPower") {
        await go({ url: "/404" });
        return false;
      }
      return url !== "/not";
    }
  }
);

render(() => {
  return <App />;
}, "root");
```
 修改完后，再重新启动项目，看到如下界面：

![welcome](./img/route-welcome.png)

这样，一个简单的路由就搭建完成了，你也可以根据你的爱好配置不同样式。


## 创建 model

在 `list` 目录下创建 `models/todo.js`;

```jsx harmony
import lugiax from "@lugia/lugiax";

const model = "todo";
const state = {
  formData: {
    task: ""
  },
  tasks: ["hello"]
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      addTask(state, inParam, { mutations }) {
        const task = state.getIn(["formData", "task"]);
        if (!task) {
          return state;
        }
        let tasks = state.get("tasks");
        tasks = tasks.push(task);
        state = mutations.cleanTaksInput();
        return state.set("tasks", tasks);
      },

      delTask(state, inParam) {
        let tasks = state.get("tasks");
        tasks = tasks.delete(tasks.findIndex(title => title === inParam.title));
        return state.set("tasks", tasks);
      },

      cleanTaksInput(state) {
        return state.setIn(["formData", "task"], "");
      }
    }
  }
});

```

## Component 与 model connect 起来

在 `list` 文件夹下创建 `components` 文件夹，内容如下：

```jsx harmony
## components/InputTask.js :

import React, { Component } from "react";
import { Input } from "@lugia/lugia-web";

export default class InputTask extends Component {
  render() {
    return (
      <Input
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={this.props.value}
      />
    );
  }

  onChange = (e) => {
    const { onChange } = this.props;
    onChange && onChange(e.newValue);
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const { onEnter } = this.props;
      onEnter && onEnter();
    }
  };
}

## components/List.js :

import React, { Component } from "react";
import styled from "styled-components";
const hoverColor = "red";
const Item = styled.li`
  user-select: none;
  cursor: pointer;
  &:hover {
    color: ${hoverColor};
  }
`;

const CloseIcon = styled.span`
  user-select: none;
  cursor: pointer;
  ${Item}:hover {
    color: ${hoverColor};
  }
  &:hover {
    color: ${hoverColor};
  }
`;

export default class List extends Component {
  render() {
    return <ul>{this.renderList()}</ul>;
  }

  delItem = (title) => () => {
    const { delItem } = this.props;
    delItem && delItem({ title });
  };

  renderList() {
    const { data = [] } = this.props;
    return data.map(title => {
      const del = this.delItem(title);
      return (
        <Item onClick={del}>
          {title} <CloseIcon onClick={del}>x</CloseIcon>
        </Item>
      );
    });
  }
}

```

现在我们创建完成了 Component 和 model，下面我们把他们关联起来：

```jsx harmony
## list/index.js

import React, { Component } from "react";
import InputTask from "./components/InputTask";
import List from "./components/List";
import { bindTo, connect } from "@lugia/lugiax";
import todo from "./models/todo";

const TodoList = connect(
  todo,
  state => {
    return { data: state.todo.get("tasks") };
  },
  mutations => {
    const { todo } = mutations;
    return { delItem: todo.delTask };
  }
)(List);

const fieldPath = ["formData", "task"];
const fieldName = fieldPath.join(".");

const TodoInput = bindTo(
  todo,
  {
    [fieldName]: "value"
  },
  {
    onChange: {
      [fieldName](v) {
        return v;
      }
    }
  },
  {
    onEnter() {
      todo.mutations.addTask();
    }
  }
)(InputTask);

export default () => {
  return (
    <div>
      <h1>To Do List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};
```

这样，TodoInput 和 TodoList 组件就和 model 关联起来了，这里用到了 `connect` 和 `bindTo` ， lugiax 共提供了
`connect` 、`bindTo` 、`bind` 三种绑定方法，关于更多请参考...

## 构建应用

开发完成后，运行

```bosh
$ yarn build
```

几秒后输出：

```bosh
yarn run v1.7.0
$ lugia-scripts build
Build completed in 10.78s

Compiled successfully.

File sizes after gzip:

  135.61 KB  dist\index.f327bddb.js
  22.46 KB   dist\1.03dbcdbf.async.js
  4.28 KB    dist\index.5771692d.css
  729 B      dist\0.e5277a87.async.js

Done in 16.34s.

```

build 命令会将项目进行打包，可在 `dist` 目录下查看打包后的文件。



