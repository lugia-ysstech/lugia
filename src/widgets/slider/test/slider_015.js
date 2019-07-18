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
          <div>Theme SliderButton</div>
          <Theme
            config={
              {
                [Widget.Slider]: {
                  SliderButton: {
                    normal: {
                      background: { color: '#f9bcdd' },
                      width: 20,
                      height: 20,
                      border: getBorder({ style: 'solid', width: 1, color: '#a0855b' }),
                      borderRadius:getBorderRadius(6),
                      margin: { top: 10, right: 20, bottom: 30, left: 40 },
                      padding: { top: 10, right: 20, bottom: 30, left: 40 },
                    },
                    hover: {
                      background: { color: '#b689b0' },
                      height: 20,
                    },
                    active: {
                      background: { color: '#d5a4cf' },
                      height: 30,
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
            <Slider  />
            <div>Theme SliderButton disabled</div>
            <Slider  disabled  />
          </Theme>
        </DemoItem>
    );
  }
}
