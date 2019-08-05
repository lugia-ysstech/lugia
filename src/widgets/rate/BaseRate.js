import React from 'react';
import { Rate, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
const TextBox = styled.span`
  font-size: 14px;
  color: #333;
  margin: 0 6px;
`;
export default class RateDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {
      defaultPropsConfig : {
        count: 10,
        max: 10,
        value: 3,
        disabled: false,
        allowHalf: false,
        classify: false,
        onClick: (e: Object, x: any) => {
          this.setStateValue('defaultPropsConfig', 'value',x.newValue);
        },
        onChange: (e: Object, x: any) => {}
      },
      defaultProps7Config : {
        count: 5,
        value: 0,
        allowHalf: true,
        onClick: (e: Object, x: any) => {
          this.setStateValue('defaultProps7Config','value', x.newValue);
        },
        onChange: (e: Object, x: any) => {
          // this.setStateValue('defaultProps7Config','value', x.newValue);
        }
      }
    };
  }
  render() {
    const config = {
      [Widget.Rate]: { fontSize: '18px' }
    };
    return (
      <div>
        <div>
          <div>
            <Rate />
          </div>
          <Rate {...this.state.defaultProps7Config}  />
          <TextBox>{this.state.defaultProps7Config.value} 颗星</TextBox>
        </div>
        <Theme config={config}>
          <Rate {...this.state.defaultPropsConfig}  />
          <TextBox>{this.state.defaultPropsConfig.value} 颗星</TextBox>
        </Theme>
      </div>
    );
  }
  setStateValue = (target: string, props: string, val: number) => {
    const data = Object.assign(this.state[target], { value: val });
    this.setState({
      [target]: data,
    });
  };
}
