/**
 *
 * create by fjz
 *
 * @flow
 */
import * as React from "react";
import { Tree, Theme, Input, message } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import { getBorderRadius } from "@lugia/theme-utils";

const config = {
  [Widget.Tree]: {
    TreeWrap: {
      normal: {
        width: 500
      }
    }
  }
};
export type TreeDataItem = {
  value: string,
  text: string,
  pid?: string,
  path?: string,
  isLeaf?: boolean,
  children?: Array<TreeDataItem>
};

export type TreeState = {
  info: Array<TreeDataItem>,
  info1: Array<TreeDataItem>,
  exchange1: Array<TreeDataItem>,
  exchange2: Array<TreeDataItem>
};

type UpdataDataParameter = {
  pid: string,
  deleteCount: number,
  fixTargetCurrentIndex: number,
  nextPathArray: Array<string>
};

export type TreeProps = {};
const info = [
  {
    value: "0",
    text: "北京分行",
    children: [
      {
        value: "0-0",
        text: "朝阳支行办事处",
        children: [
          { value: "0-0-0", text: "朝阳支行办事处-1" },
          { value: "0-0-1", text: "朝阳支行办事处-2" }
        ]
      },
      { value: "0-1", text: "海淀支行办事处" },
      { value: "0-2", text: "石景山支行办事处" }
    ]
  },
  {
    value: "1",
    text: "天津分行",
    children: [
      { value: "和平支行办事处", text: "和平支行办事处" },
      { value: "河东支行办事处", text: "河东支行办事处" },
      { value: "南开支行办事处", text: "南开支行办事处" }
    ]
  }
];
const info1 = [
  { value: "0", text: "北京分行" },
  { value: "0.0", text: "朝阳支行办事处", pid: "0", path: "0" },
  {
    value: "0.0.0",
    text: "朝阳支行办事处-1",
    pid: "0.0",
    path: "0/0.0",
    isLeaf: true,
    notCanSelect1: true
  },
  {
    value: "0.0.1",
    text: "朝阳支行办事处-2",
    pid: "0.0",
    path: "0/0.0",
    isLeaf: true
  },
  { value: "0.1", text: "海淀支行办事处", pid: "0", path: "0", isLeaf: true },
  { value: "0.2", text: "石景山支行办事处", pid: "0", path: "0", isLeaf: true },
  { value: "1", text: "天津分行" },
  { value: "1.0", text: "和平支行办事处", pid: "1", path: "1", isLeaf: true },
  { value: "1.1", text: "河东支行办事处", pid: "1", path: "1", isLeaf: true },
  { value: "1.2", text: "南开支行办事处", pid: "1", path: "1", isLeaf: true }
];

