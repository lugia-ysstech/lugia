import React from 'react';
import { Card, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts/index';
const Wrapper = styled.div`
  display: inline-block;
`;
const CardWrapper = styled.div`
  display: inline-block;
  padding-right: 10px;
  padding-top: 10px;
`;
const Operation = styled.div`
  color: #4d63ff;
`;
export default class ShadowCard extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Card]: {
        width: 240,
        height:100,
      }
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <CardWrapper>
            <Card
              title={'this is title'}
              description={'this is description'}
              shadow={'always'}
              operation={<Operation>操作</Operation>}
            />
          </CardWrapper>
          <CardWrapper>
            <Card
              title={'this is title'}
              description={'this is description'}
              shadow={'hover'}
              operation={<Operation>操作</Operation>}
            />
          </CardWrapper>
          <CardWrapper>
            <Card
              title={'this is title'}
              description={'this is description'}
              shadow={'never'}
              operation={<Operation>操作</Operation>}
            />
          </CardWrapper>
        </Wrapper>
      </Theme>
    );
  }
}
