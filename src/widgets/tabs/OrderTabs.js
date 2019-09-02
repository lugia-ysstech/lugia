import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from "@lugia/lugia-web/dist/consts/index";

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
    const item = {
      title: `Tab${hasActivityKeyDefaultData.length + 1}`,
      content: `Content of new Tab${hasActivityKeyDefaultData.length + 1}`,
      activityKey:`Tab${hasActivityKeyDefaultData.length + 1}`
    };
    hasActivityKeyDefaultData.push(item);
  };
  onDeleteClick = (activityKey: string) => {};
  render() {
    const view = {
      [Widget.Tabs]: {
        TitleContainer: {
          normal: {
            width: 326
          },
        }
      },
    };
    return (
      <div>
        <Theme config={view}>
          <Tabs
            tabType={'card'}
            pagedType={'single'}
            onAddClick={this.onAddClick}
            onDeleteClick={this.onDeleteClick}
            defaultData={hasActivityKeyDefaultData}
            showAddBtn={true}
          />
        </Theme>

      </div>
    );
  }
}
