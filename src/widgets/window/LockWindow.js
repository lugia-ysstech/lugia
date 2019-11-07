import React, { Component, Fragment } from "react";
import { Window, Button } from "@lugia/lugia-web";
import styled from "styled-components";
const Text = styled.p`
  width: 200px;
  line-height: 200px;
  text-align: center;
`;

export default class LockWindow extends Component {
  constructor() {
    super();
    this.state = {
      leftVisible: false,
      rightVisible: false
    };
  }
  onClick = () => {
    this.setState({ leftVisible: true, rightVisible: true });
  };
  onClose = key => () => {
    this.setState({ [key]: false });
  };
  render() {
    const { leftVisible, rightVisible } = this.state;
    return (
      <Fragment>
        <Button onClick={this.onClick}>打开窗体</Button>
        <Window
          visible={leftVisible}
          onClose={this.onClose("leftVisible")}
          width={500}
          height={800}
          lockingWay={"drag"}
          defaultIsLock
          lockDirection={"left"}
          lockTop={100}
          lockBottom={100}
        >
          <Text>左侧窗体</Text>
          <Text>可以拖拽</Text>
        </Window>
        <Window
          visible={rightVisible}
          onClose={this.onClose("rightVisible")}
          width={500}
          height={800}
          lockingWay={"drag"}
          isLock
          lockDirection={"right"}
          lockTop={100}
          lockBottom={100}
        >
          <Text>右侧窗体</Text>
          <Text>始终锁定</Text>
        </Window>
      </Fragment>
    );
  }
}
