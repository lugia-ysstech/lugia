
import React from 'react';
import { TimePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
export default class BaseDemo extends React.Component {
  render() {
    return  <div>
              <DemoItem>
                <TimePicker placeholder={'选择时间'}/>
              </DemoItem>
            </div> ;
  }
}
