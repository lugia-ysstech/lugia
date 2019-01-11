import React from 'react';
import { Card, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 50px;
  display: inline-block;
`;
const Operation = styled.div`
  color: #4d63ff;
`;
export default class ShadowCard extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Card
          title={'this is title'}
          description={'this is description'}
          shadow={'always'}
          operation={<Operation> 操作</Operation>}
        />
        <Card
          title={'this is title'}
          description={'this is description'}
          shadow={'hover'}
          operation={<Operation> 操作</Operation>}
        />
        <Card
          title={'this is title'}
          description={'this is description'}
          shadow={'never'}
          operation={<Operation> 操作</Operation>}
        />
      </Wrapper>
    );
  }
}
