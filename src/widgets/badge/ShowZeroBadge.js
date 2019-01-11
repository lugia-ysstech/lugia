import React from 'react';
import { Badge, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  margin-left: 10px;
`;
export default class BaseBadge extends React.Component<any, any> {

  render () {
    return (
      <Wrapper>
        <Badge count={0}>
          <Box />
        </Badge>
        <Badge showZero count={0}>
          <Box />
        </Badge>
      </Wrapper>);
  }
}
