import React from 'react';
import { Rate, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
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
export default class HalfRateDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {};
  }
  render() {
    const rate = {
      [Widget.Rate]: { fontSize: '18px' }
    };
    const config = {
      count: 5,
      max: 10,
      value: 7,
      disabled: false,
      allowHalf: true,
      classify: false,
      onClick: (e: Object, x: any) => {
        this.setStateValue('config', x.currentValue);
      },
      onChange: (e: Object, x: any) => {
        this.setStateValue('config', x.currentValue);
      }
    };
    return (
      <div>
        <Theme config={rate}>
          <TitleBox>半星用法(总分10分) allowHalf：</TitleBox>
          <Rate {...config} />
          <TextBox>{this.state.config} 分</TextBox>
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
