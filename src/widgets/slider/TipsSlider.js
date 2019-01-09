import React from 'react';
import {DemoItem} from './styled'; 
import { Slider } from '@lugia/lugia-web';
export default class BaseSlider extends React.Component {
  constructor(){
    super();
    this.state={
      tipsValue:'5%'
    };
  }
  onchange = obj => {
    const {newValue}=obj;
    this.setState({tipsValue:`${newValue}%`});
  };
  render() {
    return (
      <div>
        <DemoItem>
          <Slider defaultValue={5} tips={this.state.tipsValue} onChange={this.onchange}/>
        </DemoItem><br/>
        <DemoItem>
          <Slider defaultValue={5}/>
        </DemoItem>
      </div>
    );
  }
}
