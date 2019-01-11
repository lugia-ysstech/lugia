import React from 'react';
import { Divider } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
`;
export default class PositionDivider extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Divider content="position left" position="left" />
        <Divider content="position right" position="right" />
        <Divider content="position center"  />
      </Wrapper>
    );
  }
}
