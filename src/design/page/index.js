/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import { Alert ,  Theme,BackTop } from '@lugia/lugia-web';
// import { Widget} from '@lugia/lugia-web/dist/consts/index';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
import Temlpate from '../template/template';
import data from './document';
import routerInfo from '../../router';

const {designRouter,routerConfig} = routerInfo;
const objRouter = Object.assign(designRouter,routerConfig);

const Container = styled.div` 
  padding:45px 0 50px 0;
  width:100%;
`;

type DefProps ={
  current?:string,
}

type StateProps ={
  current?:string,
  pathType:string
}

const getUrlByUrl = (index:number) => {
  for(const i in objRouter){
    if(objRouter[i].sort === index){
      return {url:objRouter[i].value,text:objRouter[i].text};
    }
  }
};

export default class Pages extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {
    const path = window.location.pathname;
    const pathType = path.match(/[^/]+/g)[1];
    if (!stateProps) {
      return {
        pathType,
        path,
      };
    }
    return {
      pathType: 'pathType' in stateProps ? stateProps.pathType : pathType,
      path,
    };
  }


  render() {
    const {pathType,path} = this.state;
    const dataSource = data[pathType] ||data.introduce;
    const sort = objRouter[path].sort;
    const prev =(sort-1) > 0 && getUrlByUrl(sort-1) || {};
    const next = getUrlByUrl(sort+1) ||{};
    return (
      <Container>
        <Temlpate dataSource={dataSource} prev={prev} next={next} >
        </Temlpate>
        <BackTop/>
      </Container>
    );
  }
}
