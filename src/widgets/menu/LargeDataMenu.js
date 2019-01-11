import * as React from 'react';
import { Menu, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const MenuWrap = styled.div`
  box-shadow:0px 0px 6px rgba(51,51,51,0.2);
  display: inline-block;
  margin: 20px;
  border-radius: 4px;
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
