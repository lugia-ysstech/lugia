/**
 *
 * create by ligx
 *
 */
import * as React from 'react';
import { Tree, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';

const data = [
  { key: '1', title: '1' },
  { key: '1.1', title: '1.1', pid: '1', path: '1' },
  { key: '1.1.1', title: '1.1.1', pid: '1.1', path: '1/1.1' },
  { key: '1.1.1.1', title: '1.1.1.1', pid: '1.1.1', path: '1/1.1/1.1.1' },
  {
    key: '1.1.1.1.1',
    title: '1.1.1.1.1',
    pid: '1.1.1.1',
    path: '1/1.1/1.1.1/1.1.1.1',
    isLeaf: true,
    notCanSelect: true,
  },
  { key: '1.2', title: '1.2', pid: '1', path: '1' },
  { key: '1.2.1', title: '1.2.1', pid: '1.2', path: '1/1.2', isLeaf: true },
  { key: '1.2.2', title: '1.2.2', pid: '1.2', path: '1/1.2' },
  { key: '1.2.2.1', title: '1.2.2.1', pid: '1.2.2', path: '1/1.2/1.2.2' },
  {
    key: '1.2.2.1.1',
    title: '1.2.2.1.1',
    pid: '1.2.2.1',
    path: '1/1.2/1.2.2/1.2.2.1',
    isLeaf: true,
  },
  {
    key: '1.2.2.1.2',
    title: '1.2.2.1.2',
    pid: '1.2.2.1',
    path: '1/1.2/1.2.2/1.2.2.1',
    isLeaf: true,
    notCanSelect: true,
  },
  { key: '1.2.2.2', title: '1.2.2.2', pid: '1.2.2', path: '1/1.2/1.2.2', isLeaf: true },

  { key: '2', title: '2' },
  { key: '2.1', title: '2.1', pid: '2', path: '2' },
  { key: '2.1.1', title: '2.1.1', pid: '2.1', path: '2/2.1', isLeaf: true },
  { key: '2.1.2', title: '2.1.2', pid: '2.1', path: '2/2.1' },
  { key: '2.1.2.1', title: '2.1.2.1', pid: '2.1.2', path: '2/2.1/2.1.2', isLeaf: true },
];

export default class DefaultMutlipleTree extends React.Component<Object, Object> {
  render() {
    const config = {
      [Widget.Tree]: {
        height: 520,
        width: 300,
      },
    };
    return (
      <Theme config={config}>
        <Tree expandAll mutliple data={data} igronSelectField={'notCanSelect'} />
      </Theme>
    );
  }
}
