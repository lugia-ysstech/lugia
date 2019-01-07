import React from 'react';
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
        <Switch disabled={this.state.disabled} />
        <br />
        <Button type="primary" onClick={this.toggle}>
          点击切换禁用状态
        </Button>
      </div>
    );
  }
}
