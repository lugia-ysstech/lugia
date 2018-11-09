
import * as React from 'react';
import {DropMenuButton,Theme,Button,Menu,DropMenu} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';


const { MenuItem } = Menu;

const items = [];

for (let i = 0; i < 10; i++) {
  items.push(
    <MenuItem
      key={i}
      onClick={rest => {
        // console.info(rest);
      }}
    >
      {i}
    </MenuItem>
  );
}

const Box = styled.div`
  display: inline-block;
  margin: 30px;
`;

const H2 = styled.h2`
  margin: 30px;
  text-align: center;
`;

export default class extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menu: (
        <Menu
          onClick={(...rest) => {
            // console.info('Menuclick', rest);
          }}
        >
          {items}
        </Menu>
      ),
    };
  }

  render() {
    const { menu } = this.state;
    const defaultView = {
      [Widget.DropMenu]: { width: 80 },
    };

    const view = {
      [Widget.DropMenuButton]: { width: 120, color: '#E01861' },
      [Widget.DropMenu]: { width: 100 },
    };
    return (
      <div>
        <H2>Default DropMenuButton</H2>
        <Theme config={defaultView}>
          <Box>
            <DropMenu menus={menu} align={'bottom'} action={'hover'} hideAction={'hover'}>
              <DropMenuButton onClick={this.onClick}>Hover</DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottomLeft'} action={'click'} hideAction={'click'}>
              <DropMenuButton onClick={this.onClick} type="primary">
                Click
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottomRight'} action={'hover'} hideAction={'hover'}>
              <DropMenuButton divided={false} onClick={this.onClick}>
                Hover me
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottomLeft'} action={'click'} hideAction={'click'}>
              <DropMenuButton type="primary" divided={false} onClick={this.onClick}>
                Click me
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottomRight'} action={'hover'} hideAction={'hover'}>
              <DropMenuButton type="basic" onClick={this.onClick}>
                Basic
              </DropMenuButton>
            </DropMenu>
          </Box>
        </Theme>

        <H2>Colorful DropMenuButton</H2>
        <Theme config={view}>
          <Box>
            <DropMenu menus={menu} align={'topLeft'}>
              <DropMenuButton direction={'up'} onClick={this.onClick}>
                Click Right
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'topRight'} action={'hover'} hideAction={'hover'}>
              <DropMenuButton direction={'up'} onClick={this.onClick} type="primary">
                Hover Right
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottom'} action={'click'} hideAction={'click'}>
              <DropMenuButton divided={false} onClick={this.onClick}>
                Click me
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottomRight'} action={'hover'} hideAction={'hover'}>
              <DropMenuButton type="primary" divided={false} onClick={this.onClick}>
                Hover me
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'top'} action={'click'} hideAction={'click'}>
              <DropMenuButton type="basic" direction={'up'} onClick={this.onClick}>
                Click me
              </DropMenuButton>
            </DropMenu>
          </Box>
        </Theme>

        <H2>Disabled DropMenuButton</H2>
        <Theme config={view}>
          <Box>
            <DropMenu menus={menu} align={'topLeft'}>
              <DropMenuButton disabled={true} direction={'up'} onClick={this.onClick}>
                Click Right
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'topRight'} action={'hover'} hideAction={'hover'}>
              <DropMenuButton
                disabled={true}
                direction={'up'}
                onClick={this.onClick}
                type="primary"
              >
                Hover Right
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottom'} action={'click'} hideAction={'click'}>
              <DropMenuButton disabled={true} divided={false} onClick={this.onClick}>
                Click me
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottomRight'} action={'hover'} hideAction={'hover'}>
              <DropMenuButton disabled={true} type="primary" divided={false} onClick={this.onClick}>
                Hover me
              </DropMenuButton>
            </DropMenu>
          </Box>

          <Box>
            <DropMenu menus={menu} align={'bottom'} action={'click'} hideAction={'click'}>
              <DropMenuButton disabled={true} type="basic" onClick={this.onClick}>
                Click me
              </DropMenuButton>
            </DropMenu>
          </Box>
        </Theme>
      </div>
    );
  }

  onPopupVisibleChange = visible => {
    console.log(visible);
  };

  onClick = (...rest) => {
    // console.log('ClickLeftButton', rest);
  };
}
