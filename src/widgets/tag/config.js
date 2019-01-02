/**
 * create by szfeng
 */

module.exports = {
  DefaultTag: {
    title: '基本用法',
    desc: '可以通过closeable变为可关闭标签,动画执行结束后触发onClose事件。默认type为customs风格的标签,主题色为背景色,字体为白色',
    path: './DefaultTag'
  },

  RoundTag: {
    title: '半圆Tag',
    desc: '通过shape：round生成半圆标签',
    path: './RoundTag'
  },

  PrimaryTag: {
    title: 'primary',
    desc:
      '默认type属性为primary风格的标签,primary风格没有边框,主题色为背景色,字体为深灰色',
    path: './PrimaryTag'
  },

  BasicTag: {
    title: 'basic',
    desc:
      '默认type属性为basic风格的标签,primary风格没有背景色,主题色为边框色和字体色',
    path: './BasicTag'
  },

  PresetsTag: {
    title: 'basic',
    desc:
      '默认type属性为presets风格的标签,presets风格,主题色为边框色和字体色,背景色经过透明处理',
    path: './PresetsTag'
  },
};
