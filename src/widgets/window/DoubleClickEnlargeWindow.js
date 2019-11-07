import React, { Component, Fragment } from "react";
import { Window, Button } from "@lugia/lugia-web";
import styled from "styled-components";
const Text = styled.p`
  //width: 200px;
  line-height: 200px;
  text-align: center;
`;

export default class DoubleClickEnlargeWindow extends Component {
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
        <Button onClick={this.onClick}>打开窗体</Button>
        <Window
          visible={visible}
          onClose={this.onClose}
          middle
          canDoubleClickScale
        >
          <Text>双击头部最大化</Text>
          <Text>再次双击，还原原来的大小和位置</Text>
        </Window>
      </Fragment>
    );
  }
}
