/**
 *
 * create by ligx
 *
 * @flow
 */

import React, { Component } from "react";
import Timer from "./Timer";

export default class NowTimer extends Component<any> {
  render() {
    if (this.props.doing) {
      return (
        <Timer
          taskName={this.props.taskName}
          beginAt={this.props.beginAt}
          time={this.props.time}
        />
      );
    }
    return "";
  }
}
