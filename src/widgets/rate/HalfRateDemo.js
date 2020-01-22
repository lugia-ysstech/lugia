import React from 'react';
import { Rate } from '@lugia/lugia-web';
import styled from 'styled-components';

const TextBox = styled.span`
  font-size: 14px;
  color: #333;
  margin: 0 6px;
`;
export default class HalfRateDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {
      value:7
    };
  }
  render() {

    const config = {
      count: 5,
      max: 10,
      disabled: false,
      allowHalf: true,
      classify: false,
      onClick: res => {
        this.setStateValue("value",  res.newValue);
      },
      onChange: res => {
        this.setStateValue("value", res.newValue);
      }
    };
    const {value} = this.state;
    return (
      <div>
          <Rate {...config} value={value}/>
          <TextBox>{value} 分</TextBox>
      </div>
    );
  }

  setStateValue = (target: string, val: number) => {
    this.setState({
      [target]: val
    });
  };
}
