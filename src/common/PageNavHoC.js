/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import routerInfo from '../router';
import PageLoading from "../pageloading";
import {designRouterMobile} from "../App";

const { designRouter, routerConfig } = routerInfo;
type DefProps = {
  current?: string,
}

type StateProps = {
  current?: string,
  pathType: string
}
let isMobile = false;
const u = window.navigator.userAgent.toLowerCase();
if(u.indexOf('iphone') > -1 || u.indexOf('android') > -1 ||  u.indexOf('ipad') > -1){
  const _query_url = location.search;
  if(_query_url.indexOf('ismobile') < 0){
    isMobile = true;
  }
}



export default (objRouter: Object, Target: any) => {
  objRouter = {...objRouter,   ...designRouter, ...routerConfig};
  return class Pages extends React.Component<any, any> {

    static getDerivedStateFromProps (defProps: DefProps, stateProps: StateProps) {
      const path = window.location.hash.match(/[^#]+/g)[0];
      if (!stateProps) {
        return {
          path,
        };
      }
      return {
        path,
      };
    }


    render () {
      const { path } = this.state;
      const sort = objRouter[ path ].sort;
      const prev = (sort - 1) > 0 && this.getUrlByUrl(sort - 1) || {};
      const next = this.getUrlByUrl(sort + 1) || {};
      return <Target prev={prev} next={next} {...this.props} isMobile={isMobile}/>;
    }


    getUrlByUrl = (index: number) => {
      for (const i in objRouter) {
        if (objRouter[ i ].sort === index) {
          return { url: objRouter[ i ].value, text: objRouter[ i ].text };
        }
      }
    };
  };
};
