import React from 'react';
import { Slider } from '@lugia/lugia-web';
import SwitchDemo1 from './switch_001';
import SwitchDemo2 from './switch_002';
import SwitchDemo3 from './switch_003';
import SwitchDemo4 from './switch_004';
import SwitchDemo5 from './switch_005';
import SwitchDemo6 from './switch_006';
import SwitchDemo7 from './switch_007';
import SwitchDemo8 from './switch_008';
import SwitchDemo9 from './switch_009';
import SwitchDemo10 from './switch_010';
import SwitchDemo11 from './switch_011';
import SwitchDemo12 from './switch_012';
import SwitchDemo13 from './switch_013';
import SwitchDemo14 from './switch_014';
import SwitchDemo15 from './switch_015';
// import SwitchDemo16 from './switch_016';
// import SwitchDemo17 from './switch_017';
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
          <SwitchDemo1 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo2 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo3 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo4 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo5 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo6 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo7 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo8 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo9 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo10 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo11 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo12 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo13 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo14 />
        </DemoItem>
        <DemoItem>
          <SwitchDemo15 />
        </DemoItem>
      </React.Fragment>
    );
  }
}
