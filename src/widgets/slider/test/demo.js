import React from 'react';
import { Slider } from '@lugia/lugia-web';
import SliderDemo1 from './slider_001';
import SliderDemo2 from './slider_002';
import SliderDemo3 from './slider_003';
import SliderDemo4 from './slider_004';
import SliderDemo5 from './slider_005';
import SliderDemo6 from './slider_006';
import SliderDemo7 from './slider_007';
import SliderDemo8 from './slider_008';
import SliderDemo9 from './slider_009';
import SliderDemo10 from './slider_010';
import SliderDemo11 from './slider_011';
import SliderDemo12 from './slider_012';
import SliderDemo13 from './slider_013';
import SliderDemo14 from './slider_014';
import SliderDemo15 from './slider_015';
import SliderDemo16 from './slider_016';
import SliderDemo17 from './slider_017';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSlider extends React.Component {
  onchange = v => {
  };
  render() {
    return (
      <React.Fragment>
        <DemoItem>
          <SliderDemo1 />
        </DemoItem>
        <DemoItem>
          <SliderDemo2 />
        </DemoItem>
        <DemoItem>
          <SliderDemo3 />
        </DemoItem>
        <DemoItem>
          <SliderDemo4 />
        </DemoItem>
        <DemoItem>
          <SliderDemo5 />
        </DemoItem>
        <DemoItem>
          <SliderDemo6 />
        </DemoItem>
        <DemoItem>
          <SliderDemo7 />
        </DemoItem>
        <DemoItem>
          <SliderDemo8 />
        </DemoItem>
        <DemoItem>
          <SliderDemo9 />
        </DemoItem>
        <DemoItem>
          <SliderDemo10 />
        </DemoItem>
        <DemoItem>
          <SliderDemo11 />
        </DemoItem>
        <DemoItem>
          <SliderDemo12 />
        </DemoItem>
        <DemoItem>
          <SliderDemo13 />
        </DemoItem>
        <DemoItem>
          <SliderDemo14 />
        </DemoItem>
        <DemoItem>
          <SliderDemo15 />
        </DemoItem>
        <DemoItem>
          <SliderDemo16 />
        </DemoItem>
        <DemoItem>
          <SliderDemo17 />
        </DemoItem>
      </React.Fragment>
    );
  }
}
