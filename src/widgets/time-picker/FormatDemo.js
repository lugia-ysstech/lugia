import React from 'react';
import { TimePicker } from '@lugia/lugia-web';
import {DemoItem} from './styled';
export default class BaseDemo extends React.Component {
  render() {
    return  <div>
              <DemoItem>
                <TimePicker defaultValue={'23:09:09'} format={'HH:mm:ss'}/>
              </DemoItem>   
              <br/>
              <DemoItem>
                <TimePicker defaultValue={'23时09分09秒'} format={'HH时mm分ss秒'}/>
              </DemoItem>   
              <DemoItem>
                <TimePicker defaultValue={'23时09分'} format={'HH时mm分'}/>
              </DemoItem> 
            </div> ;
  }
}
