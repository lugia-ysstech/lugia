/**
 * create by szfeng
 */

export default {
  DefaultSelect: {
    title: '基本用法',
    desc: '默认select为单选',
    path: './DefaultSelect'
  },

  LimitSingleSelect: {
    title: '受限的单选 Select 选择器',
    desc:
      '单选模式下,通过onChange事件和setState函数配合,实现对选中值的切换。注意：value和displayValue要同时使用',
    path: './LimitSingleSelect'
  },

  SearchSelect: {
    title: '带搜索框的 Select 选择器',
    desc: '通过 canSearch 属性开启搜索框,在搜索框中输入值时触发onQuery事件',
    path: './SearchSelect'
  },

  MutlipleSelect: {
    title: '带搜索框的 Select 选择器',
    desc: '通过 mutliple 属性开启多选',
    path: './MutlipleSelect'
  },

  CanInputSelect: {
    title: '自定义输入值的 Select 选择器',
    desc: '通过 canInput 属性开启自定义输入值,只有在开启canSearch时生效',
    path: './CanInputSelect'
  },

  LimitMutlipleSelect: {
    title: '受限的多选 Select 选择器',
    desc:
      '单选模式下,通过onChange事件和setState函数配合,实现对选中值的切换。注意：value和displayValue要同时使用',
    path: './LimitMutlipleSelect'
  }
};
