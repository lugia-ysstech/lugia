
import React from 'react';
import { DatePicker } from '@lugia/lugia-web';
import styled from 'styled-components';
const {YearPicker,MonthPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
export const DemoItem=styled.span`
  display:inline-block;
  padding:0 20px 20px 0;
`;
export default class BaseDemo extends React.Component {
  render() {
    return  <React.Fragment>
              <DemoItem>
                <DatePicker showToday selectToday placeholder={'选择日期'}  suffix={'lugia-icon-financial_date'} />
              </DemoItem>
              <DemoItem>
                <YearPicker placeholder={'选择年'}  suffix={'lugia-icon-financial_date'}  />
              </DemoItem>
              <DemoItem>
                <MonthPicker placeholder={'选择月份'}  suffix={'lugia-icon-financial_date'} />
              </DemoItem>
              <br/>
              <DemoItem>
                <WeekPicker placeholder={'选择周'}  suffix={'lugia-icon-financial_date'} />
              </DemoItem>
              <DemoItem>
                <WeeksPicker placeholder={'选择周'}/>
              </DemoItem>
              <br/>
              <DemoItem>
                <RangePicker placeholder={['开始日期','结束日期']}/>
              </DemoItem>
            </React.Fragment> ;
  }
}
