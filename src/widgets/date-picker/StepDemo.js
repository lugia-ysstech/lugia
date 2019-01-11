
import React from 'react';
import { DatePicker } from '@lugia/lugia-web';
import styled from 'styled-components';
const {YearPicker,WeekPicker,WeeksPicker,RangePicker} =DatePicker;
export const DemoItem=styled.span`
  display:inline-block;
  padding:0 20px 20px 0;
`;
export default class BaseDemo extends React.Component {
  render() {
    return  <React.Fragment>
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
            </React.Fragment> ;
  }
}
