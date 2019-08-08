/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { BackTop } from '@lugia/lugia-web';
import styled from 'styled-components';
import Temlpate from '../template/template';
import data from './document';
import PageNavHoC from '../../common/PageNavHoC';




const Container = styled.div` 
  padding:45px 0 50px 0;
  width:100%;
`;

type DefProps = {
  current?: string,
}

type StateProps = {
  current?: string,
  pathType: string
}

const TemlpateNav = PageNavHoC({}, Temlpate);
export default class Pages extends React.Component<any, any> {

  static getDerivedStateFromProps (defProps: DefProps, stateProps: StateProps) {
    const path = window.location.hash;
    const pathType = path.match(/[^/]+/g)[2];
    if (!stateProps) {
      return {
        pathType,
      };
    }
    return {
      pathType: 'pathType' in stateProps ? stateProps.pathType : pathType,
    };
  }


  render () {
    const { pathType } = this.state;
    const dataSource = data[ pathType ] || data.introduce;
    return (
      <Container>
        <TemlpateNav dataSource={dataSource}>
        </TemlpateNav>
        <BackTop/>
      </Container>
    );
  }
}
