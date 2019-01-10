import React from 'react';
import { AmountInput,Button } from '@lugia/lugia-web';

export default class DisableAmountInput extends React.Component<any, any> {
  constructor (props: any) {
    super(props);
  }
  state = {
    disabled: false,
  };

  click = () => {
    const disabled =!this.state.disabled;
    this.setState({
      disabled
    });
  };

  render () {
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <Button onClick={this.click} type="primary">点击切换禁用状态</Button>
        </div>
        <AmountInput disabled={this.state.disabled}/>
    </div> );
  }
}
