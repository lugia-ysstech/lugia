import React from 'react';
import { Switch, Button } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 0 20px 0;
`;

export default class DisabledSwitch extends React.Component {
  state = {
    disabled: true
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };

  render() {
    return (
      <React.Fragment>
        <DemoItem>
          <Switch defaultValue disabled={this.state.disabled} />
        </DemoItem>
        <Button type="primary" onClick={this.toggle}>
          点击切换
        </Button>     
      </React.Fragment>
    );
  }
}
