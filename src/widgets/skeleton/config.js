/**
 * create by szfeng
 */

module.exports = {
  DefaultSkeleton: {
    title: '基本用法',
    desc: '默认的占位符组合',
    path: './DefaultSkeleton'
  },
  ParagraphSkeleton: {
    title: '只有段落的占位符',
    desc:
      'avatar控制是否显示头像占位符,默认为true。title控制是否显示标题占位符,默认为true,titleWidth控制title占位符的宽度。paragraph为段落占位符的数量,paragraphWidth设置段落占位图的宽度。',
    path: './ParagraphSkeleton'
  },
  MultiSkeleton: {
    title: '更复杂的占位符',
    desc:
      '带有头像和图片占位符,pictureWidth和pictureHeight分别控制图像占位符的宽度和高度',
    path: './MultiSkeleton'
  },
  AnimationSkeleton: {
    title: '带动画的占位符',
    desc: '通过animation控制是否开启动画，默认为false',
    path: './AnimationSkeleton'
  },
  SwitchSkeleton: {
    title: '包含子组件',
    desc: '占位符包裹子组件,通过loading实现占位符和子组件的切换',
    path: './SwitchSkeleton'
  }
};
