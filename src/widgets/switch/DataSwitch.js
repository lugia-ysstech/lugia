import React from 'react';
import {DemoItem} from './styled';
import { Switch,Icon } from '@lugia/lugia-web';
export default class DataSwitch extends React.Component {
  render() {
    return (
      <div>
        <DemoItem>
          <Switch 
            defaultValue 
            data={[{ text: '年' }, { text: '月' }]} 
          />
        </DemoItem><br/>
        <DemoItem>
          <Switch 
            defaultValue 
            data={[{ text: '开' },{ text: '关' }]} 
          />
        </DemoItem><br/>
        <DemoItem>
          <Switch 
            defaultValue 
            displayFiled={'left'} 
            data={[
              { text: '开',left: '日'},
              { text: '关',left: '月'}
            ]} 
          />
        </DemoItem><br/>
        <DemoItem>
          <Switch 
            defaultValue 
            data={[
              { text: <Icon iconClass={'lugia-icon-reminder_check'} /> },
              { text: <Icon iconClass={'lugia-icon-reminder_close'} /> }
              ]} 
          />
        </DemoItem>
      </div>
    );
  }
}
