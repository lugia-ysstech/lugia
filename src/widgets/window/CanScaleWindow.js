import React, { Component, Fragment } from "react";
import { Window, Button } from "@lugia/lugia-web";
import styled from "styled-components";
const Text = styled.p`
  //width: 200px;
  line-height: 200px;
  text-align: center;
`;

export default class CanScaleWindow extends Component {
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
          canScale
          width={500}
          height={500}
        >
          <Text>拉伸四边，四角</Text>
          <Text>可实现窗体缩放</Text>
        </Window>
      </Fragment>
    );
  }
}
