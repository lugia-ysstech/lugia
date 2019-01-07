/**
 * create by szfeng
 */

module.exports = {
  DefaultTree: {
    title: '基本用法',
    desc: '默认为单选,可通过igronSelectField指定禁选的标识符',
    path: './DefaultTree'
  },
  DefaultMutlipleTree: {
    title: '多选的Tree',
    desc: '多选的Tree,可通过igronSelectField指定禁选的标识符',
    path: './DefaultMutlipleTree'
  },
  InlineSingleTree: {
    title: '嵌套数据的单选Tree',
    desc:
      '通过指定translateTreeData：true,组件内部将嵌套数据自动转换成Tree型展开数据,可通过disabled指定禁选的项。注意需要指定valueField和displayField',
    path: './InlineSingleTree'
  },
  InlineMutlipleTree: {
    title: '嵌套数据的多选Tree',
    desc:
      '通过指定translateTreeData：true,组件内部将嵌套数据自动转换成Tree型展开数据,可通过disabled指定禁选的项,通过mutliple生成多选Tree。注意需要指定valueField和displayField',
    path: './InlineMutlipleTree'
  }
};
