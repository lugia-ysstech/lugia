import React from "react";
import { Slider, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
export const DemoList = styled.span`
  display: inline-block;
  padding-right: 30px;
`;
export default class IconSlider extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Theme
          config={{
            [Widget.Slider]: { Container: { normal: { width: 300 } } }
          }}
        >
          <DemoList>
            <Slider defaultValue={10} vertical tips />
          </DemoList>
          <DemoList>
            <Slider defaultValue={[10, 20]} vertical />
          </DemoList>
          <DemoList>
            <Slider
              defaultValue={30}
              tips
              vertical
              marks={{
                0: {
                  text: "0℃"
                },
                30: {
                  text: "30℃"
                },
                70: {
                  text: "70℃"
                },
                100: {
                  text: "100℃",
                  style: {
                    color: "red"
                  }
                }
              }}
            />
          </DemoList>
        </Theme>
      </React.Fragment>
    );
  }
}