const exchange1 = [
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

const exchange2 = [
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
export default class TreeDome extends React.Component<TreeProps, TreeState> {
  dragObj: Object;
  constructor(props: TreeProps) {
    super(props);
    this.state = {
      info,
      info1,
      exchange1,
      exchange2,
      showFlag: true
    };
  }
  recursion = (data: Array<TreeDataItem>, key: string, callback: Function) => {
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

  onDrop = (obj: Object) => {
    const {
      dragInfo: { key } = {},
      targetInfo: { pid, key: targetKye, pos, dropPosition },
      dropToGap
    } = obj;
    const { info } = this.state;
    const positionArray = pos.split("-");
    const InsertPosition = positionArray[positionArray.length - 1];
    let dragObj: TreeDataItem = {};
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

  onDrop1 = (obj: Object) => {
    const { info1: metadata } = this.state;
    let {
      dragInfo: { dargCurrentIndex, dargNextIndex, dargPreIndex } = {},
      targetInfo: { dropPosition, targetParentIndex, targetCurrentIndex },
      dropToGap,
      translateTreeData
    } = obj;
    if (translateTreeData) return;
    let dragObj = [];
    const dragCurrentData = metadata[dargCurrentIndex];
    const dragPreData = metadata[dargPreIndex];
    const dragNextdata = metadata[dargNextIndex];
    if (
      dragNextdata &&
      dragCurrentData.pid !== dragNextdata.pid &&
      dragPreData &&
      dragCurrentData.pid !== dragPreData.pid
    ) {
      dragPreData.isLeaf = true;
    }
    if (!dragNextdata && dragCurrentData.pid !== dragPreData.pid) {
      dragPreData.isLeaf = true;
    }
    const deleteCount = this.calculationDragCount(dargCurrentIndex);
    dragObj = metadata.splice(dargCurrentIndex, deleteCount);
    targetCurrentIndex =
      targetCurrentIndex >= dargCurrentIndex
        ? targetCurrentIndex - deleteCount
        : targetCurrentIndex;
    targetParentIndex =
      targetParentIndex >= dargCurrentIndex
        ? targetParentIndex - deleteCount
        : targetParentIndex;
    if (dropToGap) {
      if (dropPosition === "top") {
        this.dragTargetToTopHandler(
          targetCurrentIndex,
          dragObj,
          targetParentIndex
        );
      } else {
        this.dragTargetToBottomHandler(
          targetCurrentIndex,
          dragObj,
          targetParentIndex
        );
      }
    } else {
      this.dragTargetToInHandler(targetCurrentIndex, dragObj);
    }
    this.setState({ info1: [...metadata] });
  };

  dragTargetToTopHandler(
    targetIndex: number,
    InsertNodeinfos: Array<Object> = [],
    targetParentIndex: number
  ) {
    const { info1: metadata } = this.state;
    // 拖拽数据插入到响应位置
    const { pid: targetPid = "" } = metadata[targetIndex];
    metadata.splice(targetIndex, 0, ...InsertNodeinfos);
    let nextPathArray = [];
    // 重新计算path
    if (targetPid) {
      const updataItem = metadata[targetParentIndex];
      updataItem.isLeaf = false;
      nextPathArray = updataItem.path
        ? [updataItem.path, updataItem.value]
        : [updataItem.value];
    }
    this.updataDataPath({
      pid: targetPid,
      deleteCount: InsertNodeinfos.length,
      fixTargetCurrentIndex: targetIndex,
      nextPathArray
    });
  }

  dragTargetToBottomHandler(
    targetIndex: number,
    InsertNodeinfos: Array<Object> = [],
    targetParentIndex: number
  ) {
    const { info1: metadata } = this.state;
    const count = this.calculationDragCount(targetIndex);
    const { pid: targetPid = "" } = metadata[targetIndex];
    metadata.splice(targetIndex + count, 0, ...InsertNodeinfos);
    let nextPathArray = [];
    if (targetPid) {
      const updataItem = metadata[targetParentIndex];
      updataItem.isLeaf = false;
      nextPathArray = updataItem.path
        ? [updataItem.path, updataItem.value]
        : [updataItem.value];
    }
    this.updataDataPath({
      pid: targetPid,
      deleteCount: InsertNodeinfos.length,
      fixTargetCurrentIndex: targetIndex + count,
      nextPathArray
    });
  }

  dragTargetToInHandler(
    targetIndex: number,
    InsertNodeinfos: Array<Object> = []
  ) {
    const { info1: metadata } = this.state;
    metadata.splice(targetIndex + 1, 0, ...InsertNodeinfos);
    const { value = "" } = metadata[targetIndex];
    let nextPathArray = [];
    const updataItem = metadata[targetIndex];
    updataItem.isLeaf = false;
    nextPathArray = updataItem.path
      ? [updataItem.path, updataItem.value]
      : [updataItem.value];
    this.updataDataPath({
      pid: value,
      deleteCount: InsertNodeinfos.length,
      fixTargetCurrentIndex: targetIndex + 1,
      nextPathArray
    });
  }

  calculationDragCount(dargCurrentIndex: number) {
    const { info1: metadata } = this.state;
    let deleteCount = 1;
    for (let i = dargCurrentIndex + 1, max = metadata.length; i < max; i++) {
      const tem = metadata[i];
      const { path = "" } = tem;
      const pidArray = path.split("/");
      if (pidArray.indexOf(metadata[dargCurrentIndex].value) === -1) {
        break;
      }
      deleteCount += 1;
    }
    return deleteCount;
  }

  updataDataPath(parameter: UpdataDataParameter) {
    const { info1: metadata } = this.state;
    const {
      pid,
      deleteCount,
      fixTargetCurrentIndex,
      nextPathArray
    } = parameter;
    const startIndex = fixTargetCurrentIndex;
    const endIndex = fixTargetCurrentIndex + deleteCount;
    let prePathArray: Array<string> = [];
    for (let i = startIndex; i < endIndex; i++) {
      const tem = metadata[i];
      if (i === startIndex) {
        tem.pid = pid;
        prePathArray = tem.path ? tem.path.split("/") : [];
        tem.path = nextPathArray.join("/");
      } else {
        const currentPathArray = tem.path ? tem.path.split("/") : [];
        currentPathArray.splice(0, prePathArray.length);
        tem.path = nextPathArray.concat(currentPathArray).join("/");
      }
    }
  }

  mouseLeave = (node: Object) => {
    const { nodeData: { value: nodeKey } = {} } = node;
    const { exchange1: info } = this.state;
    let dragObj: TreeDataItem = {};
    this.recursion(info, nodeKey, (item, index, data) => {
      dragObj = item;
    });
    this.dragObj = JSON.parse(JSON.stringify(dragObj));
  };

  mouseEnter = (node: Object) => {
    console.log("todo", node);
  };
  onDragEnd = () => {
    this.dragObj = null;
  };
  nodeIsExistence = (key: string, source: Array<Ojbect>) => {
    let tem = null;
    this.recursion(source, key, (item, index, data) => {
      tem = item;
    });
    return tem;
  };
  exchangeOnDrop = (obj: Object) => {
    const {
      dragInfo: { key } = {},
      targetInfo: { pid, key: targetKye, pos, dropPosition },
      dropToGap,
      isSelf
    } = obj;
    const { exchange2: info } = this.state;
    const positionArray = pos.split("-");
    const InsertPosition = positionArray[positionArray.length - 1];
    let dragObj: TreeDataItem = {};
    if (isSelf) {
      this.recursion(info, key, (item, index, data) => {
        data.splice(index, 1);
        dragObj = item;
      });
    } else {
      let { value: key, text } = this.dragObj;
      let isExistence = this.nodeIsExistence(key, info);
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
    this.setState({ exchange2: [...info] });
  };

  render() {
    const { info = [], info1 = [], exchange1, exchange2 } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ padding: "20px 0" }}>树的分组拖拽</h1>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <Tree
              data={exchange1}
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
              data={exchange2}
              draggable
              onDragEnter={this.mouseEnter}
              onDragEnd={this.onDragEnd}
              onDrop={this.exchangeOnDrop}
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
              data={exchange2}
              translateTreeData
              expandAll
              theme={config}
              autoHeight
              draggable
              parentIsHighlight
              onDrop={this.exchangeOnDrop}
              switchIconNames={switchIconNames}
            />
          </div>
        </div>
        <h1 style={{ padding: "20px 0" }}>单棵树拖拽</h1>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <Tree
              data={info}
              expandAll
              theme={config}
              translateTreeData
              draggable
              parentIsHighlight
              onDrop={this.onDrop}
              switchIconNames={switchIconNames}
            />
          </div>
          <div style={{ flex: 1 }}>
            <Tree
              data={info1}
              expandAll
              theme={config}
              autoHeight
              draggable
              parentIsHighlight
              onDrop={this.onDrop1}
              switchIconNames={switchIconNames}
            />
          </div>
        </div>
      </div>
    );
  }
}
