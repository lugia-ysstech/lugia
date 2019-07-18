import React from 'react';
import { Switch,Icon } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.div`
  padding:0 20px 20px 0;
`;
export default class BaseSwitch extends React.Component {
  onchange = v => {
  };
  render() {
    return (
        <DemoItem>
          <div>data 开关</div>
          <Switch data={[{ text: '开' }, { text: '关' }]}  />
          <div>data 年月 text: 年 text: 月</div>
          <Switch data={[{ text: '年' }, { text: '月' }]}  />
          <div>data 年月  txt: 年 txt: 月 </div>
          <Switch data={[{ txt: '年' }, { txt: '月' }]}  />
          <div>data []</div>
          <Switch data={[]}  />
          <div>data Icon</div>
          <Switch  data={[{ text: <Icon iconClass={'lugia-icon-reminder_check'} /> }, { text: <Icon iconClass={'lugia-icon-reminder_close'} /> }]}   />
        </DemoItem>
    );
  }
}
