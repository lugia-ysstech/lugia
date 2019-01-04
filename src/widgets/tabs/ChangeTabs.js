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
export default class ChangeTabs extends React.Component<any, any> {
  state = {
    data: hasActivityKeyData,
    activeKey: '0'
  };
  change = (e: Object) => {
    hasActivityKeyData[0] = {
      title: 1000000000000,
      content: 1000000000,
      activityKey: '-1'
    };
    this.setState({ data: hasActivityKeyData });
  };
  onAddClick = () => {
    const data = this.state.data;
    const activityKey = `newTab${this.state.data.length++}`;
    data.push({
      title: 'New Tab',
      content: 'Content of new Tab',
      activityKey
    });
    this.setState({ data });
  };

  onDeleteClick = (activityKey: string) => {
    const { data } = this.state;
    let newdata = [];
    if (data.length > 1) {
      newdata = data.filter(child => {
        return child.activityKey !== activityKey;
      });
    }
    this.setState({ data: newdata });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <button style={{ width: 200 }} onClick={this.change}>
          {'点击修改data内容'}
        </button>
        <Tabs
          tabType={'card'}
          pagedType={'single'}
          data={data}
          onAddClick={this.onAddClick}
          onDeleteClick={this.onDeleteClick}
        />
      </div>
    );
  }
}
