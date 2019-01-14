import React from 'react';
import { Theme, Tabs, Select } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const TabPane = Tabs.TabPane;

const Wrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  display: inline-block;
`;
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
export default class PositionTabs extends React.Component<any, any> {
  state = {
    tabPosition: 'top'
  };
  render() {
    const view = {
      [Widget.Tabs]: {
        width: 500,
        height: 200
      }
    };

    const onPreClick = e => {};
    const onNextClick = e => {};
    const data = [
      { label: 'top', value: 'top' },
      { label: 'bottom', value: 'bottom' },
      { label: 'left', value: 'left' },
      { label: 'right', value: 'right' }
    ];

    const handleSelect = obj => {
      const { newValue } = obj;
      this.setState({ tabPosition: newValue.toString() });
    };
    return (
      <Theme config={view}>
        <Select displayField={'label'} data={data} onSelect={handleSelect} />
        <Wrapper>
          <Tabs
            titleType={'line'}
            tabPosition={this.state.tabPosition}
            onPreClick={onPreClick}
            onNextClick={onNextClick}
            data={defaultData}
          />
        </Wrapper>
      </Theme>
    );
  }
}
