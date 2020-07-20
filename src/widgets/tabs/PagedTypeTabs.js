import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const Wrapper = styled.div`

  margin: 10px 0;
`;
const Title = styled.div`
   margin: 0 0 20px;
`;

const defaultData = [
  { title: 'Tab1', content: 'content of Tab1', value:'1'},
  { title: 'Tab2', content: 'content of Tab2', value:'2'},
  { title: 'Tab3', content: 'content of Tab3', value:'3'},
  { title: 'Tab4', content: 'content of Tab4', value:'4'},
  { title: 'Tab5', content: 'content of Tab5', value:'5'},
  { title: 'Tab6', content: 'content of Tab6', value:'6'},
  { title: 'Tab7', content: 'content of Tab7', value:'7'},
  { title: 'Tab8', content: 'content of Tab8', value:'8'},
  { title: 'Tab9', content: 'content of Tab9', value:'9'},
  { title: 'Tab10', content: 'content of Tab10', value:'10'},
  { title: 'Tab11', content: 'content of Tab11', value:'11'},
  { title: 'Tab12', content: 'content of Tab12', value:'12'},
  { title: 'Tab13', content: 'content of Tab13', value:'13'}
];

export default class PagedTypeTabs extends React.Component<any, any> {

  onPreClick = res => { console.log('onPreClick',res) };
  onNextClick = res => { console.log('onNextClick',res) };

  render() {
    const view = {
      [Widget.Tabs]: {
        Container: {
          normal: {
            width: 348
          },
        },
        TabHeader: {
          DefaultTabPan: {
            normal: {
              width: 100
            },
          }
        }
      },
    };

    return (
      <Theme config={view}>
          <Wrapper>
            <Title>单个翻页类型</Title>
            <Tabs
              pagedType={'single'}
              data={defaultData}
              onPreClick={this.onPreClick}
              onNextClick={this.onNextClick}
            />
          </Wrapper>

          <Wrapper>
            <Title>整页翻页类型</Title>
            <Tabs
              pagedType={'page'}
              data={defaultData}
              onPreClick={this.onPreClick}
              onNextClick={this.onNextClick}
            />
        </Wrapper>
      </Theme>
    );
  }
}
