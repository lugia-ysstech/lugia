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

const nestedData = [
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
const delayeringData = [
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

const switchIconNames = {
  open: "lugia-icon-direction_down",
  close: "lugia-icon-direction_right"
};
export default class DragSingleTree extends React.Component<> {
  constructor(props) {
    super(props);
    this.state = {
      nestedData,
      delayeringData
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

  onDropOfnested = dragData => {
    const {
      dragInfo: { key } = {},
      targetInfo: { pid, key: targetKye, pos, dropPosition },
      dropToGap
    } = dragData;
    const { nestedData: info } = this.state;
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

  onDropOfDelayering = dragData => {
    const { delayeringData: metadata } = this.state;
    let {
      dragInfo: { dargCurrentIndex, dargNextIndex, dargPreIndex } = {},
      targetInfo: { dropPosition, targetParentIndex, targetCurrentIndex },
      dropToGap,
      translateTreeData
    } = dragData;
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
    this.setState({ delayeringData: [...metadata] });
  };

  dragTargetToTopHandler(targetIndex, InsertNodeinfos, targetParentIndex) {
    const { delayeringData: metadata } = this.state;
    const { pid: targetPid = "" } = metadata[targetIndex];
    metadata.splice(targetIndex, 0, ...InsertNodeinfos);
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
      fixTargetCurrentIndex: targetIndex,
      nextPathArray
    });
  }

  dragTargetToBottomHandler(
    targetIndex,
    InsertNodeinfos = [],
    targetParentIndex
  ) {
    const { delayeringData: metadata } = this.state;
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

  dragTargetToInHandler(targetIndex, InsertNodeinfos = []) {
    const { delayeringData: metadata } = this.state;
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

  calculationDragCount(dargCurrentIndex) {
    const { delayeringData: metadata } = this.state;
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

  updataDataPath(parameter) {
    const { delayeringData: metadata } = this.state;
    const {
      pid,
      deleteCount,
      fixTargetCurrentIndex,
      nextPathArray
    } = parameter;
    const startIndex = fixTargetCurrentIndex;
    const endIndex = fixTargetCurrentIndex + deleteCount;
    let prePathArray = [];
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

  render() {
    const { nestedData = [], delayeringData = [] } = this.state;
    return (
      <div>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <Tree
              data={nestedData}
              expandAll
              theme={config}
              translateTreeData
              draggable
              parentIsHighlight
              onDrop={this.onDropOfnested}
              switchIconNames={switchIconNames}
            />
          </div>
          <div style={{ flex: 1 }}>
            <Tree
              data={delayeringData}
              expandAll
              theme={config}
              autoHeight
              draggable
              parentIsHighlight
              onDrop={this.onDropOfDelayering}
              switchIconNames={switchIconNames}
            />
          </div>
        </div>
      </div>
    );
  }
}
