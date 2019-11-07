import React, { Component, Fragment } from "react";
import { Window, Button } from "@lugia/lugia-web";
import styled from "styled-components";
const Text = styled.p`
  padding: 20px 20px 20px;
  text-align: center;
`;
const Inner = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px auto 0px;
  background: #f2f2f2;
`;
export default class SizeWindow extends Component {
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
          width={400}
          height={500}
        >
          <Inner>
            <Text>我是内容</Text>
            <Text>窗体大小，可以自定义设置</Text>
          </Inner>
        </Window>
      </Fragment>
    );
  }
}
