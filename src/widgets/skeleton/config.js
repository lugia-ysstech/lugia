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
    desc: '通过avatar：false隐藏头像占位符，默认为true。',
    path: './ParagraphSkeleton'
  },
  MultiSkeleton: {
    title: '更复杂的占位符',
    desc:
      '带有头像和图片占位符，pictureWidth和pictureHeight分别控制图像占位符的宽度和高度',
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
