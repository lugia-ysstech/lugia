import React, { useState, useEffect } from "react";
import G6 from "@antv/g6";
import styled from "styled-components";
import { linkToUrl } from "../support/commonMethods";

const HoverDecorateWrap = styled.div`
  width: 30px;
  height: 25px;
  position: absolute;
  top: ${props => (props.y ? props.y : 0)}px;
  left: ${props => (props.x ? props.x : 0)}px;
`;
const BigDot = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 4px;
  background: ${props => (props.isDev ? "#6FBDFF" : "#4d68ff")};
  opacity: 0.3;
  position: absolute;
  right: 0px;
  bottom: 4px;
`;
const BigDotDown = styled(BigDot)`
  top: 4px;
  left: 8px;
`;
const MiddleDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${props => (props.isDev ? "#6FBDFF" : "#4d68ff")};
  opacity: 0.3;
  position: absolute;
  left: 0px;
  top: 0px;
`;
const MiddleDotDown = styled(MiddleDot)`
  left: 22px;
  top: 16px;
`;
const SmallDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 4px;
  background: ${props => (props.isDev ? "#6FBDFF" : "#4d68ff")};
  opacity: 0.3;
  position: absolute;
  left: 8px;
  bottom: 4px;
`;
const SmallDotDown = styled(SmallDot)`
  left: 0;
  bottom: 6px;
`;

const data = {
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
      class: "des",
      label: "常规建页",
      style: {
        width: 70,
        height: 40
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
      class: "dev",
      label: "智能建页",
      style: {
        width: 70,
        height: 40
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
      class: "des",
      label: "主题配置",
      style: {
        width: 70,
        height: 40
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
      class: "des",
      label: "搭建页面",
      style: {
        width: 70,
        height: 40
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
      class: "des",
      label: "智能布局",
      style: {
        width: 70,
        height: 40
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
      class: "dev",
      label: "模板管理",
      style: {
        width: 70,
        height: 40
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
      class: "des",
      label: "创建页面/路由层级",
      style: {
        width: 130,
        height: 40
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
      class: "des",
      label: "动作设计",
      style: {
        width: 70,
        height: 40
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
      class: "dev",
      style: {
        width: 100,
        height: 40
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

const HoverDecorateUp = ({ x, y, isDev }) => {
  return (
    <HoverDecorateWrap x={x} y={y}>
      <BigDot isDev={isDev} />
      <MiddleDot isDev={isDev} />
      <SmallDot isDev={isDev} />
    </HoverDecorateWrap>
  );
};
const HoverDecorateDown = ({ x, y, isDev }) => {
  return (
    <HoverDecorateWrap x={x} y={y}>
      <BigDotDown isDev={isDev} />
      <MiddleDotDown isDev={isDev} />
      <SmallDotDown isDev={isDev} />
    </HoverDecorateWrap>
  );
};

export default function() {
  const ref = React.useRef(null);
  let graph = null;

  const [showHoverDecorate, setshowHoverDecorate] = useState(false);
  const [hoverDecorateUpX, setHoverDecorateUpX] = useState(0);
  const [hoverDecorateUpY, setHoverDecorateUpY] = useState(0);
  const [hoverDecorateDownX, setHoverDecorateDownX] = useState(0);
  const [hoverDecorateDownY, setHoverDecorateDownY] = useState(0);
  const [isDevStyle, setIsDevStyle] = useState(false);

  const bindEvents = () => {
    graph.on("node:mouseenter", event => {
      const { item } = event;
      const { class: className, x, y } = item.getModel();
      graph.setItemState(item, "hover", true);
      if (className === "dev" || className === "des") {
        graph.updateItem(item, {
          labelCfg: {
            style: {
              fill: "#ffffff"
            }
          }
        });
        setshowHoverDecorate(true);
        setHoverDecorateUpX(x);
        setHoverDecorateUpY(y - 45);
        setHoverDecorateDownX(x - 30);
        setHoverDecorateDownY(y + 20);
        className === "dev" ? setIsDevStyle(true) : setIsDevStyle(false);
      }
    });
    graph.on("node:mouseleave", event => {
      const { item } = event;
      graph.setItemState(item, "hover", false);
      setshowHoverDecorate(false);
    });

    graph.on("node:click", event => {
      const { item } = event;
      const { url } = item.getModel();
      url && linkToUrl(url);
    });
  };

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

    graph.node(node => {
      const defaultNodeStyle = { lineWidth: 1, radius: 4 };
      switch (node.class) {
        case "des":
          return {
            style: {
              fill: "#4D68FF10",
              stroke: "#4D68FF10",
              ...defaultNodeStyle
            },
            stateStyles: {
              hover: {
                fill: "#4D68FF"
              }
            }
          };
        case "dev":
          return {
            style: {
              fill: "#6FBDFF10",
              stroke: "#6FBDFF10",
              ...defaultNodeStyle
            },
            stateStyles: {
              hover: {
                fill: "#6FBDFF"
              }
            }
          };
        default:
          return {};
      }
    });

    graph.render();

    bindEvents();
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      {showHoverDecorate && (
        <HoverDecorateUp
          x={hoverDecorateUpX}
          y={hoverDecorateUpY}
          isDev={isDevStyle}
        />
      )}
      {showHoverDecorate && (
        <HoverDecorateDown
          x={hoverDecorateDownX}
          y={hoverDecorateDownY}
          isDev={isDevStyle}
        />
      )}
    </div>
  );
}
