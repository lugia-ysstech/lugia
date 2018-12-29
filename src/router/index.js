import widgets from './widgets';
import widgetrouter from './widgetrouter';

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
  ...widgetrouter
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
  '/design/proximity': {
    render: () => import('../design/page'),
    value: '/design/proximity',
    text: '设计核心观',
  },
  '/design/alignment': {
    render: () => import('../design/page'),
    value: '/design/alignment',
    text: '设计核心观',
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
        value: '/design/proximity',
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
        value: '/design/organization',
        text: '组织性',
      },
    ],
  },
];

export default { routerConfig, designRouter, designConfig, menuConfig };
