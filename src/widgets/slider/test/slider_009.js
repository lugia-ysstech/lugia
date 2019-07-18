import React from 'react';
import { Slider } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSlider extends React.Component {
  onchange = v => {
  };
  render() {
    return (
        <DemoItem>
          <div>icons</div>
          <Slider icons={[{ name: 'lugia-icon-financial_like_o' }, { name: 'lugia-icon-financial_like' }]} />
        </DemoItem>
    );
  }
}
