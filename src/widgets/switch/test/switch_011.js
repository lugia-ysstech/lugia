import React from 'react';
import { Switch,Icon } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSwitch extends React.Component {
  constructor() {
    super();
    this.state = {defaultVal:true};
  }
  onChange = v => {
    const {newValue} = v;
    this.setState({
      value:newValue
    });
  };
  render() {
    const {value,defaultVal} = this.state;
    return (
        <DemoItem>
          <div>text: 开/关, left: 日/月</div>
          <div>onChange none value：true</div>
          <Switch  value={defaultVal} />

          <div>disabled text</div>
          <Switch  value={value}  onChange={this.onChange} />

        </DemoItem>
    );
  }
}
