import React, { Component, Fragment } from "react";
import { Window, Button } from "@lugia/lugia-web";
import styled from "styled-components";
const Text = styled.p`
  padding: 20px 20px 20px;
  text-align: center;
  width:200px;
`;
export default class PositionWindow extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  onClick = () => {
    this.setState({ visible: true });
  };
  onClose = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <Button onClick={this.onClick}>点击打开窗体组件</Button>
        <Window
          visible={visible}
          onClose={this.onClose}
          x={300}
          y={200}
        >
          <Text>我的初始位置是</Text>
          <Text>距离左上角</Text>
          <Text>水平300 垂直200</Text>
        </Window>
      </Fragment>
    );
  }
}
