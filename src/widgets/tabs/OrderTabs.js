import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';

const TabPane = Tabs.TabPane;
export const hasActivityKeyDefaultData = [
  {
    title: 'Tab1',
    content: <div>content of Tab1</div>,
    activityKey: '0'
  },
  {
    title: 'Tab2',
    content: <div>content of Tab2</div>,
    activityKey: '1'
  },
];
export default class OrderTabs extends React.Component<any, any> {
  onAddClick = () => {
    const activityKey = `newTab${hasActivityKeyDefaultData.length++}`;
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
        <Tabs
          tabType={'card'}
          pagedType={'single'}
          onAddClick={this.onAddClick}
          onDeleteClick={this.onDeleteClick}
          defaultData={hasActivityKeyDefaultData}
        />
      </div>
    );
  }
}
