import React from 'react';
import { Card, Theme, Tabs } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 50px;
  display: inline-blocTk;
`;

export default class TabsCard extends React.Component<Object, Object> {
  render() {
    const combo = {
      register: {
        width: 500,
        height: 300
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
      },
      {
        title: 'Tab4',
        content: 'content of Tab4'
      },
      {
        title: 'Tab5',
        content: 'content of Tab5'
      },
    ];
    return (
      <Theme config={combo}>
        <Wrapper>
          <Card
            operation={'操作'}
            viewClass={'register'}
            type={'combo'}
            content={<Tabs data={defaultData} />}
            shadow={'hover'}
          />
        </Wrapper>
      </Theme>
    );
  }
}
