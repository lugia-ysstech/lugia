import data from "../assets/sourceData.json";

const tutorialData = Object.values(data);

/*const tutorialSourceData = [
  {
    value: "常规建页",
    text: "常规建页",
    children: [
      {
        value: "quick-start",
        text: "快速上手",
        desc: "我是描述文字",
        keyword: ""
      },
      {
        value: "normal-built",
        text: "普通建页",
        desc: "我是描述文字"
      },
      {
        value: "建页操作",
        text: "建页操作",
        children: [
          {
            value: "group",
            text: "成组",
            desc: "我是描述文字"
          },
          {
            value: "component-tree",
            text: "组件树",
            desc: "我是描述文字"
          },
          {
            value: "align",
            text: "对齐",
            desc: "我是描述文字"
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
        value: "theme-quick-start",
        text: "快速上手",
        desc: "我是描述文字"
      },
      {
        value: "public-value-set",
        text: "设置公共值",
        desc: "我是描述文字"
      },
      {
        value: "component-set",
        text: "设置组件库",
        desc: "我是描述文字"
      }
    ]
  },
  {
    value: "搭建页面",
    text: "搭建页面",
    children: [
      {
        value: "built-quick-start",
        text: "快速上手",
        desc: "我是描述文字"
      },
      {
        value: "基础操作",
        text: "基础操作",
        children: [
          {
            value: "drag",
            text: "拖拽/选择/替换组件",
            desc: "我是描述文字"
          },
          {
            value: "magnify",
            text: "放大/缩小/移动组件",
            desc: "我是描述文字"
          },
          {
            value: "copy",
            text: "复制/粘贴/移动组件",
            desc: "我是描述文字"
          },
          {
            value: "built-align",
            text: "对齐",
            desc: "我是描述文字"
          },
          {
            value: "reference-line",
            text: "参考线",
            desc: "我是描述文字"
          },
          {
            value: "component-level",
            text: "组件层级",
            desc: "我是描述文字"
          },
          {
            value: "component-group",
            text: "组件成组",
            desc: "我是描述文字"
          },
          {
            value: "change-position",
            text: "组件互换位置",
            desc: "我是描述文字"
          }
        ]
      },
      {
        value: "page-list",
        text: "页面列表板",
        desc: "我是描述文字"
      },
      {
        value: "page-component",
        text: "页面组件树",
        desc: "我是描述文字"
      }
    ]
  },
  {
    value: "智能布局",
    text: "智能布局",
    children: [
      {
        value: "layout-quick-start",
        text: "快速上手",
        desc: "我是描述文字"
      }
    ]
  }
];*/

let sort = 1;
let times = 0;
export const tutorialRouterData = getRouterData(tutorialData);

export const tutorialSearchData = getSearchData(tutorialData);

// 添加url地址:
function getDataUrl(data) {
  let tempObj = [];
  Array.isArray(data) &&
    data.forEach(item => {
      const { value, text, desc, children } = item;
      if (children) {
        tempObj.push({ value, text, ...getDataUrl(children) });
      } else {
        const url = `/tutorial/pages/${value}`;
        tempObj.push({ value, text, desc, url });
      }
    });
  return tempObj;
}

// 搜索数据:
function getSearchData(data, type) {
  let tempObj = [];
  Array.isArray(data) &&
    data.forEach(item => {
      const { value, text, desc, keyword, children } = item;
      if (children) {
        tempObj.push(...getSearchData(children, text));
      } else {
        const url = `/tutorial/pages/${value}`;
        tempObj.push({
          value,
          desc,
          type,
          url,
          keyword,
          content: text,
          owner: "tutorial"
        });
      }
    });
  return tempObj;
}

// 路由数据:
function getRouterData(data) {
  times++;
  let tempObj = [];
  Array.isArray(data) &&
    data.forEach(item => {
      const { value, text, desc, children, describe } = item;
      if (children && children.length > 0) {
        tempObj.push({
          value,
          text,
          describe,
          children: [...getRouterData(children)]
        });
      } else {
        const url = `/tutorial/pages/${value}`;
        tempObj.push({ value, text, desc, url, sort: sort });
        sort++;
      }
    });
  return tempObj;
}
