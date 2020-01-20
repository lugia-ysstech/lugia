/**
 * create by szfeng
 */

module.exports = {
  DefaultTree: {
    title: "基本用法",
    desc: "默认为单选,可通过igronSelectField指定禁选的标识符",
    path: "./DefaultTree"
  },
  RoundtTree: {
    title: "不同样式风格的单选树",
    desc: "设置shape：round,选中时圆角为全圆",
    path: "./RoundtTree"
  },
  DefaultMutlipleTree: {
    title: "多选的Tree",
    desc: "多选的Tree,可通过igronSelectField指定禁选的标识符",
    path: "./DefaultMutlipleTree"
  },
  DigDataTree: {
    title: "可加载大数据",
    desc: "可支持20万条数据快速加载成Tree控件",
    path: "./DigDataTree"
  },

  InlineDataSingleTree: {
    title: "嵌套数据的单选Tree",
    desc:
      "通过指定translateTreeData：true,组件内部将嵌套数据自动转换成Tree型展开数据,可通过disabled指定禁选的项。注意需要指定valueField和displayField",
    path: "./InlineSingleTree"
  },

  InlineDataMutlipleTree: {
    title: "嵌套数据的多选Tree",
    desc:
      "通过指定translateTreeData：true,组件内部将嵌套数据自动转换成Tree型展开数据,可通过disabled指定禁选的项,通过mutliple生成多选Tree。注意需要指定valueField和displayField",
    path: "./InlineMutlipleTree"
  },

  SuffixTree: {
    title: "自定义后缀图标的Tree",
    desc: "通过renderSuffix回调函数, 可以自定义后缀图标",
    path: "./SuffixTree"
  },

  ShowMenuTree: {
    title: "右键显示菜单的Tree",
    desc: "通过onRightClick事件, 展示自定义菜单",
    path: "./ShowMenuTree"
  },

  SingleDragTree: {
    title: "单棵树拖拽",
    desc: "通过设置draggable：true,可实现树节点的换位。",
    path: "./SingleDragTree"
  },

  MultipleDragTree: {
    title: "树的分组拖拽",
    desc:
      "通过设置groupKey属性，可实现树与树的节点交互位置（两个tree的groupKey必须一致）",
    path: "./MultipleDragTree"
  }
};
