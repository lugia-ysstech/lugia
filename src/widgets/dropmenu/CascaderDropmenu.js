import * as React from 'react';
import { Dropmenu, Theme, Menu } from '@lugia/lugia-web';
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
      [Widget.Dropmenu]: { width: 120, height: 160 }
    };

    return (
      <div>
        <Theme config={defaultView}>
          <Box>
            <Dropmenu menus={menu} action={'hover'}>
              <Dropmenu.Button type="basic">Basic</Dropmenu.Button>
            </Dropmenu>
          </Box>
        </Theme>
      </div>
    );
  }
}
