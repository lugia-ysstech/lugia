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
  ...widgetrouter,
  NotFound: {
    render: async () => {
      return  () => <Redirect
        to={{
          pathname: '/home',
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


const designRouter = {
  '/design': {
    exact: true,
    render: async () => import('../design/page'),
    value: '/component/affix',
    isHidden: true,
    describe: true,
    text: 'Lugia.D',
    children: [
      {
        value: 'Lugia Design of React',
        text: 'Lugia Design of React',
        icon: 'lugia-icon-financial_add_pic',
      },
    ]
  },
  '/design/introduce': {
    render: () => import('../design/page'),
    value: '/design/introduce',
    text: '简介',
  },
  '/design/core': {
    render: () => import('../design/page'),
    value: '/design/core',
    text: '设计核心观',
  },
  '/design/alignment': {
    render: () => import('../design/page'),
    value: '/design/alignment',
    text: '对齐',
  },
  '/design/repeat': {
    render: () => import('../design/page'),
    value: '/design/repeat',
    text: '重复',
  },
  '/design/proximity': {
    render: () => import('../design/page'),
    value: '/design/proximity',
    text: '组织性',
  },
  '/design/hierarchy': {
    render: () => import('../design/page'),
    value: '/design/hierarchy',
    text: '层级性',
  },
    '/design/feedback': {
  render: () => import('../design/page'),
    value: '/design/feedback',
    text: '反馈',
},
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
    ],
  },
];

export default { routerConfig, designRouter, designConfig, menuConfig };
