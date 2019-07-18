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
          <div>Theme SliderContainer</div>
          <Theme
            config={
              {
                [Widget.Slider]: {
                  SliderContainer: {
                    normal: {
                      background: { color: '#f1d6ab' },
                      // width: 400,
                      opacity: 0.5,
                      border: getBorder({ style: 'solid', width: 2, color: '#a0855b' }),
                      borderRadius:getBorderRadius(4),
                      margin: { top: 10, right: 20, bottom: 30, left: 40 },
                      padding: { top: 10, right: 20, bottom: 30, left: 40 },
                    },
                    hover: {
                      background: { color: '#c05c7e' },
                    },
                    disabled: {
                      background: { color: '#a0855b' },
                      opacity: 1,
                      border: getBorder({ style: 'dashed', width: 1, color: 'orange' }),
                      margin: { top: 10, right: 20, bottom: 30, left: 40 },
                      padding: { top: 20, right: 10, bottom: 30, left: 20 },
                    },
                  },
                }
              }

            }
          >
            <Slider />
            <div>Theme SliderContainer disabled</div>
            <Slider disabled />
          </Theme>
        </DemoItem>
    );
  }
}
