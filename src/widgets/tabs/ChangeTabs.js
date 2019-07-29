import React from 'react';
import { Theme, Tabs, Button } from '@lugia/lugia-web';
import styled from "styled-components";

const Wrapper = styled.div`
  margin:10px 0;
`;

const TabPane = Tabs.TabPane;
export const hasActivityKeyData = [
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
  {
    activityKey: '2',
    title: 'Tab3',
    content: <div>content of Tab3</div>
  },
  {
    activityKey: '3',
    title: 'Tab4',
    content: <div>content of Tab4</div>
  },
  {
    activityKey: '4',
    title: 'Tab5',
    content: <div>content of Tab5</div>
  },
  {
    activityKey: '5',
    title: 'Tab6',
    content: <div>content of Tab6</div>
  },
  {
    activityKey: '6',
    title: 'Tab7',
    content: <div>content of Tab7</div>
  },
  {
    activityKey: '7',
    title: 'Tab8',
    content: <div>content of Tab8</div>
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
      activityKey: '0'
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
        <Wrapper>
          <Button style={{ width: 200 }} onClick={this.change} type={'primary'}>
            {'点击修改标签内容'}
          </Button>
        </Wrapper>

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
