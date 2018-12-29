/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { NumberInput, Button } from "@lugia/lugia-web";

export default class DisabledNumberInput extends React.Component<any, any> {
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
        <NumberInput
          min={1}
          max={10}
          disabled={this.state.disabled}
          defaultValue={5}
        />
        <p />
        <Button onClick={this.toggle} type="primary">
          点击切换
        </Button>
      </div>
    );
  }
}
