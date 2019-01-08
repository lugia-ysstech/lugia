import * as React from 'react';
import { DropMenu, Theme, Menu } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const data = [];

for (let i = 0; i < 10; i++) {
  const title = '选项' + i;
  data.push({ value: title, text: title });
}

const Box = styled.div`
  display: inline-block;
  margin: 30px;
`;

const menu = <Menu data={data} />;

export default class extends React.Component<any, any> {
  render() {
    const defaultView = {
      [Widget.DropMenuButton]: { width: 120 },
      [Widget.DropMenu]: { width: 80 }
    };

    return (
      <div>
        <Theme config={defaultView}>
          <Box>
            <DropMenu menus={menu} align={'bottomLeft'}>
              <DropMenu.Button divided={false}>Click me</DropMenu.Button>
            </DropMenu>
          </Box>
          <Box>
            <DropMenu menus={menu} align={'bottom'}>
              <DropMenu.Button divided={false}>Click me</DropMenu.Button>
            </DropMenu>
          </Box>
          <Box>
            <DropMenu menus={menu} align={'bottomRight'}>
              <DropMenu.Button divided={false}>Click me</DropMenu.Button>
            </DropMenu>
          </Box>
          <div>
            <Box />
          </div>

          <Box>
            <DropMenu menus={menu} align={'topLeft'} action={'hover'}>
              <DropMenu.Button direction={'up'} divided={false}>
                Hover me
              </DropMenu.Button>
            </DropMenu>
          </Box>
          <Box>
            <DropMenu menus={menu} align={'top'} action={'hover'}>
              <DropMenu.Button direction={'up'} divided={false}>
                Hover me
              </DropMenu.Button>
            </DropMenu>
          </Box>
          <Box>
            <DropMenu menus={menu} align={'topRight'} action={'hover'}>
              <DropMenu.Button direction={'up'} divided={false}>
                Hover me
              </DropMenu.Button>
            </DropMenu>
          </Box>
        </Theme>
      </div>
    );
  }
}
