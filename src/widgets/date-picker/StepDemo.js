
import React from 'react';
import { DatePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
const {YearPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
export default class BaseDemo extends React.Component {
  render() {
    return  <div>
              <DemoItem>
                <DatePicker step={9} placeholder={'选择日期'}/>
              </DemoItem>
              <DemoItem>
                <YearPicker step={9} placeholder={'选择年'}/>
              </DemoItem>
              <br/>
              <DemoItem>
                <WeekPicker step={9} placeholder={'选择周'}/>
              </DemoItem>
              <DemoItem>
                <WeeksPicker step={9} placeholder={'选择周'}/>
              </DemoItem>
              <br/>
              <DemoItem>
                <RangePicker step={9} placeholder={['开始日期','结束日期']}/>
              </DemoItem>
            </div> ;
  }
}
