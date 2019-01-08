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

const data = [];
for (let i = 0; i < 200000; i++) {
  data.push({ text: i, value: i, disabled: false });
}

export default class extends React.Component<any, any> {
  render() {
    const config = { [Widget.Menu]: { width: 300 } };
    return (
      <div>
        <Theme config={config}>
          <MenuWrap>
            <Menu checkedCSS={'checkbox'} data={data} mutliple />
          </MenuWrap>
        </Theme>
      </div>
    );
  }
}
