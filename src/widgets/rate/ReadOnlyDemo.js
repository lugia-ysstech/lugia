import React from "react";
import { Rate, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
const TitleBox = styled.div`
  position: relative;
  padding: 10px;
  font-size: 18px;
  border-top: 1px solid #ccc;
`;
const TextBox = styled.span`
  font-size: 14px;
  color: #333;
`;
export default class RateDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {};
  }
  render() {
    const rate = {
      [Widget.Rate]: { fontSize: "18px" }
    };
    const config = {
      count: 5,
      max: 5,
      value: 3.6,
      disabled: true,
      allowHalf: true,
      className: "cccc",
      onClick: (e: Object, x: any) => {},
      onChange: (e: Object, x: any) => {
        this.setStateValue("config", x.currentValue);
      }
    };
    return (
      <div>
        <Theme config={rate}>
          <Rate {...config} character="好" />
          <TextBox>{this.state.config} 颗星</TextBox>
        </Theme>
      </div>
    );
  }
  setStateValue = (target: string, val: number) => {
    this.setState({
      [target]: val
    });
  };
}
