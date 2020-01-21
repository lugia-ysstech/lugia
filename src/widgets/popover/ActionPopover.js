import React from "react";
import { Popover, Button, Input } from "@lugia/lugia-web";
import styled from "styled-components";
import { Popconfirm } from "../popconfirm/ActionPopconfirm";

const Direction = styled(Button)``;
const Wrapper = styled.div``;
const PopWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export default class ActionPopover extends React.Component<any, any> {
  render() {
    const text = "this is title ";
    const description = "this is description";
    return (
      <Wrapper>
        <PopWrapper>
          <Popover
            title={text}
            action={"click"}
            placement="top"
            description={[<div>{description}</div>, <div>{description}</div>]}
          >
            <Direction type="primary">鼠标点击</Direction>
          </Popover>
        </PopWrapper>
        <PopWrapper>
          <Popover
            title={text}
            action={"hover"}
            placement="top"
            description={[<div>{description}</div>, <div>{description}</div>]}
          >
            <Direction type="primary">鼠标移入</Direction>
          </Popover>
        </PopWrapper>
        <PopWrapper>
          <Popover
            title={text}
            action={"focus"}
            placement="top"
            description={[<div>{description}</div>, <div>{description}</div>]}
          >
            <Input placeholder={"聚焦弹出"} />
          </Popover>
        </PopWrapper>
      </Wrapper>
    );
  }
}
