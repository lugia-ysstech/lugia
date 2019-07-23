import React from 'react';
import { Card, Theme, Tabs } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from "@lugia/lugia-web/dist/consts";
const Wrapper = styled.div`
  display: inline-block;
`;
const TabsWrapper = styled.div`
  display: inline-block;
  margin-left:20px;
`;
const Operation = styled.div`
  color: #4d63ff;
`;

export default class TabsCard extends React.Component<Object, Object> {
  render() {

    const tabsCard = {
      [Widget.Card]: {
        Container: {
          normal: { width: 400, height: 240 },
        },
      },
    };
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
      }
    ];
    return (
      <Theme config={tabsCard}>
        <Wrapper>
          <Card
            operation={<Operation>操作</Operation>}
            viewClass={'register'}
            type={'combo'}
            content={<TabsWrapper> <Tabs data={defaultData} /></TabsWrapper>}
            shadow={'hover'}
          />
        </Wrapper>
      </Theme>
    );
  }
}
