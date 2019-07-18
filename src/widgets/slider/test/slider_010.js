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
          <div>marks 有误项(默认最大值是30)</div>
          <Slider  marks={{0:'A',10:'B',20:'C'}} />
          <div>marks 正确项</div>
          <Slider maxValue={30}  marks={{0:'A',10:'B',20:'C'}} />
        </DemoItem>
    );
  }
}
