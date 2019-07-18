import React from 'react';
import { Slider } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSlider extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  onChange = v => {
    const {newValue} = v;
    console.log('newValue',newValue);
    this.setState({
      value:newValue
    });
  };
  render() {
    const {value = 0} = this.state;
    return (
        <DemoItem>
          <div>onChange</div>
          <Slider value={value} onChange={this.onChange} />
        </DemoItem>
    );
  }
}
