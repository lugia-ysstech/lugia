/**
 *
 * create by szfeng
 *
 */
import * as React from 'react';
import { Tree, Theme, Input } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';

const bigTree = [];

getNumberKey();

function getNumberKey() {
  let key = 0;
  for (let a = 0; a < 5; a++) {
    const keyA = key++;
    bigTree.push({
      value: `${keyA}`,
      text: `${a}`
    });
    for (let b = 0; b < 5; b++) {
      const titleB = `${a}.${b}`;
      const keyb = key++;
      bigTree.push({
        value: keyb,
        text: titleB,
        pid: `${keyA}`,
        path: `${keyA}`
      });
      for (let c = 0; c < 20; c++) {
        const titleC = `${a}.${b}.${c}`;
        const keyc = key++;
        bigTree.push({
          value: keyc,
          text: titleC,
          pid: `${keyb}`,
          path: `${keyA}/${keyb}`
        });
        for (let d = 0; d < 400; d++) {
          const text = `${a}.${b}.${c}.${d}`;
          const keyD = key++;
          bigTree.push({
            value: keyD,
            text,
            pid: `${keyc}`,
            isLeaf: true,
            path: `${keyA}/${keyb}/${keyc}`
          });
        }
      }
    }
  }
}

export default class BigDataTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  render() {
    const config = {
      [Widget.Tree]: {
        TreeWrap: {
          normal: {
            width: 300,
            height: 400
          }
        }
      }
    };
    const { query } = this.state;

    return [
      <Input
        value={query}
        placeholder={'请输入查询条件'}
        onChange={this.onChange}
      />,
      <Tree query={query} theme={config} data={bigTree} expandAll mutliple />
    ];
  }

  onChange = target => {
    const { newValue: query } = target;
    this.setState({ query });
  };
}
