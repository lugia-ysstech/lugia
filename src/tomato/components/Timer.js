/**
 *
 * create by ligx
 *
 * @flow
 */

import React, { Component } from "react";

export default class Timer extends Component<any> {
  render() {
    return (
      <div>
        <div>
          任务名称：
          {this.props.taskName}
        </div>
        <div>
          开始于：
          {this.props.beginAt}
        </div>
        <div>
          持续时间：
          {this.props.time}秒
        </div>
      </div>
    );
  }
}
