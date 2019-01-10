import React from 'react';
import { Slider } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSlider extends React.Component {
  constructor(){
    super();
    this.state={
      value:5,
      rangeValue:[5,15]
    };
  }
  onchange = obj => {
    const {newValue}=obj;
    this.setState({value:newValue});
  };
  onchangeRange=obj => {
    const {newValue}=obj;
    this.setState({rangeValue:[...newValue]});
  }
  render() {
    return (
      <React.Fragment>
        <DemoItem>
          <Slider value={this.state.value} onChange={this.onchange}/>
        </DemoItem>
          <Slider value={this.state.rangeValue} onChange={this.onchangeRange}/>
      </React.Fragment>
    );
  }
}
