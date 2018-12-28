/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Slider, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
export default class IconSlider extends React.Component<any, any> {
  render() {
    return (
      <div style={{ float: "left", padding: "0 40px 50px" }}>
        <h2 style={{ padding: "20px 0" }}> icon</h2>
        <Theme
          config={{
            [Widget.SliderIcon]: {
              color: "#f8ac30",
              fontSize: 30,
              margin: 18
            }
          }}
        >
          <Slider
            minValue={0}
            tips
            icons={[
              { name: "lugia-icon-financial_global" },
              { name: "lugia-icon-financial_switch_e_and_c" }
            ]}
          />
        </Theme>
      </div>
    );
  }
}
