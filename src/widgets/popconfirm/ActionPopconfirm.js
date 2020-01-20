import React from "react";
import { Popconfirm, Theme, Button, Input } from "@lugia/lugia-web";
import styled from "styled-components";

const Direction = styled(Button)``;
const Wrapper = styled.div``;
const PopWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export default class ActionPopconfirm extends React.Component<any, any> {
  render() {
    const text = "确定删除这个选项吗?";
    return (
      <Wrapper>
        <PopWrapper>
          <Popconfirm placement="top" title={text} action={"click"}>
            <Direction type="primary">鼠标点击</Direction>
          </Popconfirm>
        </PopWrapper>
        <PopWrapper>
          <Popconfirm placement="top" title={text} action={"hover"}>
            <Direction type="primary">鼠标移入</Direction>
          </Popconfirm>
        </PopWrapper>
        <PopWrapper>
          <Popconfirm title={text} action={"focus"} placement="top">
            <Input placeholder={"聚焦弹出"} />
          </Popconfirm>
        </PopWrapper>
      </Wrapper>
    );
  }
}
