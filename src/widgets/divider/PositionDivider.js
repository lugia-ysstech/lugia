/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Divider } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 50px;
`;
export default class PositionDivider extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Divider content="position left" position="left" />
        <Divider content="position right" position="right" />
        <Divider content="position center"  />
        <Divider />
        <p>"不用思考.因为我帮你想好了",这是lugia设计的重要原则之一.</p>
        <Divider />
      </Wrapper>
    );
  }
}
