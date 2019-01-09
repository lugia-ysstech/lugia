import * as React from 'react';
import { Menu, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const Button = styled.div`
  width: 90px;
  height: 32px;
  background: #4d63ff;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
`;

const MenuWrap = styled.div`
  box-shadow:0px 0px 6px rgba(51,51,51,0.2);
  display: inline-block;
  margin: 20px;
  border-radius: 4px;
`;

const data = [
  {
    text: '一级菜单1',
    value: '一级菜单1'
  },
  { text: '一级菜单2', value: '一级菜单2', disabled: true },
  { text: '一级菜单3', value: '一级菜单3', disabled: false },
  {
    text: '一级菜单4',
    value: '一级菜单4',
    children: [
      {
        text: '次级菜单4-1',
        value: '次级菜单4-1',
        children: [{ text: '三级菜单4-1-1', value: '三级菜单4-1-1' }]
      }
    ]
  },
  { text: '一级菜单5', value: '一级菜单5', disabled: true },
  {
    text: '一级菜单6',
    value: '一级菜单6',
    disabled: false,
    children: [
      { text: '次级菜单6-1', value: '次级菜单6-1' },
      {
        text: '次级菜单6-2',
        value: '次级菜单6-2',
        children: [
          {
            text: '三级菜单6-2-1',
            value: '三级菜单6-2-1'
          },
          { text: '三级菜单6-2-2', value: '三级菜单6-2-2' },
          { text: '三级菜单6-2-3', value: '三级菜单6-2-3' }
        ]
      },
      { text: '次级菜单6-3', value: '次级菜单6-3' },
      { text: '次级菜单6-4', value: '次级菜单6-4' },
      { text: '次级菜单6-5', value: '次级菜单6-5' },
      { text: '次级菜单6-6', value: '次级菜单6-6' },
      { text: '次级菜单6-7', value: '次级菜单6-7' },
      { text: '次级菜单6-8', value: '次级菜单6-8' },
      { text: '次级菜单6-9', value: '次级菜单6-9' },
      { text: '次级菜单6-10', value: '次级菜单6-10' }
    ]
  },
  { text: '一级菜单7', value: '一级菜单7', disabled: true },
  { text: '一级菜单8', value: '一级菜单8', disabled: false },
  { text: '一级菜单9', value: '一级菜单9', disabled: true },
  { text: '一级菜单10', value: '一级菜单10', disabled: false }
];
export default class extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedKeys: [],
      expandedPath: []
    };
  }

  render() {
    const { selectedKeys, expandedPath } = this.state;
    return (
      <div>
        <Theme
          config={{
            [Widget.Menu]: { width: 200 },
            [Widget.SubMenu]: { width: 150 }
          }}
        >
          <MenuWrap>
            <Menu
              separator={'/'}
              action={'hover'}
              expandedPath={expandedPath}
              selectedKeys={selectedKeys}
              data={data}
              offsetY={0}
              onExpandPathChange={this.onExpandPathChange}
              onClick={this.onClick}
            />
          </MenuWrap>
        </Theme>
        <div />
        <Button onClick={this.expandClick}>展开</Button>
        <Button onClick={this.closeClick}>收起</Button>
      </div>
    );
  }

  expandClick = (e, keys, item) => {
    this.setState({
      selectedKeys: ['一级菜单6/次级菜单6-2/三级菜单6-2-1'],
      expandedPath: ['一级菜单6/次级菜单6-2/三级菜单6-2-1']
    });
  };

  closeClick = (e, keys, item) => {
    this.setState({
      selectedKeys: [],
      expandedPath: []
    });
  };

  onClick = (e, keys, item) => {
    const { selectedKeys } = keys;
    this.setState({ selectedKeys, expandedPath: selectedKeys });
  };

  onExpandPathChange = expandedPath => {
    this.setState({ expandedPath });
  };
}
