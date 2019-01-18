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
export default class BaseCard extends React.Component<any, any> {
  click = () => {};
  render() {
    return (
      <Wrapper>
        <Card
          title={'this is title'}
          description={'this is description'}
          shadow={'always'}
          operation={
            <Operation  onClick={this.click}>
              操作
            </Operation>
          }
        />
      </Wrapper>
    );
  }
}
