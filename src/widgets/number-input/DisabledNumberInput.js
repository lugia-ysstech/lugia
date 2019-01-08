import React from 'react';
import { NumberInput, Button } from '@lugia/lugia-web';

export default class DisabledNumberInput extends React.Component<any, any> {
  state = {
    disabled: true
  };

  click = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.click} type="primary">
            点击切换状态
          </Button>
        </div>
        <NumberInput
          min={1}
          max={10}
          disabled={this.state.disabled}
          defaultValue={5}
        />
      </div>
    );
  }
}
