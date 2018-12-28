/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert ,  Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
const Container = styled.div` 
  padding:45px 50px 50px;
  height:1500px;
`;
export default class Pages extends React.Component<any, any> {
  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const defCurrent = defProps.current || ['EditTable'];
    if (!stateProps) {
      return {
        current:defCurrent,
      };
    }
    return {
      current: 'current' in defProps ? defCurrent : stateProps.current,
    };
  }


  render() {
    return (
      <Container>
          Home!!
      </Container>
    );
  }
}
