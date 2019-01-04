/**
 * create by szfeng
 */

module.exports = {
  DefaultTag: {
    title: '基本用法',
    desc:
      '最基本的标签,type: customs | primary | basic | presets,四种属性展示不同风格的标签。',
    path: './DefaultTag'
  },

  ClosableTag: {
    title: '可关闭的标签',
    desc: '可以通过closeable变为可关闭标签,动画执行结束后触发onClose事件。',
    path: './ClosableTag'
  },

  OptionalTag: {
    title: '可选择的标签',
    desc: '通过type: optional,变为可选择标签,传入checked来控制是否选中',
    path: './OptionalTag'
  }
};
