/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { AmountInput } from "@lugia/lugia-web";

export default class DefaultValueAmountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "123456" };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
    this.props.onChange({ newValue: value });
  };

  render() {
    return <AmountInput value={this.state.value} onChange={this.onChange} />;
  }
}
