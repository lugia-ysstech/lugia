import React from 'react';
import { Slider,NumberInput } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  display:inline-block;
  padding:0 20px 20px 0;
`;
export default class InputSlider extends React.Component {
  constructor(){
    super();
    this.state={
      value:5,
      maxValue:30,
      minValue:0,
    };
  }
  onChange = params => {
    const {newValue}=params;
    this.setState({value:newValue});
  };
  render() {
    const {value,maxValue,minValue}=this.state;
    return (
      <React.Fragment>
        <DemoItem>
          <Slider 
            value={value} 
            maxValue={maxValue} 
            minValue={minValue} 
            onChange={this.onChange}
          /> 
        </DemoItem>
        <NumberInput 
          value={value}
          max={maxValue} 
          min={minValue} 
          onChange={this.onChange} 
        />
      </React.Fragment>
    );
  }
}
