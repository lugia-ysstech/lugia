import * as React from "react";
import { Tree, Theme, message } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

const config = {
  [Widget.Tree]: {
    Container: {
      normal: {
        width: 250
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

const switchIconNames = {
  open: "lugia-icon-direction_down",
  close: "lugia-icon-direction_right"
};
export default class DragSingleTree extends React.Component<> {
  constructor(props) {
    super(props);
    this.state = {
      nestedData
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

  render() {
    const { nestedData = [] } = this.state;
    return (
      <div>
        <Tree
          data={nestedData}
          expandAll
          theme={config}
          translateTreeData
          autoHeight
          draggable
          parentIsHighlight
          onDrop={this.onDropOfnested}
          switchIconNames={switchIconNames}
        />
      </div>
    );
  }
}
