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
                <DatePicker defaultValue={'2019-01-01'} format={'YYYY-MM-DD'}/>
              </DemoItem>  
              <DemoItem>
                <YearPicker defaultValue={'2019'} format={'YYYY'}/>
              </DemoItem>
              <DemoItem>
                <MonthPicker defaultValue={'2019-01'} format={'YYYY-MM'}/>
              </DemoItem>
              <br/>
              <DemoItem>
                <WeekPicker defaultValue={'2019-01'} format={'YYYY-WW'}/>
              </DemoItem>
              <DemoItem>
                <WeeksPicker defaultValue={'2019-01'} format={'YYYY-WW'}/>
              </DemoItem>
              <br/>
              <DemoItem>
                <RangePicker defaultValue={['2019-01-01','2019-02-01']} format={'YYYY-MM-DD'}/>
              </DemoItem>       
            </React.Fragment> ;
  }
}
