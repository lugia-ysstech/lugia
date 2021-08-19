/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import { COPYRIGHT } from '../common/constants';

const Wrapper = styled.div`
  text-align: center;
  min-height: ${props => props.height?props.height+'px':'500px'};
  position:relative;
  z-index:3;
`;

const CopyRight = styled.div`
  width:100%;
  text-align: center;
  position:absolute;
  bottom:20px;
  color:#fff;
`;

export default class Footer extends React.Component {

  render() {
    const {height} = this.props;
    return (
      <Wrapper height={height}>
        <CopyRight>
          {COPYRIGHT}
        </CopyRight>
      </Wrapper>
    );
  }


}
