import React from 'react';
import {DemoItem} from './styled';
import { Switch, Button } from '@lugia/lugia-web';
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
      <div>
        <DemoItem>
          <Switch defaultValue disabled={this.state.disabled} />
        </DemoItem>
        <br />
        <DemoItem>
          <Button type="primary" onClick={this.toggle}>
            点击切换
          </Button>
        </DemoItem>        
      </div>
    );
  }
}
