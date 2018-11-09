/**
 *
 * create by ligx
 *
 * @flow
 */
import React, { Component } from "react";
import { Input } from "@lugia/lugia-web";

export default class InputTask extends Component<any> {
  render() {
    return (
      <Input
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        value={this.props.value}
      />
    );
  }

  onChange = (e: any) => {
    const { onChange } = this.props;
    onChange && onChange(e.newValue);
  };

  onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      const { onEnter } = this.props;
      onEnter && onEnter();
    }
  };
}
