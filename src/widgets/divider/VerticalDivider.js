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
export default class VerticalDivider extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <p>type vertical</p>
        <div style={{ height: 20 }}>
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
        </div>
      </Wrapper>
    );
  }
}
