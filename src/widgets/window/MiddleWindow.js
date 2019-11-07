import React, { Component, Fragment } from "react";
import { Window, Button } from "@lugia/lugia-web";
import styled from "styled-components";
const Text = styled.p`
  padding: 20px 20px 20px;
  text-align: center;
  width: 200px;
`;
const Item = styled.span`
  display: inline-block;
  margin-right: 20px;
`;
export default class MiddleWindow extends Component {
  constructor() {
    super();
    this.state = {
      levelVisible: false,
      verticalVisible: false,
      middleVisible: false
    };
  }
  onClick = key => () => {
    this.setState({ [key]: true });
  };
  onClose = key => () => {
    this.setState({ [key]: false });
  };
  render() {
    const { levelVisible, verticalVisible, middleVisible } = this.state;
    return (
      <Fragment>
        <Item>
          <Button onClick={this.onClick("levelVisible")}>水平居中</Button>
        </Item>
        <Item>
          <Button onClick={this.onClick("verticalVisible")}>垂直居中</Button>
        </Item>
        <Item>
          <Button onClick={this.onClick("middleVisible")}>居中</Button>
        </Item>
        <Window
          visible={levelVisible}
          onClose={this.onClose("levelVisible")}
          middle
          y={200}
        >
          <Text>水平居中显示</Text>
          <Text> 垂直200</Text>
        </Window>
        <Window
          visible={verticalVisible}
          onClose={this.onClose("verticalVisible")}
          middle
          x={200}
        >
          <Text>垂直居中显示</Text>
          <Text>水平 200</Text>
        </Window>
        <Window
          visible={middleVisible}
          onClose={this.onClose("middleVisible")}
          middle
        >
          <Text>居中显示</Text>
        </Window>
      </Fragment>
    );
  }
}
