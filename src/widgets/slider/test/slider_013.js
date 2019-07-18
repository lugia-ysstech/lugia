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
          <div>Theme SliderTrack</div>
          <Theme
            config={
              {
                [Widget.Slider]: {
                  SliderTrack: {
                    normal: {
                      background: { color: '#f3826f' },
                      width: 100,
                      height: 10,
                      opacity: 1,
                      border: getBorder({ style: 'solid', width: 3, color: '#a0855b' }),
                      borderRadius:getBorderRadius(4),
                      margin: { top: 10, right: 20, bottom: 30, left: 40 },
                      padding: { top: 10, right: 20, bottom: 30, left: 40 },
                    },
                    hover: {
                      background: { color: '#ffb961' },
                    },
                    disabled: {
                      background: { color: '#c05c7e' },
                      border: getBorder({ style: 'solid', width: 5, color: 'pink' }),
                      borderRadius:getBorderRadius(4),
                    },
                  },
                }
              }

            }
          >
            <Slider />
            <div>Theme SliderTrack vertical</div>
            <Slider vertical />
            <div>Theme SliderTrack disabled</div>
            <Slider disabled  />
          </Theme>
        </DemoItem>
    );
  }
}
