/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import {Cascader,Theme,Trigger,InputTag} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

const items = [
  {
    text: '选项1',
    value: '选项1',
    disabled: false,
  },
  { text: '选项2', value: '选项2', disabled: false },
  { text: '选项3', value: '选项3', disabled: false },
  { text: '选项4', value: '选项4', disabled: false },
  { text: '选项5', value: '选项5', disabled: true },
  {
    text: '选项6',
    value: '选项6',
    disabled: false,
    children: [
      { text: '次级菜单1', value: '次级菜单1' },
      {
        text: '次级菜单2',
        value: '次级菜单2',
        children: [{ text: 'e', value: 'e' }, { text: 'f', value: 'f' }, { text: 'g', value: 'g' }],
      },
      {
        text: '次级菜单3',
        value: '次级菜单3',
        children: [
          {
            text: '三级菜单1',
            value: '三级菜单1',
            children: [
              { text: 'a', value: 'a' },
              { text: 'b', value: 'b' },
              { text: 'c', value: 'c' },
            ],
          },
          { text: '三级菜单2', value: '三级菜单2' },
          { text: '三级菜单3', value: '三级菜单3' },
          { text: '三级菜单4', value: '三级菜单4' },
          { text: '三级菜单5', value: '三级菜单5' },
          { text: '三级菜单6', value: '三级菜单6' },
          { text: '三级菜单7', value: '三级菜单7' },
          { text: '三级菜单8', value: '三级菜单8' },
          { text: '三级菜单9', value: '三级菜单9' },
          { text: '三级菜单10', value: '三级菜单10' },
        ],
      },
    ],
  },
  { text: '选项7', value: '选项7', disabled: true },
  { text: '选项8', value: '选项8', disabled: false },
  { text: '选项9', value: '选项9', disabled: true },
  { text: '选项10', value: '选项10', disabled: false },
];
export default class extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Theme
          config={{ [Widget.Cascader]: { width: 200, menuWidth: 100, offsetY: 10, offsetX: 10 } }}
        >
          <Cascader data={items} action={'hover'} />
        </Theme>
      </div>
    );
  }

  onClick = (e: Object, keys: Object) => {
    const { selectedKeys } = keys;
    this.setState({ selectedKeys });
  };
}
