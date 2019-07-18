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
          <div>text: 开/关, left: 日/月</div>
          <div>displayFiled left</div>
          <Switch  displayFiled={'left'} data={[{ text: '开',left: '日'}, { text: '关',left: '月'}]}   />

          <div>disabled text</div>
          <Switch  displayFiled={'text'} data={[{ text: '开',left: '日'}, { text: '关',left: '月'}]}   />

        </DemoItem>
    );
  }
}
