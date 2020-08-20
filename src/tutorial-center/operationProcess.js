import React, { Component, Fragment, useEffect } from "react";
import G6 from "@antv/g6";

const data = {
  nodes: [
    {
      id: "node1",
      x: 50,
      y: 160,
      label: "创建项目",
      style: {
        width: 70,
        height: 40,
        fill: "#6FBDFF10",
        stroke: "#6FBDFF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#6FBDFF",
          fontSize: 14
        }
      }
    },
    {
      id: "node2",
      x: 170,
      y: 110,
      label: "常规建页",
      style: {
        width: 70,
        height: 40,
        fill: "#4D68FF10",
        stroke: "#4D68FF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#4D68FF",
          fontSize: 14
        }
      }
    },
    {
      id: "node3",
      x: 170,
      y: 210,
      label: "智能建页",
      style: {
        width: 70,
        height: 40,
        fill: "#6FBDFF10",
        stroke: "#6FBDFF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#6FBDFF",
          fontSize: 14
        }
      }
    },
    {
      id: "node4",
      x: 290,
      y: 160,
      label: "主题配置",
      style: {
        width: 70,
        height: 40,
        fill: "#4D68FF10",
        stroke: "#4D68FF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#4D68FF",
          fontSize: 14
        }
      }
    },
    {
      id: "node5",
      x: 410,
      y: 110,
      label: "搭建页面",
      style: {
        width: 70,
        height: 40,
        fill: "#4D68FF10",
        stroke: "#4D68FF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#4D68FF",
          fontSize: 14
        }
      }
    },
    {
      id: "node6",
      x: 515,
      y: 110,
      label: "智能布局",
      style: {
        width: 70,
        height: 40,
        fill: "#4D68FF10",
        stroke: "#4D68FF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#4D68FF",
          fontSize: 14
        }
      }
    },
    {
      id: "node7",
      x: 410,
      y: 210,
      label: "模板管理",
      style: {
        width: 70,
        height: 40,
        fill: "#6FBDFF10",
        stroke: "#6FBDFF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#6FBDFF",
          fontSize: 14
        }
      }
    },
    {
      id: "node8",
      x: 650,
      y: 160,
      label: "创建页面/路由层级",
      style: {
        width: 130,
        height: 40,
        fill: "#4D68FF10",
        stroke: "#4D68FF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#4D68FF",
          fontSize: 14
        }
      }
    },
    {
      id: "node9",
      x: 780,
      y: 160,
      label: "动作设计",
      style: {
        width: 70,
        height: 40,
        fill: "#4D68FF10",
        stroke: "#4D68FF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#4D68FF",
          fontSize: 14
        }
      }
    },
    {
      id: "node10",
      x: 895,
      y: 160,
      label: "页面交互开发",
      style: {
        width: 100,
        height: 40,
        fill: "#6FBDFF10",
        stroke: "#6FBDFF10",
        lineWidth: 1,
        radius: 4
      },
      labelCfg: {
        style: {
          fill: "#6FBDFF",
          fontSize: 14
        }
      }
    },
    {
      id: "node11",
      x: 750,
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
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      },
      controlPoints: [
        { x: 110, y: 160 },
        { x: 110, y: 110 }
      ]
    },
    {
      source: "node1",
      target: "node3",
      type: "polyline",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      },
      controlPoints: [
        { x: 110, y: 160 },
        { x: 110, y: 210 }
      ]
    },
    {
      source: "node2",
      target: "node4",
      type: "polyline",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      },
      controlPoints: [
        { x: 230, y: 110 },
        { x: 230, y: 160 }
      ]
    },
    {
      source: "node3",
      target: "node4",
      type: "polyline",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      },
      controlPoints: [
        { x: 230, y: 210 },
        { x: 230, y: 160 }
      ]
    },
    {
      source: "node4",
      target: "node5",
      type: "polyline",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      },
      controlPoints: [
        { x: 350, y: 160 },
        { x: 350, y: 110 }
      ]
    },
    {
      source: "node5",
      target: "node6",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      }
    },
    {
      source: "node4",
      target: "node7",
      type: "polyline",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      },
      controlPoints: [
        { x: 350, y: 160 },
        { x: 350, y: 210 }
      ]
    },
    {
      source: "node6",
      target: "node8",
      type: "polyline",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      },
      controlPoints: [
        { x: 565, y: 110 },
        { x: 565, y: 160 }
      ]
    },
    {
      source: "node7",
      target: "node8",
      type: "polyline",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      },
      controlPoints: [
        { x: 565, y: 210 },
        { x: 565, y: 160 }
      ]
    },
    {
      source: "node8",
      target: "node9",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      }
    },
    {
      source: "node9",
      target: "node10",
      style: {
        stroke: "#4D68FF",
        lineWidth: 1,
        endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
      }
    }
  ]
};

export default function() {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: ref.current,
        width: 1050,
        height: 320,
        defaultNode: {
          type: "rect",
          labelCfg: {
            position: "center"
          }
        }
      });
    }

    graph.data(data);

    graph.render();
  }, []);

  return <div ref={ref}></div>;
}
