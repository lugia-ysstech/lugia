import React from 'react';
import {DemoItem} from './styled'; 
import { Slider } from '@lugia/lugia-web';
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
    this.setState({value:newValue,rangeValue:[...newValue]});
  };
  render() {
    return (
      <div>
        <DemoItem>
          <Slider value={this.state.value} onChange={this.onchange}/>
        </DemoItem><br/>
        <DemoItem>
          <Slider value={this.state.rangeValue} onChange={this.onchange}/>
        </DemoItem>
      </div>
    );
  }
}
