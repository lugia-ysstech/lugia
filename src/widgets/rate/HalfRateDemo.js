import React from 'react';
import { Rate, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
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
      config:7
    };
  }
  render() {
    const rate = {
      [Widget.Rate]: { fontSize: '18px' }
    };
    const config = {
      count: 5,
      max: 10,
      disabled: false,
      allowHalf: true,
      classify: false,
      onClick: (e: Object, x: any) => {
        this.setStateValue('config', x.newValue);
      },
      onChange: (e: Object, x: any) => {
        this.setStateValue('config', x.newValue);
      }
    };
    return (
      <div>
        <Theme config={rate}>
          <Rate {...config} value={this.state.config}/>
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
