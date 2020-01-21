/**
 *
 * create by szfeng
 *
 */

import * as React from "react";
import { Select, Theme } from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts/index";

const SelectWrap = styled.div`
  margin: 10px;
  display: inline-block;
`;

const data = [
  {
    value: "lugia-A",
    text: "杰尼龟",
    disabled: true
  },
  {
    value: "lugia-B",
    text: "火恐龙"
  },
  {
    value: "lugia-C",
    text: "绿毛虫"
  },
  {
    value: "lugia-D",
    text: "独角虫"
  },
  {
    value: "lugia-E",
    text: "皮卡丘"
  },
  {
    value: "lugia-F",
    text: "大针蜂"
  },
  {
    value: "lugia-G",
    text: "小拉达"
  },
  {
    value: "lugia-H",
    text: "大嘴雀"
  },
  {
    value: "lugia-I",
    text: "雷丘"
  },
  {
    value: "lugia-J",
    text: "尼多兰"
  },
  {
    value: "lugia-K",
    text: "胖可丁"
  }
];
export default class MutlipleSelect extends React.Component {
  render() {
    const config = {
      [Widget.Select]: {
        Container: {
          normal: {
            width: 250,
            height: 30
          }
        }
      }
    };

    return (
      <Theme config={config}>
        <SelectWrap>
          <Select
            valueField={"value"}
            displayField={"text"}
            data={data}
            mutliple
            defaultValue={["lugia-B", "lugia-D"]}
          />
        </SelectWrap>
      </Theme>
    );
  }
}
