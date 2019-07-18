import React from 'react';
import { Slider } from '@lugia/lugia-web';
import { Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import { getBorderRadius, getBorder } from '@lugia/theme-utils';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSlider extends React.Component {
  onchange = v => {
  };
  render() {
    return (
        <DemoItem>
          <div>Theme SliderPassedWay</div>
          <Theme
            config={
              {
                [Widget.Slider]: {
                  SliderPassedWay: {
                    normal: {
                      background: { color: '#bbded6' },
                      width: 400,
                      height: 15,
                      border: getBorder({ style: 'solid', width: 3, color: '#a0855b' }),
                      borderRadius:getBorderRadius(10),
                      margin: { top: 10, right: 20, bottom: 30, left: 40 },
                      padding: { top: 10, right: 20, bottom: 30, left: 40 },
                    },
                    hover: {
                      background: { color: '#8ac6d1' },
                      height: 10,
                    },
                    disabled: {
                      background: { color: '#fae3d9' },
                      border: getBorder({ style: 'solid', width: 5, color: 'pink' }),
                      borderRadius:getBorderRadius(4),
                    },
                  },
                }
              }

            }
          >
            <Slider defaultValue={20} />
            <div>Theme SliderPassedWay vertical</div>
            <Slider defaultValue={20}  vertical />
            <div>Theme SliderPassedWay disabled</div>
            <Slider defaultValue={20} disabled  />
          </Theme>
        </DemoItem>
    );
  }
}
