import React from 'react';
import { Slider } from '@lugia/lugia-web';
import { Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import { getBorderRadius, getBorder ,getBoxShadow} from '@lugia/theme-utils';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSlider extends React.Component {
  onchange = v => {
  };
  render() {
    return (
        <DemoItem>
          <div>Theme SliderMarks</div>
          <Theme
            config={
              {
                [Widget.Slider]: {
                  SliderMarks: {
                    normal: {
                      background: { color: '#f9bcdd' },
                      width: 60,
                      height: 30,
                      fontSize:40,
                      font:{weight:600},
                      color:'#83142c',
                      border: getBorder({ style: 'solid', width: 1, color: '#a0855b' }),
                      borderRadius:getBorderRadius(6),
                      padding: { top: 60, right: 20, bottom: 30, left: 40 },
                      boxShadow: getBoxShadow('0 -5px 10px 0 #ad1d45'),
                      first: { color: '#fcf594', font: { weight: 700, size: 14 } },
                      nth1: { color: '#ff7a8a', font: { weight: 700, size: 24 } },
                      last: { color: '#52437b', font: { weight: 700, size: 14 } },
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
                      color:'#83142c',
                      fontSize:20,
                      font:{weight:300},
                      border: getBorder({ style: 'solid', width: 5, color: 'pink' }),
                      borderRadius:getBorderRadius(4),
                      boxShadow: getBoxShadow('0 -5px 10px 0 #f9d276'),
                      first: { color: '#fcf594' },
                      nth1: { color: '#ff7a8a', font: { weight: 700 } },
                      last: { color: '#52437b',  },
                    },
                  },
                }
              }
            }
          >
            <Slider marks={{0: {text: '0℃'}, 30: {text: '30℃'}, 70: {text: '70℃'}, 100: {text: '100℃', style: {color: 'red'}}}} />
            <div>Theme SliderMarks disabled</div>
            <Slider disabled  marks={{0: {text: '0℃'}, 30: {text: '30℃'}, 70: {text: '70℃'}, 100: {text: '100℃', style: {color: 'red'}}}}  />
            <div>Theme SliderMarks vertical</div>
            <Slider vertical  marks={{0: {text: '0℃'}, 30: {text: '30℃'}, 70: {text: '70℃'}, 100: {text: '100℃', style: {color: 'red'}}}}  />
          </Theme>
        </DemoItem>
    );
  }
}
