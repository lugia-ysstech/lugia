/**
 *
 * create by ligx
 *
 * @flow
 */
/**
 *
 * create by ligx
 *
 * @flow
 */

import React, { Component } from "react";
import { Button as Btn } from "@lugia/lugia-web";

export default class Button extends Component<any> {
  render() {
    const { data } = this.props;
    return (
      <Btn type="primary" shape="round" onClick={this.props.onClick}>
        {this.props.doing ? data[1] : data[0]}
      </Btn>
    );
  }
}
