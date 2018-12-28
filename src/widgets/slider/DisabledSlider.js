/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Slider, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
export default class DisabledSlider extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  onchange = v => {};
  handleclick = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };
  render() {
    return (
      <div style={{ float: "left", padding: "0 20px 50px" }}>
        <h2 style={{ padding: "20px 0" }}> 单滑块 disabled false-> true</h2>
        <Slider
          maxValue={30}
          tips
          minValue={0}
          defaultValue={0}
          onChange={this.onchange}
          disabled={this.state.disabled}
        />
        <p>
          <button onClick={this.handleclick}>
            click me, you can change disabled
          </button>
        </p>
      </div>
    );
  }
}
