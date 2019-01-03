/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';

const TabPane = Tabs.TabPane;
export const hasActivityKeyData = [
  {
    title: 1111,
    content: <div>1111111</div>,
    activityKey: '0'
  },
  {
    title: 222222,
    content: (
      <div>
        <div>222222</div>
      </div>
    ),
    activityKey: '1'
  },
  {
    activityKey: '2',
    title: 3333,
    content: (
      <div>
        <div>
          <div>33333</div>
        </div>
      </div>
    )
  },
  {
    activityKey: '3',
    title: 44444,
    content: (
      <div>
        <div>
          <div>44444</div>
          <div>44444</div>
        </div>
      </div>
    )
  },
  {
    activityKey: '4',
    title: 55555,
    content: 55555
  },
  {
    activityKey: '5',
    title: 66666,
    content: 66666
  },
  {
    activityKey: '6',
    title: 777777,
    content: 77777
  },
  {
    activityKey: '7',
    title: 888888,
    content: 888888
  }
];
export default class OrderTabs extends React.Component<any, any> {
  state = {
    data: hasActivityKeyData,
    activeKey: '0'
  };
  onAddClick = () => {
    const activityKey = `newTab${this.state.data.length++}`;
    const item = {
      title: 'New Tab',
      content: 'Content of new Tab',
      activityKey
    };
    return item;
  };
  onDeleteClick = (activityKey: string) => {};
  render() {
    return (
      <div>
        <p>自定义卡片</p>
        <Tabs
          tabType={'card'}
          pagedType={'single'}
          onAddClick={this.onAddClick}
          onDeleteClick={this.onDeleteClick}
        />
      </div>
    );
  }
}
