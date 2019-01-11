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
      key: `${keyA}`,
      title: `${a}`
    });
    for (let b = 0; b < 5; b++) {
      const titleB = `${a}.${b}`;
      const keyb = key++;
      bigTree.push({
        key: keyb,
        title: titleB,
        pid: `${keyA}`,
        path: `${keyA}`
      });
      for (let c = 0; c < 20; c++) {
        const titleC = `${a}.${b}.${c}`;
        const keyc = key++;
        bigTree.push({
          key: keyc,
          title: titleC,
          pid: `${keyb}`,
          path: `${keyA}/${keyb}`
        });
        for (let d = 0; d < 400; d++) {
          const title = `${a}.${b}.${c}.${d}`;
          const keyD = key++;
          bigTree.push({
            key: keyD,
            title,
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
    const { query } = this.state;
    const treeConfig = {
      [Widget.Tree]: {
        height: 500,
        width: 220
      }
    };

    const inputConfig = {
      [Widget.Tree]: {
        width: 220
      }
    };
    return [
      <Theme config={inputConfig}>
        <Input
          value={query}
          placeholder={'请输入查询条件'}
          onChange={this.onChange}
        />
      </Theme>,
      <Theme config={treeConfig}>
        <Tree query={query} data={bigTree} expandAll mutliple />
      </Theme>
    ];
  }

  onChange = target => {
    const { newValue: query } = target;
    this.setState({ query });
  };
}
