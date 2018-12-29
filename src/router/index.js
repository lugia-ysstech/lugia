
const routerConfig = {
  "/component": {
    exact: true,
    render: async () => import('../widgets/affix'),
    value: '/component/affix',
    isHidden: true,
    text: 'Affix',
  },
  "/component/edittable": {
    render: () => import('../edit-table'),
    value: '/component/edittable',
    text: 'EditTable',
  },

  "/component/affix": {
    render: async () => import('../widgets/affix'),
    value: '/component/affix',
    text: 'Affix',
  },
  "/component/alert": {
    render: () => import('../widgets/alert'),
    value: '/component/alert',
    text: 'Alert',
  }
};
const designRouter = {
  "/design": {
    exact: true,
    render: async () => import('../design/page'),
    value: '/component/affix',
    isHidden: true,
    describe: true,
    text: 'Lugia.D',
    children:[
      {
        value: 'Lugia Design of React',
        text: 'Lugia Design of React',
        icon: 'lugia-icon-financial_add_pic',
      },
    ]
  },
  "/design/introduce": {
    render: () => import('../design/page'),
    value: '/design/introduce',
    text: '简介',
  },
  "/design/proximity": {
    render: () => import('../design/page'),
    value: '/design/proximity',
    text: '设计核心观',
  },
  "/design/alignment": {
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

export default {routerConfig,designRouter,designConfig};
