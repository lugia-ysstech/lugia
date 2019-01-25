export default {
      '/component/affix':
        {
          value: '/component/affix',
          sort: 35,
          text: 'Affix 固钉',
          exact: true,
          render: async () => {
            return import('../widgets/affix');
          },
        },
      '/component/navmenu':
        {
          value: '/component/navmenu',
          sort: 36,
          text: 'NavMenu 导航菜单',
          exact: true,
          render: async () => {
            return import('../widgets/navmenu');
          },
        },
      '/component/pagination':
        {
          value: '/component/pagination',
          sort: 37,
          text: 'Pagination 分页',
          exact: true,
          render: async () => {
            return import('../widgets/pagination');
          },
        },
      '/component/steps':
        {
          value: '/component/steps',
          sort: 38,
          text: 'Steps 步骤条',
          exact: true,
          render: async () => {
            return import('../widgets/steps');
          },
        },
      '/component/alert':
        {
          value: '/component/alert',
          sort: 39,
          text: 'Alert 警告提示',
          exact: true,
          render: async () => {
            return import('../widgets/alert');
          },
        },
      '/component/drawer':
        {
          value: '/component/drawer',
          sort: 40,
          text: 'Drawer 抽屉',
          exact: true,
          render: async () => {
            return import('../widgets/drawer');
          },
        },
      '/component/message':
        {
          value: '/component/message',
          sort: 41,
          text: 'Message 全局提示',
          exact: true,
          render: async () => {
            return import('../widgets/message');
          },
        },
      '/component/modal':
        {
          value: '/component/modal',
          sort: 42,
          text: 'Modal 对话框',
          exact: true,
          render: async () => {
            return import('../widgets/modal');
          },
        },
      '/component/notification':
        {
          value: '/component/notification',
          sort: 43,
          text: 'Notification 通知提醒框',
          exact: true,
          render: async () => {
            return import('../widgets/notification');
          },
        },
      '/component/popconfirm':
        {
          value: '/component/popconfirm',
          sort: 44,
          text: 'Popconfirm 气泡确认框',
          exact: true,
          render: async () => {
            return import('../widgets/popconfirm');
          },
        },
      '/component/progress':
        {
          value: '/component/progress',
          sort: 45,
          text: 'Progress 进度条',
          exact: true,
          render: async () => {
            return import('../widgets/progress');
          },
        },
      '/component/skeleton':
        {
          value: '/component/skeleton',
          sort: 46,
          text: 'Skeleton 加载占位符',
          exact: true,
          render: async () => {
            return import('../widgets/skeleton');
          },
        },
      '/component/amountinput':
        {
          value: '/component/amountinput',
          sort: 47,
          text: 'AmountInput 金额输入框',
          exact: true,
          render: async () => {
            return import('../widgets/amount-input');
          },
        },
      '/component/autocomplete':
        {
          value: '/component/autocomplete',
          sort: 48,
          text: 'AutoComplete 自动完成',
          exact: true,
          render: async () => {
            return import('../widgets/auto-complete');
          },
        },
      '/component/cascader':
        {
          value: '/component/cascader',
          sort: 49,
          text: 'Cascader 级联选择',
          exact: true,
          render: async () => {
            return import('../widgets/cascader');
          },
        },
      '/component/checkbox':
        {
          value: '/component/checkbox',
          sort: 50,
          text: 'CheckBox 多选框',
          exact: true,
          render: async () => {
            return import('../widgets/checkbox');
          },
        },
      '/component/datepicker':
        {
          value: '/component/datepicker',
          sort: 51,
          text: 'DatePicker 日期选择器',
          exact: true,
          render: async () => {
            return import('../widgets/date-picker');
          },
        },
      '/component/dropmenu':
        {
          value: '/component/dropmenu',
          sort: 52,
          text: 'Dropmenu 下拉菜单',
          exact: true,
          render: async () => {
            return import('../widgets/dropmenu');
          },
        },
      '/component/input':
        {
          value: '/component/input',
          sort: 53,
          text: 'Input 文本输入框',
          exact: true,
          render: async () => {
            return import('../widgets/input');
          },
        },
      '/component/menu':
        {
          value: '/component/menu',
          sort: 54,
          text: 'Menu 菜单',
          exact: true,
          render: async () => {
            return import('../widgets/menu');
          },
        },
      '/component/numberinput':
        {
          value: '/component/numberinput',
          sort: 55,
          text: 'NumberInput 数字输入框',
          exact: true,
          render: async () => {
            return import('../widgets/number-input');
          },
        },
      '/component/radio':
        {
          value: '/component/radio',
          sort: 56,
          text: 'Radio 单选框',
          exact: true,
          render: async () => {
            return import('../widgets/radio');
          },
        },
      '/component/rate':
        {
          value: '/component/rate',
          sort: 57,
          text: 'Rate 评分',
          exact: true,
          render: async () => {
            return import('../widgets/rate');
          },
        },
      '/component/select':
        {
          value: '/component/select',
          sort: 58,
          text: 'Select 选择器',
          exact: true,
          render: async () => {
            return import('../widgets/select');
          },
        },
      '/component/slider':
        {
          value: '/component/slider',
          sort: 59,
          text: 'Slider 滑动输入条',
          exact: true,
          render: async () => {
            return import('../widgets/slider');
          },
        },
      '/component/switch':
        {
          value: '/component/switch',
          sort: 60,
          text: 'Switch 开关',
          exact: true,
          render: async () => {
            return import('../widgets/switch');
          },
        },
      '/component/timepicker':
        {
          value: '/component/timepicker',
          sort: 61,
          text: 'TimePicker 时间选择器',
          exact: true,
          render: async () => {
            return import('../widgets/time-picker');
          },
        },
      '/component/transfer':
        {
          value: '/component/transfer',
          sort: 62,
          text: 'Transfer 穿梭框',
          exact: true,
          render: async () => {
            return import('../widgets/transfer');
          },
        },
      '/component/tree':
        {
          value: '/component/tree',
          sort: 63,
          text: 'Tree 树形控件',
          exact: true,
          render: async () => {
            return import('../widgets/tree');
          },
        },
      '/component/treeselect':
        {
          value: '/component/treeselect',
          sort: 64,
          text: 'TreeSelect 树形选择控件',
          exact: true,
          render: async () => {
            return import('../widgets/tree-select');
          },
        },
      '/component/upload':
        {
          value: '/component/upload',
          sort: 65,
          text: 'Upload 上传',
          exact: true,
          render: async () => {
            return import('../widgets/upload');
          },
        },
      '/component/anchor':
        {
          value: '/component/anchor',
          sort: 66,
          text: 'Anchor 锚点',
          exact: true,
          render: async () => {
            return import('../widgets/anchor');
          },
        },
      '/component/backtop':
        {
          value: '/component/backtop',
          sort: 67,
          text: 'BackTop 回到顶部',
          exact: true,
          render: async () => {
            return import('../widgets/back-top');
          },
        },
      '/component/divider':
        {
          value: '/component/divider',
          sort: 68,
          text: 'Divider 分割线',
          exact: true,
          render: async () => {
            return import('../widgets/divider');
          },
        },
      '/component/loading':
        {
          value: '/component/loading',
          sort: 69,
          text: 'Loading 加载中',
          exact: true,
          render: async () => {
            return import('../widgets/loading');
          },
        },
      '/component/avatar':
        {
          value: '/component/avatar',
          sort: 70,
          text: 'Avatar 头像',
          exact: true,
          render: async () => {
            return import('../widgets/avatar');
          },
        },
      '/component/badge':
        {
          value: '/component/badge',
          sort: 71,
          text: 'Badge 徽标数',
          exact: true,
          render: async () => {
            return import('../widgets/badge');
          },
        },
      '/component/card':
        {
          value: '/component/card',
          sort: 72,
          text: 'Card 卡片',
          exact: true,
          render: async () => {
            return import('../widgets/card');
          },
        },
      '/component/carousel':
        {
          value: '/component/carousel',
          sort: 73,
          text: 'Carousel 走马灯',
          exact: true,
          render: async () => {
            return import('../widgets/carousel');
          },
        },
      '/component/collapse':
        {
          value: '/component/collapse',
          sort: 74,
          text: 'Collapse 折叠面板',
          exact: true,
          render: async () => {
            return import('../widgets/collapse');
          },
        },
      '/component/popover':
        {
          value: '/component/popover',
          sort: 75,
          text: 'Popover 气泡卡片',
          exact: true,
          render: async () => {
            return import('../widgets/popover');
          },
        },
      '/component/table':
        {
          value: '/component/table',
          sort: 76,
          text: 'Table 表格',
          exact: true,
          render: async () => {
            return import('../widgets/table');
          },
        },
      '/component/tabs':
        {
          value: '/component/tabs',
          sort: 77,
          text: 'Tabs 标签页',
          exact: true,
          render: async () => {
            return import('../widgets/tabs');
          },
        },
      '/component/tag':
        {
          value: '/component/tag',
          sort: 78,
          text: 'Tag 标签',
          exact: true,
          render: async () => {
            return import('../widgets/tag');
          },
        },
      '/component/timeline':
        {
          value: '/component/timeline',
          sort: 79,
          text: 'Timeline 时间轴',
          exact: true,
          render: async () => {
            return import('../widgets/time-line');
          },
        },
      '/component/tooltip':
        {
          value: '/component/tooltip',
          sort: 80,
          text: 'Tooltip 文字提示',
          exact: true,
          render: async () => {
            return import('../widgets/tooltip');
          },
        },
      '/component/breadcrumb':
        {
          value: '/component/breadcrumb',
          sort: 81,
          text: 'Breadcrumb 面包屑',
          exact: true,
          render: async () => {
            return import('../widgets/breadcrumb');
          },
        },
      '/component/button':
        {
          value: '/component/button',
          sort: 82,
          text: 'Button 按钮',
          exact: true,
          render: async () => {
            return import('../widgets/button');
          },
        },
      '/component/icon':
        {
          value: '/component/icon',
          sort: 83,
          text: 'Icon 图标',
          exact: true,
          render: async () => {
            return import('../widgets/icon');
          },
        },
      '/component/grid':
        {
          value: '/component/grid',
          sort: 84,
          text: 'Grid 栅格',
          exact: true,
          render: async () => {
            return import('../widgets/grid');
          },
        },
      '/component/layout':
        {
          value: '/component/layout',
          sort: 85,
          text: 'Layout 布局',
          exact: true,
          render: async () => {
            return import('../widgets/layout');
          },
        } };
