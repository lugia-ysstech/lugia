/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import styled from "styled-components";
import { Slider, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
export default class BaseSlider extends React.Component<any, any> {
  onchange = v => {
  };
  render() {
    return (
      <div style={{ padding: "0 50px" }}>
        <div style={{ float: "left", padding: "0 20px 50px" }}>
          <h2 style={{ padding: "20px 0" }}> normal</h2>
          <Slider defaultValue={5} tips onChange={onchange} />
        </div>
        <div style={{ float: "left", padding: "0 20px 50px" }}>
          <h2 style={{ padding: "20px 0" }}> normal</h2>
          <Slider tips onChange={onchange} />
        </div>
        <div style={{ float: "left", padding: "0 20px 50px" }}>
          <h2 style={{ padding: "20px 0" }}> 自定义css</h2>
          <Theme
            config={{
              [Widget.SliderButton]: {
                color: "#f8ac30",
                width: 30,
                height: 20
              },
              [Widget.Slider]: { color: "#000000", margin: 50, width: 300 }
            }}
          >
            <Slider minValue={undefined} defaultValue={undefined} tips />
          </Theme>

          <div style={{ float: "left", padding: "0 20px 50px" }}>
            <h2 style={{ padding: "20px 0" }}> 双滑块 minValue -1</h2>
            <Slider
              maxValue={30}
              defaultValue={[-1, 20, 25]}
              tips
              onChange={onchange}
              minValue={0}
            />
          </div>
        </div>
      </div>
    );
  }
}
