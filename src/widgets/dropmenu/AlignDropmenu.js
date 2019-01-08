import * as React from 'react';
import { Dropmenu, Theme, Menu } from '@lugia/lugia-web';
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
      [Widget.Dropmenu]: { width: 80 }
    };

    return (
      <div>
        <Theme config={defaultView}>
          <Box>
            <Dropmenu menus={menu} align={'bottomLeft'}>
              <Dropmenu.Button divided={false}>Click me</Dropmenu.Button>
            </Dropmenu>
          </Box>
          <Box>
            <Dropmenu menus={menu} align={'bottom'}>
              <Dropmenu.Button divided={false}>Click me</Dropmenu.Button>
            </Dropmenu>
          </Box>
          <Box>
            <Dropmenu menus={menu} align={'bottomRight'}>
              <Dropmenu.Button divided={false}>Click me</Dropmenu.Button>
            </Dropmenu>
          </Box>
          <div>
            <Box />
          </div>

          <Box>
            <Dropmenu menus={menu} align={'topLeft'} action={'hover'}>
              <Dropmenu.Button direction={'up'} divided={false}>
                Hover me
              </Dropmenu.Button>
            </Dropmenu>
          </Box>
          <Box>
            <Dropmenu menus={menu} align={'top'} action={'hover'}>
              <Dropmenu.Button direction={'up'} divided={false}>
                Hover me
              </Dropmenu.Button>
            </Dropmenu>
          </Box>
          <Box>
            <Dropmenu menus={menu} align={'topRight'} action={'hover'}>
              <Dropmenu.Button direction={'up'} divided={false}>
                Hover me
              </Dropmenu.Button>
            </Dropmenu>
          </Box>
        </Theme>
      </div>
    );
  }
}
