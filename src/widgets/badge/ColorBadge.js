import React from 'react';
import { Badge, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
  text-align: center;
  padding: 20px;
`;
const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  margin-left: 10px;
`;
export default class ColorBadge extends React.Component<any, any> {

  render () {
    return (
      <Wrapper>
        <Theme config={{ green: { backgroundColor: 'green' } }}>
          <Badge viewClass="green">
            <Box />
          </Badge>
        </Theme>
        <Theme config={{ purple: { backgroundColor: 'purple' } }}>
          <Badge viewClass="purple">
            <Box />
          </Badge>
        </Theme>
        <Theme config={{ yellow: { backgroundColor: 'yellow' } }}>
          <Badge viewClass="yellow">
            <Box />
          </Badge>
        </Theme>
        <Theme config={{ blue: { backgroundColor: 'blue' } }}>
          <Badge viewClass="blue">
            <Box />
          </Badge>    </Theme>
      </Wrapper>);
  }
}
