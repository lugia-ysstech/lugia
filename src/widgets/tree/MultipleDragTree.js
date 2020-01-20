import * as React from "react";
import { Tree, Theme, message } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

const config = {
  [Widget.Tree]: {
    TreeWrap: {
      normal: {
        width: 500
      }
    }
  }
};

const sourceData = [
  {
    value: "0",
    text: "动物",
    children: [
      {
        value: "0-0",
        text: "运动分类",
        notCanSelect1: true,
        children: [
          { value: "0-0-0", text: "水中游", notCanSelect1: true },
          { value: "0-0-1", text: "地上走", notCanSelect1: true },
          { value: "0-0-2", text: "空中飞", notCanSelect1: true }
        ]
      },
      {
        value: "0-1",
        text: "生存方式",
        children: [
          { value: "0-1-0", text: "野生动物" },
          { value: "0-1-1", text: "饲养动物" }
        ]
      },
      {
        value: "0-2",
        text: "食性",
        children: [
          { value: "0-2-0", text: "植物动物" },
          { value: "0-2-1", text: "肉食动物" },
          { value: "0-2-2", text: "杂食动物" }
        ]
      },
      {
        value: "0-3",
        text: "身体特征",
        children: [
          { value: "0-3-0", text: "鱼类" },
          { value: "0-3-1", text: "鸟类" },
          { value: "0-3-2", text: "昆虫" },
          { value: "0-3-3", text: "哺乳类" },
          { value: "0-3-4", text: "软体类" }
        ]
      }
    ]
  }
];

const draggedData = [
  {
    value: "0",
    text: "动物",
    children: [
      {
        value: "0-0",
        text: "运动分类",
        children: [{ value: "0-0-0", text: "水中游" }]
      },

      {
        value: "0-2",
        text: "食性",
        children: [
          { value: "0-2-0", text: "植物动物" },
          { value: "0-2-1", text: "肉食动物" }
        ]
      },
      {
        value: "0-3",
        text: "身体特征",
        children: [{ value: "0-3-1", text: "哺乳类" }]
      }
    ]
  }
];

const otherData = [
  {
    value: "0",
    text: "动物",
    children: [
      {
        value: "0-0",
        text: "运动分类",
        children: [{ value: "0-0-0", text: "水中游" }]
      },

      {
        value: "0-2",
        text: "食性",
        children: [
          { value: "0-2-0", text: "植物动物" },
          { value: "0-2-1", text: "肉食动物" }
        ]
      },
      {
        value: "0-3",
        text: "身体特征",
        children: [{ value: "0-3-1", text: "哺乳类" }]
      }
    ]
  }
];

const switchIconNames = {
  open: "lugia-icon-direction_down",
  close: "lugia-icon-direction_right"
};

