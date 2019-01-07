
import React from 'react';
import { DatePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
const {RangePicker} =DatePicker;
export default class BaseDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateValue:'2019-01-01',rangeValue:['2019-01-01','2019-02-20']};
  }
  onChange=obj => {
    const {newValue}=obj;
    this.setState({dateValue:newValue});
  }
  rangeChange=obj => {
    const {newValue}=obj;
    this.setState({rangeValue:newValue});
  }
  render() {
    return  <div>
              <DemoItem>
                <DatePicker value={this.state.dateValue} format={'YYYY-MM-DD'} onChange={this.onChange}/>
              </DemoItem>
              <br/>
              <DemoItem><RangePicker value={this.state.rangeValue} format={'YYYY-MM-DD'} onChange={this.rangeChange}/></DemoItem>
            </div> ;
  }
}
