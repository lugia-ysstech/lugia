import React, { useState, useEffect } from "react";
import G6 from "@antv/g6";
import { linkToUrl } from "../../support/commonMethods";
import { HoverDecorateUp, HoverDecorateDown } from "./hoverBackground";
import { data } from "./graphData";

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
              fill: "#ffffff",
              cursor: "pointer"
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
      const { class: className, x, y } = item.getModel();
      graph.setItemState(item, "hover", false);
      let newLabelFill;
      className === "dev" && (newLabelFill = "#6FBDFF");
      className === "des" && (newLabelFill = "#4D68FF");
      graph.updateItem(item, {
        labelCfg: {
          style: {
            fill: newLabelFill
          }
        }
      });
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
            labelCfg: {
              style: {
                fill: "#4D68FF",
                fontSize: 14
              }
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
            labelCfg: {
              style: {
                fill: "#6FBDFF",
                fontSize: 14
              }
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
    graph.edge(() => {
      return {
        style: {
          stroke: "#4D68FF",
          lineWidth: 1,
          endArrow: { path: G6.Arrow.triangle(6, 6, 0), fill: "#4D68FF" }
        }
      };
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
