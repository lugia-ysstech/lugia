/**
 * create by szfeng
 */

module.exports = {
  DefaultCarousel: {
    title: '基本用法',
    desc: '默认hover指示器触发切换',
    path: './DefaultCarousel'
  },
  DefaultClickCarousel: {
    title: '基本用法',
    desc: 'click指示器触发切换',
    path: './DefaultClickCarousel'
  },
  VerticalIndicatorCarousel: {
    title: '指示器垂直显示',
    desc:
      '设置indicator：vertical指示器垂直显示,设置switchType：vertical切换方式垂直切换',
    path: './VerticalIndicatorCarousel'
  },
  OutsideIndicatorCarousel: {
    title: '指示器在外部显示',
    desc: '设置indicator：outside指示器在外部显示',
    path: './OutsideIndicatorCarousel'
  },

  FadeCarousel: {
    title: '指示器在外部显示',
    desc:
      '设置switchType：fade切换方式渐显,设置animationTime：1000设置动画执行时间为1000毫秒',
    path: './FadeCarousel'
  },

  LimitCarousel: {
    title: '受限的走马灯',
    desc: '通过传入start来控制走马灯的切换,start是索引值',
    path: './LimitCarousel'
  }
};
