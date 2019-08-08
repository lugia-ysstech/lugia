/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import routerInfo from '../router';

const { designRouter, routerConfig } = routerInfo;
type DefProps = {
  current?: string,
}

type StateProps = {
  current?: string,
  pathType: string
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
      return <Target prev={prev} next={next} {...this.props}/>;
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
