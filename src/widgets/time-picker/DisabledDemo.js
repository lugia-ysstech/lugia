
import React from 'react';
import { TimePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
export default class BaseDemo extends React.Component {
  render() {
    return  <div>
              <DemoItem>
                <TimePicker disabled defaultValue={'23:09:09'} format={'HH:mm:ss'} />
              </DemoItem>
            </div> ;
  }
}
