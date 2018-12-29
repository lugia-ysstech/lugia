/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Card, Theme, Tabs } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  display: inline-blocTk;
`;

export default class TabsCard extends React.Component<Object, Object> {
  render() {
    const combo = {
      register: {
        width: 700,
        height: 300
      },
    };
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
        title: 55555555,
        content: 5555555
      }
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
