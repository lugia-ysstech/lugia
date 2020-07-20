import React from 'react';
import {Tabs} from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div``;

const TabsWrapper = styled.div`
  margin: 0 0 20px;
`;

const Title = styled.div`
   margin: 0 0 10px;
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

export default class TypeTabs extends React.Component<any, any> {
  render() {
    return (
        <Wrapper>
          <TabsWrapper>
            <Title>线性风格</Title>
            <Tabs
              tabType={'line'}
              pagedType={'single'}
              data={defaultData}
            />
          </TabsWrapper>
          <TabsWrapper>
            <Title>分隔线(仅支持线性风格)</Title>
            <Tabs
              tabType={'line'}
              pagedType={'single'}
              showDividerLine={true}
              data={defaultData}
            />
          </TabsWrapper>

          <TabsWrapper>
            <Title>卡片风格</Title>
            <Tabs
              tabType={'card'}
              pagedType={'single'}
              data={defaultData}
            />
          </TabsWrapper>

          <TabsWrapper>
            <Title>窗口风格</Title>
            <Tabs
              tabType={'window'}
              pagedType={'page'}
              data={defaultData}
            />
          </TabsWrapper>

        </Wrapper>
    );
  }
}
