/**
 * create by szfeng
 */

module.exports = {
  DefaultTree: {
    title: '基本用法',
    desc: '默认为单选,可通过igronSelectField指定禁选的标识符',
    path: './DefaultTree'
  },
  RoundtTree: {
    title: '不同样式风格的单选树',
    desc: '设置shape：round,选中时圆角为全圆',
    path: './RoundtTree'
  },
  DefaultMutlipleTree: {
    title: '多选的Tree',
    desc: '多选的Tree,可通过igronSelectField指定禁选的标识符',
    path: './DefaultMutlipleTree'
  },
  DigDataTree: {
    title: '可加载大数据',
    desc: '可支持20万条数据快速加载成Tree控件',
    path: './DigDataTree'
  },

  InlineDataSingleTree: {
    title: '嵌套数据的单选Tree',
    desc:
      '通过指定translateTreeData：true,组件内部将嵌套数据自动转换成Tree型展开数据,可通过disabled指定禁选的项。注意需要指定valueField和displayField',
    path: './InlineSingleTree'
  },
  InlineDataMutlipleTree: {
    title: '嵌套数据的多选Tree',
    desc:
      '通过指定translateTreeData：true,组件内部将嵌套数据自动转换成Tree型展开数据,可通过disabled指定禁选的项,通过mutliple生成多选Tree。注意需要指定valueField和displayField',
    path: './InlineMutlipleTree'
  }
};
