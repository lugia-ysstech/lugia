import * as React from "react";
import { TreeSelect, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

const data = [
  { value: "1", text: "1" },
  {
    value: "1.1",
    text: "1.1",
    pid: "1",
    path: "1",
    isLeaf: true,
    notCanSelect: true
  },

  { value: "1.2", text: "1.2", pid: "1", path: "1" },
  { value: "1.2.1", text: "1.2.1", pid: "1.2", path: "1/1.2", isLeaf: true },
  { value: "1.2.2", text: "1.2.2", pid: "1.2", path: "1/1.2", isLeaf: true },

  { value: "1.3", text: "1.3", pid: "1", path: "1", isLeaf: true },
  {
    value: "1.4",
    text: "1.4",
    pid: "1",
    path: "1",
    isLeaf: true,
    notCanSelect: true
  },
  { value: "1.5", text: "1.5", pid: "1", path: "1", isLeaf: true },

  { value: "2", text: "2" },
  { value: "2.1", text: "2.1", pid: "2", path: "2" },
  { value: "2.1.1", text: "2.1.1", pid: "2.1", path: "2/2.1", isLeaf: true },
  { value: "2.1.2", text: "2.1.2", pid: "2.1", path: "2/2.1" },
  {
    value: "2.1.2.1",
    text: "2.1.2.1",
    pid: "2.1.2",
    path: "2/2.1/2.1.2",
    isLeaf: true
  },

  { value: "3", text: "3" },
  { value: "3.1", text: "3.1", pid: "3", path: "3" },
  { value: "3.1.1", text: "3.1.1", pid: "3.1", path: "3/3.1", isLeaf: true },
  { value: "3.1.2", text: "3.1.2", pid: "3.1", path: "3/3.1" },
  {
    value: "3.1.2.1",
    text: "3.1.2.1",
    pid: "3.1.2",
    path: "3/3.1/3.1.2",
    isLeaf: true
  }
];

export default class CanSearchTreeSelect extends React.Component<any, any> {
  render() {
    const config = {
      [Widget.TreeSelect]: {
        Container: {
          normal: {
            width: 300,
            height: 30
          }
        }
      }
    };
    return (
      <Theme config={config}>
        <TreeSelect
          data={data}
          pathSeparator={'/'}
          onlySelectLeaf
          igronSelectField="notCanSelect"
          expandAll
          canSearch
        />
      </Theme>
    );
  }
}
