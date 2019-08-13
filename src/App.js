import React from 'react';
import {createRoute, Redirect} from '@lugia/lugiax-router';
import {Grid, Layout, Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import PageLoading from './pageloading';
import Widgets from './widgets';
import Mega from './mega';

export const designRouter = {
  '/': {
    exact: true,
    render: async () => import('./home'),
    value: '/home',
    isHidden: true,
  },
  '/home':{
    value:'首页',
    text:'首页',
    url:'/home',
    render: () => import('./home'),
    // exact: true,
  },
  '/design':{
    value:'设计指南',
    text:'设计指南',
    url:'/design',
    render: () => import('./design'),

  },
  '/component':{
    value:'lugia-web',
    text:'lugia-web',
    url:'/component',
    component: Widgets,
  },
  '/lugia-mega':{
    value:'lugia-mega',
    text:'lugia-mega',
    url:'/lugia-mega',
    component: Mega,
  },
  '/logs':{
    value:'更新日志',
    text:'更新日志',
    url:'/logs',
    render: () => import('./logs'),
  },
  NotFound:{
    render: async () => {
      return () => <Redirect to={'/home'}/>;
    },
    isHidden: true,
  }

};
const rout = createRoute(designRouter, PageLoading);

const footer = (
  <div
    style={{
      height: '60px',
      lineHeight: '60px',
      textAlign: 'center',
      background: '#0f13ff',
    }}
  >
    Footer
  </div>
);

const block = (
  <div style={{ height: '60px'}}>
  </div>
);

export default () => {
  const layoutView = {
    [Widget.Content]: {
      width:'100%',
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 10,
      },
      bordeLeftWidth:1,
      bordeLeftColor:'#cccccc',
      bordeLeftStyle:'solid'
    },
  };

  return (
    <React.Fragment>
         {rout}
    </React.Fragment>
  );
};


const styles = {
  width: '1140px',
  height: '100%',
  margin: '0 auto',
};
