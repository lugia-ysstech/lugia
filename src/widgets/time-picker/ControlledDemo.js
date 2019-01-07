
import React from 'react';
import { TimePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
export default class BaseDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value:'20:13:14'};
  }
  onChange=obj => {
    const {newValue}=obj;
    this.setState({value:newValue});
  }
  render() {
    return  <div>
              <DemoItem>
                <TimePicker value={this.state.value} format={'HH:mm:ss'} onChange={this.onChange}/>
              </DemoItem>
            </div> ;
  }
}
