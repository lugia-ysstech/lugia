import widgets from "./widgets";
import widgetrouter from "./widgetrouter";
import { Redirect } from "@lugia/lugiax-router";
import React from "react";
import PageLoading from "../pageloading";

const getMenuConfig = data => {
  const arr = [];
  data.forEach(item => {
    const { category, describe, children } = item;
    const childArray = [];
    if (children && children.length > 0) {
      children.forEach(childs => {
        const { value, text } = childs;
        childArray.push({
          value,
          text
        });
      });
    }
    arr.push({
      text: category,
      value: category,
      describe,
      children: childArray
    });
  });
  return arr;
};

const routerConfig = {
  "/component": {
    exact: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/component/lugia"
          }}
        />
      );
    },
    isHidden: true
  },
  "/component/lugia": {
    exact: true,
    render: async () => import("../design/page"),
    value: "/component/lugia",
    text: "Lugia Design of React",
    sort: 31
  },
  "/component/quick-start": {
    exact: true,
    render: async () => import("../design/page"),
    value: "/component/quick-start",
    text: "快速上手",
    sort: 32
  },
  "/component/start-project": {
    exact: true,
    render: async () => import("../design/page"),
    value: "/component/start-project",
    text: "项目实战",
    sort: 33
  },
  "/component/lugiax": {
    exact: true,
    render: async () => import("../design/page"),
    value: "/component/lugiax",
    text: "lugiax使用",
    sort: 34
  },
  ...widgetrouter,
  "/component/404": {
    exact: true,
    render: async () => import("../access/NotAccess"),
    value: "/component/404",
    isHidden: true,
    text: "404"
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/component/404"
          }}
        />
      );
    }
  }
};

const menuConfig = [
  { value: "/component/lugia", text: "Lugia Design of React" },
  { value: "/component/quick-start", text: "快速上手" },
  { value: "/component/start-project", text: "项目实战" },
  { value: "/component/lugiax", text: "lugiax使用" },
  // { value: '在Lugia-mega中使用', text: '在Lugia-mega中使用' },
  {
    value: "Components",
    text: "Components",
    children: getMenuConfig(widgets)
  }
];

const getDesignRoute = data => {
  const rout = {};
  data.forEach(item => {
    const { children } = item;
    children.forEach(items => {
      const { value, text, sort } = items;
      rout[value] = {
        render: () => import("../design/page"),
        value,
        text,
        sort
      };
    });
  });
  return rout;
};

const designConfig = [
  {
    value: "Lugia.D",
    text: "Lugia.D",
    children: [
      {
        value: "/design/introduce",
        text: "简介",
        sort: 1
      },
      {
        value: "/design/core",
        text: "设计核心观",
        sort: 2
      }
    ]
  },
  {
    value: "设计原则",
    text: "设计原则",
    children: [
      {
        value: "/design/alignment",
        text: "对齐",
        sort: 3
      },
      {
        value: "/design/repeat",
        text: "重复",
        sort: 4
      },
      {
        value: "/design/proximity",
        text: "组织性",
        sort: 5
      },
      {
        value: "/design/hierarchy",
        text: "层级性",
        sort: 6
      },
      {
        value: "/design/feedback",
        text: "反馈",
        sort: 7
      },
      {
        value: "/design/guide",
        text: "引导",
        sort: 8
      },
      {
        value: "/design/accessibility",
        text: "易用性",
        sort: 9
      },
      {
        value: "/design/reduceskip",
        text: "减少跳转",
        sort: 10
      }
    ]
  },
  {
    value: "视觉原则",
    text: "视觉原则",
    children: [
      {
        value: "/design/layout",
        text: "布局",
        sort: 11
      },
      {
        value: "/design/pattern",
        text: "样式",
        sort: 12
      },
      {
        value: "/design/color",
        text: "色彩",
        sort: 13
      },
      {
        value: "/design/font",
        text: "字体",
        sort: 14
      },
      {
        value: "/design/icon",
        text: "图标",
        sort: 15
      }
    ]
  }
];