export default class DragMultipTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceData,
      draggedData,
      otherData
    };
  }
  recursion = (data, key, callback) => {
    let flag = false;
    const fn = (data, key, xx) => {
      if (Array.isArray(data) && data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          if (flag) {
            return;
          }
          const info = data[i];
          if (info.value === key) {
            flag = true;
            return callback(info, i, data);
          }
          if (Array.isArray(info.children) && info.children.length > 0) {
            fn(info.children, key, callback);
          }
        }
      }
    };
    fn(data, key, callback);
  };

  mouseLeave = node => {
    const { nodeData: { value: nodeKey } = {} } = node;
    const { sourceData: info } = this.state;
    let dragObj = {};
    this.recursion(info, nodeKey, (item, index, data) => {
      dragObj = item;
    });
    this.dragObj = JSON.parse(JSON.stringify(dragObj));
  };

  onDragEnter = node => {
    console.log("todo", node);
  };

  onDragEnd = () => {
    this.dragObj = null;
  };
  nodeIsExistence = (key, source) => {
    let tem = null;
    this.recursion(source, key, (item, index, data) => {
      tem = item;
    });
    return tem ? true : false;
  };
  onDrop = dragData => {
    const {
      dragInfo: { key } = {},
      targetInfo: { pid, key: targetKye, pos, dropPosition },
      dropToGap,
      isSelf
    } = dragData;
    const { draggedData: info } = this.state;
    const positionArray = pos.split("-");
    const InsertPosition = positionArray[positionArray.length - 1];
    let dragObj = {};
    if (isSelf) {
      this.recursion(info, key, (item, index, data) => {
        data.splice(index, 1);
        dragObj = item;
      });
    } else {
      const { value: key, text } = this.dragObj;
      const isExistence = this.nodeIsExistence(key, info);
      isExistence && message.error(`${text},节点已经存在!`, 2);
      dragObj = this.dragObj && !isExistence ? this.dragObj : null;
    }
    if (!dragObj) return;
    if (dropToGap) {
      if (pid) {
        this.recursion(info, pid, (item, index, data) => {
          item.children = item.children || [];
          dropPosition === "top"
            ? item.children.splice(InsertPosition, 0, dragObj)
            : item.children.splice(InsertPosition + 1, 0, dragObj);
        });
      } else {
        dropPosition === "top"
          ? info.splice(InsertPosition, 0, dragObj)
          : info.splice(InsertPosition + 1, 0, dragObj);
      }
    } else {
      this.recursion(info, targetKye, (item, index, data) => {
        item.children = item.children || [];
        item.children.push(dragObj);
      });
    }
    this.setState({ draggedData: [...info] });
  };

  onDropOfnested = dragData => {
    const {
      dragInfo: { key } = {},
      targetInfo: { pid, key: targetKye, pos, dropPosition },
      dropToGap
    } = dragData;
    const { otherData: info } = this.state;
    const positionArray = pos.split("-");
    const InsertPosition = positionArray[positionArray.length - 1];
    let dragObj = {};
    this.recursion(info, key, (item, index, data) => {
      data.splice(index, 1);
      dragObj = item;
    });
    if (dropToGap) {
      if (pid) {
        this.recursion(info, pid, (item, index, data) => {
          item.children = item.children || [];
          dropPosition === "top"
            ? item.children.splice(InsertPosition, 0, dragObj)
            : item.children.splice(InsertPosition + 1, 0, dragObj);
        });
      } else {
        dropPosition === "top"
          ? info.splice(InsertPosition, 0, dragObj)
          : info.splice(InsertPosition + 1, 0, dragObj);
      }
    } else {
      this.recursion(info, targetKye, (item, index, data) => {
        item.children = item.children || [];
        item.children.push(dragObj);
      });
    }
    this.setState({ info: [...info] });
  };

  render() {
    const { sourceData, draggedData, otherData } = this.state;
    return (
      <div>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <Tree
              data={sourceData}
              igronSelectField={"notCanSelect1"}
              groupKey={"111"}
              expandAll
              theme={config}
              translateTreeData
              autoHeight
              onDragLeave={this.mouseLeave}
              onDragEnd={this.onDragEnd}
              draggable
              parentIsHighlight
              switchIconNames={switchIconNames}
            />
          </div>
          <div style={{ flex: 1 }}>
            <Tree
              data={draggedData}
              draggable
              onDragEnter={this.onDragEnter}
              onDragEnd={this.onDragEnd}
              onDrop={this.onDrop}
              groupKey={"111"}
              translateTreeData
              expandAll
              theme={config}
              autoHeight
              parentIsHighlight
              switchIconNames={switchIconNames}
            />
          </div>
          <div style={{ flex: 1 }}>
            <Tree
              data={otherData}
              translateTreeData
              expandAll
              theme={config}
              onDrop={this.onDropOfnested}
              autoHeight
              draggable
              parentIsHighlight
              switchIconNames={switchIconNames}
            />
          </div>
        </div>
      </div>
    );
  }
}
