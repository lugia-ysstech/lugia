export const data = {
  nodes: [
    {
      id: "node1",
      x: 50,
      y: 160,
      label: "创建项目",
      url: "/tutorial/pages/quick-start",
      class: "dev",
      style: {
        width: 70,
        height: 40
      }
    },
    {
      id: "node2",
      x: 170,
      y: 110,
      class: "des",
      label: "常规建页",
      url: "/tutorial/pages/normal-quick-start",
      style: {
        width: 70,
        height: 40
      }
    },
    {
      id: "node3",
      x: 170,
      y: 210,
      class: "dev",
      label: "智能建页",
      url: "/tutorial/pages/intelligence-quick-start",
      style: {
        width: 70,
        height: 40
      }
    },
    {
      id: "node4",
      x: 290,
      y: 160,
      class: "des",
      label: "主题配置",
      url: "/tutorial/pages/theme-quick-start",
      style: {
        width: 70,
        height: 40
      }
    },
    {
      id: "node5",
      x: 410,
      y: 110,
      class: "des",
      label: "搭建页面",
      url: "/tutorial/pages/built-quick-start",
      style: {
        width: 70,
        height: 40
      }
    },
    {
      id: "node6",
      x: 515,
      y: 110,
      class: "des",
      label: "智能布局",
      url: "/tutorial/pages/layout-quick-start",
      style: {
        width: 70,
        height: 40
      }
    },
    {
      id: "node7",
      x: 410,
      y: 210,
      class: "dev",
      label: "模板管理",
      url: "/tutorial/pages/copy-to-project",
      style: {
        width: 70,
        height: 40
      }
    },
    {
      id: "node8",
      x: 660,
      y: 160,
      class: "des",
      label: "创建页面/路由层级",
      url: "/tutorial/pages/page-quick-start",
      style: {
        width: 130,
        height: 40
      }
    },
    {
      id: "node9",
      x: 800,
      y: 160,
      label: "页面交互开发",
      url: "/tutorial/pages/layout-quick-start",
      class: "dev",
      style: {
        width: 100,
        height: 40
      }
    },
    {
      id: "node11",
      x: 840,
      y: 295,
      label: "设计人员",
      style: {
        width: 20,
        height: 10,
        fill: "#4D68FF10",
        stroke: "#4D68FF10",
        lineWidth: 1,
        radius: 0
      },
      labelCfg: {
        position: "right",
        offset: -30,
        style: {
          fill: "#4D68FF",
          fontSize: 12
        }
      }
    },
    {
      id: "node12",
      x: 940,
      y: 295,
      label: "开发人员",
      style: {
        width: 20,
        height: 10,
        fill: "#6FBDFF10",
        stroke: "#6FBDFF10",
        lineWidth: 1,
        radius: 0
      },
      labelCfg: {
        position: "right",
        offset: -30,
        style: {
          fill: "#6FBDFF",
          fontSize: 12
        }
      }
    }
  ],
  edges: [
    {
      source: "node1",
      target: "node2",
      type: "polyline",
      controlPoints: [
        { x: 110, y: 160 },
        { x: 110, y: 110 }
      ]
    },
    {
      source: "node1",
      target: "node3",
      type: "polyline",
      controlPoints: [
        { x: 110, y: 160 },
        { x: 110, y: 210 }
      ]
    },
    {
      source: "node2",
      target: "node4",
      type: "polyline",
      controlPoints: [
        { x: 230, y: 110 },
        { x: 230, y: 160 }
      ]
    },
    {
      source: "node3",
      target: "node4",
      type: "polyline",
      controlPoints: [
        { x: 230, y: 210 },
        { x: 230, y: 160 }
      ]
    },
    {
      source: "node4",
      target: "node5",
      type: "polyline",
      controlPoints: [
        { x: 350, y: 160 },
        { x: 350, y: 110 }
      ]
    },
    {
      source: "node5",
      target: "node6"
    },
    {
      source: "node4",
      target: "node7",
      type: "polyline",
      controlPoints: [
        { x: 350, y: 160 },
        { x: 350, y: 210 }
      ]
    },
    {
      source: "node6",
      target: "node8",
      type: "polyline",
      controlPoints: [
        { x: 565, y: 110 },
        { x: 565, y: 160 }
      ]
    },
    {
      source: "node7",
      target: "node8",
      type: "polyline",
      controlPoints: [
        { x: 565, y: 210 },
        { x: 565, y: 160 }
      ]
    },
    {
      source: "node8",
      target: "node9"
    }
  ]
};
