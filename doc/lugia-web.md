# Lugia Web of React

一套基于 Lugia Design 的高品质 React 组件库，满足金融行业高性能组件的需求，适用于 Web 端。

## 特性

* 多端统一
    * 整体开发风格统一
    * API接口设计统一
    * 多端统一的样式语法，放弃CSS标准
* 适用于金融行业，轻量化数据处理
* 开箱即用，使用方便
* 性能稳定，功能强大，测试覆盖率高达90%

## 支持环境

* 现代浏览器和 IE10 及以上
* 支持服务端渲染

## 版本

* 稳定版：[1.0.0](https://www.npmjs.com/package/lugia-web)

## 安装

我们推荐使用 npm 或 yarn 来进行安装，不仅方便，也可放心在生产环境打包部署。
安装之前，你需要安装 [nrm](https://www.npmjs.com/package/nrm) 来管理你的 `npm` 源信息。

```bash
    ## 安装
    $ npm install -g nrm
    ## 查看版本
    $ nrm -V
```
安装成功后，你需要配置 `lugia` 私服：
```bash
  $ nrm add lugia http://192.168.102.79:5001/
  $ nrm use lugia
  $ nrm ls
```

运行完命令后，你会看到，`npm` 源指向了 `lugia`。

```bash
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
* lugia -- http://192.168.102.79:5001/
```

这样，你就可以尽情享用 `lugia-web` 了。

```bash
    $ npm install @lugia/lugia-web --save
```
```bash
    $ yarn add @lugia/lugia-web
```

## 示例

```javascript
    import { DatePicker } from '@lugia/lugia-web';
    ReactDOM.render(<DatePicker />, root);
```

