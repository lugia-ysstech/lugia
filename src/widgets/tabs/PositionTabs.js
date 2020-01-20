import React from 'react';
import { Theme, Tabs, Select } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin:10px 0;
`;
const defaultData = [
  { title: 'Tab1', content: 'content of Tab1', value:'1'},
  { title: 'Tab2', content: 'content of Tab2', value:'2'},
  { title: 'Tab3', content: 'content of Tab3', value:'3'},
  { title: 'Tab4', content: 'content of Tab4', value:'4'},
  { title: 'Tab5', content: 'content of Tab5', value:'5'},
  { title: 'Tab6', content: 'content of Tab6', value:'6'},
  { title: 'Tab7', content: 'content of Tab7', value:'7'},
  { title: 'Tab8', content: 'content of Tab8', value:'8'}
];

const selectData = [
  { label: 'top', value: 'top' },
  { label: 'bottom', value: 'bottom' },
  { label: 'left', value: 'left' },
  { label: 'right', value: 'right' }
];

const themeConfig = {
  [Widget.Select]: {
    Container: {
      normal: {
        width: 300
      },
    }
  }
};

export default class PositionTabs extends React.Component<any, any> {
  state = {
    tabPosition: 'top'
  };

  handleSelect = obj => {
    const { newValue } = obj;
    this.setState({ tabPosition: newValue });
  };

  render() {
    const {tabPosition} = this.state;
    return (
      <Theme config={themeConfig}>
        <Wrapper>
          <Select displayField={'label'} data={selectData} defaultValue={tabPosition} onSelect={this.handleSelect} />
        </Wrapper>
          <Tabs
            titleType={'line'}
            tabPosition={tabPosition}
            data={defaultData}
          />
      </Theme>
    );
  }
}
