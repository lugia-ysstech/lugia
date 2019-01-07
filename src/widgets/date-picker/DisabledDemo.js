
import React from 'react';
import { DatePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
const {YearPicker,MonthPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
export default class BaseDemo extends React.Component {
  render() {
    return  <div>
              <DemoItem>
                <DatePicker defaultValue={'2019-01-01'} disabled/>
              </DemoItem>
              <DemoItem>
                <YearPicker defaultValue={'2019'} disabled/>
              </DemoItem>
              <DemoItem>
                <MonthPicker defaultValue={'2019-01'} disabled/>
              </DemoItem>
              <br/>
              <DemoItem>
                <WeekPicker defaultValue={'2019-01'} disabled/>
              </DemoItem>
              <DemoItem>
                <WeeksPicker defaultValue={'2019-01'} disabled/>
              </DemoItem>
              <br/>
              <DemoItem>
                <RangePicker defaultValue={['2019-01-01','2019-02-03']} disabled/>
              </DemoItem>
            </div> ;
  }
}
