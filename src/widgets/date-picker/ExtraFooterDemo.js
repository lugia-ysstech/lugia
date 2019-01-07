
import React from 'react';
import { DatePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
const {YearPicker,MonthPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
export default class BaseDemo extends React.Component {
  render() {
    return  <div>
              <DemoItem>
                <DatePicker extraFooter={{message:'extraFooter',style:{color:'red'}}}/>
              </DemoItem>
              <DemoItem>
                <YearPicker extraFooter={{message:'extraFooter',style:{color:'red'}}} placeholder={'选择年'}/>
              </DemoItem>
              <DemoItem>
                <MonthPicker extraFooter={{message:'extraFooter',style:{color:'red'}}} placeholder={'选择月份'}/>
              </DemoItem>
              <br/>
              <DemoItem>
                <WeekPicker extraFooter={{message:'extraFooter',style:{color:'red'}}} placeholder={'选择周'}/>
              </DemoItem>
              <DemoItem>
                <WeeksPicker extraFooter={{message:'extraFooter',style:{color:'red'}}} placeholder={'选择周'}/>
              </DemoItem>
              <br/>
              <DemoItem>
                <RangePicker extraFooter={{message:'extraFooter',style:{color:'red'}}} placeholder={['开始日期','结束日期']}/>
              </DemoItem>
            </div> ;
  }
}
