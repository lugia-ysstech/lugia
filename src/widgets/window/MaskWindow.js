import React, { Component, Fragment } from "react";
import { Window, Button } from "@lugia/lugia-web";
import styled from "styled-components";
const Text = styled.p`
  text-align: center;
  width: 200px;
  height: 200px;
  line-height: 200px;
`;

export default class MaskWindow extends Component {
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
        <Button onClick={this.onClick}>带有遮罩的窗体</Button>
        <Window visible={visible} onClose={this.onClose} middle mask>
          <Text>带有遮罩的窗体</Text>
        </Window>
      </Fragment>
    );
  }
}
