import React from 'react';
import { Input,Button } from '@lugia/lugia-web';

export default class DisableInput extends React.Component<any, any> {
  constructor (props: any) {
    super(props);
  }
  state = {
    disabled: false,
  };

  toggle = () => {
    const disabled =!this.state.disabled;
    this.setState({
      disabled
    });
  };

  render () {
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <Button onClick={this.toggle} type="primary">点击切换禁用状态</Button>
        </div>
        <Input disabled={this.state.disabled}/>
    </div> );
  }
}
