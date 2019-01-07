import * as React from 'react';
import { DropMenu, Theme, Menu } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const data = [
  { value: '参数设置一', text: '参数设置一' },
  {
    value: '参数设置二',
    text: '参数设置二',
    children: [
      { value: '二级信息1', text: '二级信息1' },
      { value: '二级信息2', text: '二级信息2' }
    ]
  },
  { value: '参数设置三', text: '参数设置三', disabled: true }
];

const Box = styled.div`
  display: inline-block;
  margin: 30px;
`;

export default class extends React.Component<any, any> {
  render() {
    const menu = <Menu data={data} action={'hover'} />;
    const defaultView = {
      [Widget.DropMenuButton]: { width: 180 },
      [Widget.DropMenu]: { width: 120, height: 160 }
    };

    return (
      <div>
        <Theme config={defaultView}>
          <Box>
            <DropMenu menus={menu} action={'hover'}>
              <DropMenu.Button type="basic">Basic</DropMenu.Button>
            </DropMenu>
          </Box>
        </Theme>
      </div>
    );
  }
}
