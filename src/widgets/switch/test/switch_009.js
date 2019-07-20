import React from 'react';
import { Switch,Icon } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSwitch extends React.Component {
  constructor() {
    super();
    this.state = {value:true};
  }
  onChange = () => {
    const {value} = this.state;
    this.setState({
      value:!value
    });
  };
  render() {
    const {value} = this.state;
    return (
        <DemoItem>
          <div>disabled true</div>
          <Switch disabled  />

          <div>disabled false</div>
          <Switch disabled={false}  />

          <div>disabled  change value</div>
          <Switch value={value} disabled={false}  />
          <button onClick={this.onChange}>click to change value</button>

        </DemoItem>
    );
  }
}
