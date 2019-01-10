import React from 'react';
import { Switch,Icon } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 0 10px 0;
`;

export default class DataSwitch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DemoItem>
          <Switch 
            defaultValue 
            data={[{ text: '年' }, { text: '月' }]} 
          />
        </DemoItem>
        <DemoItem>
          <Switch 
            defaultValue 
            data={[{ text: '开' },{ text: '关' }]} 
          />
        </DemoItem>
        <DemoItem>
          <Switch 
            defaultValue 
            displayFiled={'left'} 
            data={[
              { text: '开',left: '日'},
              { text: '关',left: '月'}
            ]} 
          />
        </DemoItem>
          <Switch 
            defaultValue 
            data={[
              { text: <Icon iconClass={'lugia-icon-reminder_check'} /> },
              { text: <Icon iconClass={'lugia-icon-reminder_close'} /> }
              ]} 
          />
      </React.Fragment>
    );
  }
}
