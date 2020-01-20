import React from "react";
import { Input, Theme, Icon } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";

export default class BaseInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    const fig = {
      [Widget.Input]: {
        Container: {
          normal: {
            height: 100
          }
        }
      }
    };
    return (
      <Theme config={fig}>
        <Input
          prefix={<Icon iconClass="lugia-icon-financial_search" />}
          value={this.state.value}
          onChange={this.onChange}
        />
      </Theme>
    );
  }
}
