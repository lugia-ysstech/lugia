import React from "react";
import { Slider } from "@lugia/lugia-web";
import styled from "styled-components";
export const DemoItem = styled.div`
  padding: 0 30px 0;
`;
export default class IconSlider extends React.Component {
  render() {
    return (
      <Slider
        defaultValue={5}
        tips
        icons={[
          { name: "lugia-icon-financial_sad_o" },
          { name: "lugia-icon-financial_smile_o" }
        ]}
      />
    );
  }
}
