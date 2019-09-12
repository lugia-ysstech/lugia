import React from 'react';
import { Theme, Tabs, Select } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const TabPane = Tabs.TabPane;

const Wrapper = styled.div`
  text-align: left;
  display: inline-block;
`;
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
export default class PagedTypeTabs extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Tabs]: {
        TitleContainer: {
          normal: {
            width: 290
          },
        }
      },
    };

    const onPreClick = e => {};
    const onNextClick = e => {};
    return (
      <Theme config={view}>
          <Wrapper>
            <Tabs
              tabType={'card'}
              pagedType={'single'}
              data={hasActivityKeyData}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
            />
          </Wrapper>
          <br />
          <Wrapper>
            <Tabs
              tabType={'card'}
              pagedType={'page'}
              data={hasActivityKeyData}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
            />
        </Wrapper>
      </Theme>
    );
  }
}
