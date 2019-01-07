
import React from 'react';
import { DatePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
const {RangePicker} =DatePicker;
export default class BaseDemo extends React.Component {
  render() {
    return  <div>
              <DemoItem>
                <DatePicker showTime format={'YYYY-MM-DD HH:mm:ss'} placeholder={'选择时间'} />
              </DemoItem>
              <br/>
              <DemoItem>
                <RangePicker showTime format={'YYYY-MM-DD HH:mm:ss'} placeholder={['开始时间','结束时间']}/>
              </DemoItem>
            </div> ;
  }
}
