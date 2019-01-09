import React from 'react';
import {DemoItem} from './styled'; 
import { Slider, Button } from '@lugia/lugia-web';
export default class DisabledSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };
  render() {
    return (
      <div>
        <DemoItem>
          <Slider
            defaultValue={5}
            tips
            disabled={this.state.disabled}
          />
        </DemoItem><br/>
        <DemoItem>
          <Button type="primary" onClick={this.toggle}>
            点击切换
          </Button>
        </DemoItem>
      </div>
    );
  }
}
