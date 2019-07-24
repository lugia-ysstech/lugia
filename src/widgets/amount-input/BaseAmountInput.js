import React from "react";
import { AmountInput, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts/index";
export default class BaseAmountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    return (
        <AmountInput value={this.state.value} onChange={this.onChange} />
    );
  }
}
