import React from 'react';
import { Theme, Tabs, Select } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const TabPane = Tabs.TabPane;

const Wrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
  display: inline-block;
`;
const defaultData = [
  {
    icon: 'lugia-icon-financial_archive',
    title: 1111111111,
    content: 1111
  },
  {
    icon: 'lugia-icon-financial_archive',
    title: 22222222222,
    content: 22222
  },
  {
    icon: 'lugia-icon-financial_archive',
    title: 3333333,
    content: 333
  },
  {
    icon: 'lugia-icon-financial_archive',
    title: 44444444,
    content: 4444444
  },
  {
    icon: 'lugia-icon-financial_archive',
    title: 55555,
    content: 555555
  },
  {
    icon: 'lugia-icon-financial_archive',
    title: 666666,
    content: 66666
  },
  {
    icon: 'lugia-icon-financial_archive',
    title: 7777777,
    content: 777777
  },
  {
    icon: 'lugia-icon-financial_archive',
    title: 88888,
    content: 888888
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
        <Wrapper>
          <Select displayField={'label'} data={data} onSelect={handleSelect} />
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