const designRouter = {
  "/design": {
    exact: true,
    value: "/design/introduce",
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/design/introduce"
          }}
        />
      );
    },
    isHidden: true,
    text: "Lugia.D"
  },
  ...getDesignRoute(designConfig),
  "/design/404": {
    exact: true,
    render: async () => import("../access/NotAccess"),
    value: "/design/404",
    isHidden: true,
    text: "404"
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/design/404"
          }}
        />
      );
    }
  }
};

const getChildrenRout = (data, rout) => {
  let innerRout = rout;
  if (!data) return;
  data.forEach(item => {
    const { value, text, sort, children } = item;
    innerRout[value] = {
      render: () => import("../tutorial-center/pages/page.js"),
      value,
      text,
      sort
    };
    getChildrenRout(children, innerRout);
  });
  return innerRout;
};
const getChildrenRoutMobile = (data, rout) => {
  let innerRout = rout;
  if (!data) return;
  data.forEach(item => {
    const { value, text, sort, children } = item;
    innerRout[value] = {
      render: () => import("../mobile/tutorial-center/pages/page.js"),
      value,
      text,
      sort
    };
    getChildrenRoutMobile(children, innerRout);
  });
  return innerRout;
};
const getTutorialRoute = (data, isMobile = false) => {
  const rout = {};
  data.forEach(item => {
    const { children } = item;
    isMobile
      ? getChildrenRoutMobile(children, rout)
      : getChildrenRout(children, rout);
  });
  return rout;
};
const tutorialConfig = [
  {
    value: "常规建页",
    text: "常规建页",
    children: [
      {
        value: "/tutorial/pages/quick-start",
        text: "快速上手",
        sort: 1
      },
      {
        value: "/tutorial/pages/normal-built",
        text: "普通建页",
        sort: 2
      },
      {
        value: "建页操作",
        text: "建页操作",
        describe: true,
        children: [
          {
            value: "/tutorial/pages/group",
            text: "成组",
            sort: 3
          },
          {
            value: "/tutorial/pages/component-tree",
            text: "组件树",
            sort: 4
          },
          {
            value: "/tutorial/pages/align",
            text: "对齐",
            sort: 5
          }
        ]
      }
    ]
  },
  {
    value: "主题配置",
    text: "主题配置",
    children: [
      {
        value: "/tutorial/pages/theme-quick-start",
        text: "快速上手",
        sort: 6
      },
      {
        value: "/tutorial/pages/public-value-set",
        text: "设置公共值",
        sort: 7
      },
      {
        value: "/tutorial/pages/component-set",
        text: "设置组件库",
        sort: 8
      }
    ]
  },
  {
    value: "搭建页面",
    text: "搭建页面",
    children: [
      {
        value: "/tutorial/pages/built-quick-start",
        text: "快速上手",
        sort: 9
      },
      {
        value: "基础操作",
        text: "基础操作",
        describe: true,
        children: [
          {
            value: "/tutorial/pages/drag",
            text: "拖拽/选择/替换组件",
            sort: 10
          },
          {
            value: "/tutorial/pages/magnify",
            text: "放大/缩小/移动组件",
            sort: 11
          },
          {
            value: "/tutorial/pages/copy",
            text: "复制/粘贴/移动组件",
            sort: 12
          },
          {
            value: "/tutorial/pages/built-align",
            text: "对齐",
            sort: 13
          },
          {
            value: "/tutorial/pages/reference-line",
            text: "参考线",
            sort: 14
          },
          {
            value: "/tutorial/pages/component-level",
            text: "组件层级",
            sort: 15
          },
          {
            value: "/tutorial/pages/component-group",
            text: "组件成组",
            sort: 16
          },
          {
            value: "/tutorial/pages/change-position",
            text: "组件互换位置",
            sort: 17
          }
        ]
      },
      {
        value: "/tutorial/pages/page-list",
        text: "页面列表板",
        sort: 18
      },
      {
        value: "/tutorial/pages/page-component",
        text: "页面组件树",
        sort: 19
      }
    ]
  },
  {
    value: "智能布局",
    text: "智能布局",
    children: [
      {
        value: "/tutorial/pages/layout-quick-start",
        text: "快速上手",
        sort: 20
      }
    ]
  }
];
const tutorialRouter = {
  ...getTutorialRoute(tutorialConfig),
  "/tutorial/404": {
    exact: true,
    render: async () => import("../access/NotAccess"),
    value: "/tutorial/404",
    isHidden: true,
    text: "404"
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/tutorial/404"
          }}
        />
      );
    }
  }
};
const tutorialRouterMobile = {
  ...getTutorialRoute(tutorialConfig, true),
  "/tutorial/404": {
    exact: true,
    render: async () => import("../access/NotAccess"),
    value: "/tutorial/404",
    isHidden: true,
    text: "404"
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/tutorial/404"
          }}
        />
      );
    }
  }
};

