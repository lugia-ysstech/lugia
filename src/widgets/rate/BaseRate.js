import React from "react";
import { Rate } from "@lugia/lugia-web";
import styled from "styled-components";
const TextBox = styled.span`
  font-size: 14px;
  color: #333;
  margin: 0 6px;
`;
export default class RateDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {
      defaultPropsConfig: {
        count: 10,
        max: 10,
        value: 3,
        disabled: false,
        allowHalf: false,
        classify: false,
        onClick: res => {
          this.setStateValue("defaultPropsConfig", "value", res.newValue);
        },
        onChange: res => {
          this.setStateValue("defaultPropsConfig", "value", res.newValue);
        }
      },
    };
  }
  render() {

    return (
      <div>
        <div>
          <Rate />
        </div>
       <div>
         <Rate {...this.state.defaultPropsConfig} />
         <TextBox>{this.state.defaultPropsConfig.value} 颗星</TextBox>
       </div>

      </div>
    );
  }
  setStateValue = (target: string, props: string, val: number) => {
    const data = Object.assign(this.state[target], { value: val });
    this.setState({
      [target]: data
    });
  };
}
