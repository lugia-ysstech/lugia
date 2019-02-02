import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const TabPane = Tabs.TabPane;

const Wrapper = styled.div`
  text-align: left;
  display: inline-block;
`;
const children = [
  <TabPane title={'Tab1'} content={<div>content of Tab1</div>} activityKey={'0'} />,
  <TabPane
    title={'Tab2'}
    content={<div>content of Tab2</div>}
    activityKey={'1'}
  />,
  <TabPane
    title={'Tab3'}
    content={<div>content of Tab3</div>}
    activityKey={'2'}
  />,
  <TabPane
    title={'Tab4'}
    content={<div>content of Tab4</div>}
    activityKey={'3'}
  />,
  <TabPane
    title={'Tab5'}
    content={<div>content of Tab5</div>}
    activityKey={'4'}
  />,
  <TabPane
    title={'Tab6'}
    content={<div>content of Tab6</div>}
    activityKey={'5'}
  />
];
const defaultData = [
  {
    title: 'Tab1',
    content: 'content of Tab1'
  },
  {
    title: 'Tab2',
    content: 'content of Tab2'
  },
  {
    title: 'Tab3',
    content: 'content of Tab3'
  },
  {
    title: 'Tab4',
    content: 'content of Tab4'
  },
  {
    title: 'Tab5',
    content: 'content of Tab5'
  },
  {
    title: 'Tab6',
    content: 'content of Tab6'
  },
  {
    title: 'Tab7',
    content: 'content of Tab7'
  },
  {
    title: 'Tab8',
    content: 'content of Tab8'
  }
];
export default class BaseTabs extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Tabs]: {
        width: 500,
      }
    };

    const onPreClick = e => {};
    const onNextClick = e => {};

    return (
      <Theme config={view}>
        <Wrapper>
          <Tabs
            titleType={'line'}
            tabPosition={'top'}
            onPreClick={onPreClick}
            onNextClick={onNextClick}
            data={defaultData}
          />
        </Wrapper>
        <Wrapper>
          <Tabs
            titleType={'line'}
            tabPosition={'top'}
            onPreClick={onPreClick}
            onNextClick={onNextClick}
            children={children}
          />
        </Wrapper>
      </Theme>
    );
  }
}