const getDesignRouteMobile = data => {
  const rout = {};
  data.forEach(item => {
    const { children } = item;
    children.forEach(items => {
      const { value, text, sort } = items;
      rout[value] = {
        render: () => import("../mobile/design/page"),
        value,
        text,
        sort
      };
    });
  });
  return rout;
};

const designRouterMobile = {
  "/design": {
    exact: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/design/introduce"
          }}
        />
      );
    },
    value: "/design/introduce",
    isHidden: true,
    text: "Lugia.D"
  },
  ...getDesignRouteMobile(designConfig),
  "/design/404": {
    exact: true,
    render: async () => import("../access/NotAccess"),
    value: "/design/404",
    isHidden: true,
    text: "404"
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/design/404"
          }}
        />
      );
    }
  }
};

const routerConfigMobile = {
  "/component": {
    exact: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/component/lugia"
          }}
        />
      );
    },
    isHidden: true
  },
  "/component/lugia": {
    exact: true,
    render: async () => import("../mobile/design/page"),
    value: "/component/lugia",
    text: "Lugia Design of React",
    sort: 31
  },
  "/component/quick-start": {
    exact: true,
    render: async () => import("../mobile/design/page"),
    value: "/component/quick-start",
    text: "快速上手",
    sort: 32
  },
  "/component/start-project": {
    exact: true,
    render: async () => import("../mobile/design/page"),
    value: "/component/start-project",
    text: "项目实战",
    sort: 33
  },
  "/component/lugiax": {
    exact: true,
    render: async () => import("../mobile/design/page"),
    value: "/component/lugiax",
    text: "lugiax使用",
    sort: 34
  },
  ...widgetrouter,
  "/component/404": {
    exact: true,
    render: async () => import("../access/NotAccess"),
    value: "/component/404",
    isHidden: true,
    text: "404"
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/component/404"
          }}
        />
      );
    }
  }
};

let defaultDesignRouter = designRouter;
let defaultRouterConfig = routerConfig;
let defaultTutorialRouter = tutorialRouter;

const u = window.navigator.userAgent.toLowerCase();
if (
  u.indexOf("iphone") > -1 ||
  u.indexOf("android") > -1 ||
  u.indexOf("ipad") > -1
) {
  const _query_url = location.search;
  if (_query_url.indexOf("ismobile") < 0) {
    defaultDesignRouter = designRouterMobile;
    defaultRouterConfig = routerConfigMobile;
    defaultTutorialRouter = tutorialRouterMobile;
  }
}

export default {
  routerConfig: defaultRouterConfig,
  designRouter: defaultDesignRouter,
  designConfig,
  menuConfig,
  designRouterMobile,
  tutorialConfig,
  tutorialRouter: defaultTutorialRouter
};
