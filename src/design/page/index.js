/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert ,  Theme } from '@lugia/lugia-web';
// import { Widget} from '@lugia/lugia-web/dist/consts/index';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import Temlpate from '../template/template';
import data from './document'
const Container = styled.div` 
  padding:45px 50px 50px;
  width:980px;
`;


export default class Pages extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const path = window.location.pathname;
    const pathType = path.match(/[^/]+/g)[1];
    const defCurrent = defProps.current || pathType;
    if (!stateProps) {
      return {
        current:defCurrent,
        pathType:pathType
      };
    }
    return {
      current: 'current' in defProps ? defCurrent : stateProps.current,
      pathType: 'pathType' in stateProps ? stateProps.pathType : pathType,
    };
  }


  render() {
    const {pathType} = this.state;
    console.log(data,pathType);
    const dataSource = data[pathType] ||data.introduce;
    return (
      <Container>
        <Temlpate dataSource={dataSource}>
        </Temlpate>
      </Container>
    );
  }
}
