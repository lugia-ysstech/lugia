import widgets from './widgets';
import widgetrouter from './widgetrouter';
import { Redirect } from '@lugia/lugiax-router/target/lib';
import React from 'react';

const getMenuConfig = data => {
  const arr = [];
  data.forEach(item => {
    const { category, describe, children } = item;
    const childArray = [];
    if (children && children.length > 0) {
      children.forEach(childs => {
        const { value, text } = childs;
        childArray.push(
          {
            value,
            text
          },
        );
      });
    }
    arr.push(
      {
        text: category,
        value: category,
        describe,
        children: childArray,
      },
    );
  });
  return arr;
};

const routerConfig = {
  '/component': {
    exact: true,
    render: async () => import('../widgets/affix'),
    value: '/component/affix',
    isHidden: true,
    text: 'Affix',
  },
  '/component/404': {
    exact: true,
    render: async () => import('../access/NotAccess'),
    value: '/component/404',
    isHidden: true,
    text: '404',
  },
  ...widgetrouter,
  NotFound: {
    isHidden: true,
    render: async () => {
      return  () => <Redirect
        to={{
          pathname: '/component/404',
        }}
      />;
    },
  }
};

const menuConfig = [
  { value: 'Lugia Design of React', text: 'Lugia Design of React' },
  { value: '快速上手', text: '快速上手' },
  { value: '项目实战', text: '项目实战' },
  { value: '在Lugia-mega中使用', text: '在Lugia-mega中使用' },
  {
    value: 'Components',
    text: 'Components',
    children: getMenuConfig(widgets),
  },
];

const getDesignRoute = data => {

  const rout = {};
  data.forEach( item => {
    const {children} = item;
    children.forEach( items => {
      const {value,text} = items;
      rout[value] = {
        render: () => import('../design/page'),
        value,
        text,
      };

    });
  });
  return rout;

};

const designConfig = [
  {
    value: 'Lugia.D',
    text: 'Lugia.D',
    children: [
      {
        value: '/design/introduce',
        text: '简介',
      },
      {
        value: '/design/core',
        text: '设计核心观',
      },
    ],
  },
  {
    value: '设计原则',
    text: '设计原则',
    children: [
      {
        value: '/design/alignment',
        text: '对齐',
      },
      {
        value: '/design/repeat',
        text: '重复',
      },
      {
        value: '/design/proximity',
        text: '组织性',
      },
      {
        value: '/design/hierarchy',
        text: '层级性',
      },
      {
        value: '/design/feedback',
        text: '反馈',
      },
      {
        value: '/design/guide',
        text: '引导',
      },
      {
        value: '/design/accessibility',
        text: '易用性',
      },
      {
        value: '/design/reduceskip',
        text: '减少跳转',
      },
    ],
  },
  {
    value: '视觉原则',
    text: '视觉原则',
    children: [
      {
        value: '/design/layout',
        text: '布局',
      },
      {
        value: '/design/pattern',
        text: '样式',
      },
      {
        value: '/design/color',
        text: '色彩',
      },
      {
        value: '/design/font',
        text: '字体',
      },
      {
        value: '/design/icon',
        text: '图标',
      },

    ],
  },
];

const designRouter = {
  '/design': {
    exact: true,
    render: async () => import('../design/page'),
    value: '/design/introduce',
    isHidden: true,
    text: 'Lugia.D',
  },
  ...getDesignRoute(designConfig),
  '/design/404': {
    exact: true,
    render: async () => import('../access/NotAccess'),
    value: '/design/404',
    isHidden: true,
    text: '404',
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return  () => <Redirect
        to={{
          pathname: '/design/404',
        }}
      />;
    },
  }
};


export default { routerConfig, designRouter, designConfig, menuConfig };
