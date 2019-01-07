
import React from 'react';
import moment from 'moment';
import { DatePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
const {RangePicker} =DatePicker;
export default class BaseDemo extends React.Component {
  
  render() {
    const formatOne ='YYYY-MM-DD';
    const formatTwo='YYYY/MM/DD HH:mm:ss';
    return  <div>
              <DemoItem>
                <DatePicker  format={formatOne} placeholder={'选择时间'}
                  buttonOptions={{
                    options:{
                      today:moment().format(formatOne),
                      firstDayMonth:moment().startOf('month').format(formatOne)
                    }
                  }} 
                />
              </DemoItem>
              <br/>
              <DemoItem>
                <RangePicker
                format={formatOne} 
                buttonOptions={{
                  options:{
                    today:[moment().format(formatOne),moment().format(formatOne)],
                    'this month':[moment().startOf('month').format(formatOne),moment().endOf('month').format(formatOne)]
                  }
                }} 
                 placeholder={['开始时间','结束时间']}/>
              </DemoItem>
              <br/>
              <DemoItem>
                <RangePicker
                format={formatTwo} 
                showTime
                buttonOptions={{
                  options:{
                    today:[moment().format(formatTwo),moment().format(formatTwo)],
                    'this month':[moment().startOf('month').format(formatTwo),moment().endOf('month').format(formatTwo)]
                  }
                }} 
                 placeholder={['开始时间','结束时间']}/>
              </DemoItem>
            </div> ;
  }
}
