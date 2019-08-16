/**
 *
 * create by szfeng
 *
 */
import * as React from 'react';
import { Tree, Icon, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const IconBox = styled.div`
  margin: 0 4px;
  z-index: 1000;
`;

const data = [
  { value: '1', text: '选项 1' },
  { value: '1.1', text: '选项 1.1', pid: '1', path: '1' },
  {
    value: '1.1.1',
    text: '选项 1.1.1',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true
  },
  {
    value: '1.1.2',
    text: '选项 1.1.2',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true,
    notCanSelect: true
  },

  { value: '1.2', text: '选项 1.2', pid: '1', path: '1' },
  {
    value: '1.2.1',
    text: '选项 1.2.1',
    pid: '1.2',
    path: '1/1.2',
    isLeaf: true
  },
  { value: '1.2.2', text: '选项 1.2.2', pid: '1.2', path: '1/1.2' },
  {
    value: '1.2.2.1',
    text: '选项 1.2.2.1',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true
  },

  {
    value: '1.2.2.2',
    text: '选项 1.2.2.2',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true
  },

  { value: '1.3', text: '选项 1.3', pid: '1', path: '1', isLeaf: true },

  { value: '2', text: '选项 2' },
  { value: '2.1', text: '选项 2.1', pid: '2', path: '2', isLeaf: true },
  { value: '2.2', text: '选项 2.2', pid: '2', path: '2', isLeaf: true }
];

export default class DefaultTree extends React.Component<Object, Object> {
  render() {
    const config = {
      [Widget.Tree]: {
        TreeWrap: {
          normal: {
            width: 320,
            height: 290
          }
        }
      }
    };

    return (
      <Tree
        data={data}
        theme={config}
        igronSelectField={'notCanSelect'}
        autoHeight
        expandAll
        onSelect={this.onSelect}
        renderSuffix={this.renderSuffix}
        shape={'round'}
      />
    );
  }

  renderSuffix = (item: Object) => {
    const { isLeaf } = item;
    if (isLeaf) {
      return [
        <IconBox>
          <Icon iconClass={'lugia-icon-direction_rollback'} />
        </IconBox>,
        <IconBox>
          <Icon iconClass={'lugia-icon-reminder_check_square'} />
        </IconBox>,
        <IconBox>
          <Icon iconClass={'lugia-icon-financial_delete'} />
        </IconBox>
      ];
    }
  };
}
