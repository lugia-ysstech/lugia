import * as React from 'react';
import { Menu, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const MenuWrap = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px 2px #ccc
  display: inline-block;
  margin: 20px;
`;

const data = [
  { value: '皮卡丘', text: '皮卡丘' },
  { value: '妙蛙种子', text: '妙蛙种子' },
  { value: '小火龙', text: '小火龙' },
  { value: '杰尼龟', text: '杰尼龟' },
  { value: '绿毛虫', text: '绿毛虫' },
  { value: '独角虫', text: '独角虫' },
  { value: '波波', text: '波波' },
  { value: '小拉达', text: '小拉达' },
  { value: '阿伯怪', text: '阿伯怪' },
  { value: '穿山鼠', text: '穿山鼠' },
  { value: '尼多兰', text: '尼多兰' },
  { value: '皮皮', text: '皮皮' }
];

export default class extends React.Component<any, any> {
  render() {
    const config = { [Widget.Menu]: { width: 200 } };
    return (
      <div>
        <Theme config={config}>
          <MenuWrap>
            <Menu checkedCSS={'background'} data={data} mutliple />
          </MenuWrap>

          <MenuWrap>
            <Menu checkedCSS={'checkbox'} data={data} mutliple />
          </MenuWrap>
          <div />

          <MenuWrap>
            <Menu checkedCSS={'mark'} data={data} mutliple />
          </MenuWrap>

          <MenuWrap>
            <Menu checkedCSS={'none'} data={data} mutliple />
          </MenuWrap>
        </Theme>
      </div>
    );
  }
}
