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
export const designRouterMobile = {
  '/': {
    exact: true,
    render: async () => import('./mobile/home'),
    value: '/home',
    isHidden: true,
  },
  '/home':{
    value:'首页',
    text:'首页',
    url:'/home',
    render: () => import('./mobile/home'),
    // exact: true,
  },
  '/design':{
    value:'设计指南',
    text:'设计指南',
    url:'/design',
    render: () => import('./mobile/design'),

  },
  '/component':{
    value:'lugia-web',
    text:'lugia-web',
    url:'/component',
    render: () => import('./mobile/widgets'),
  },
  '/lugia-mega':{
    value:'lugia-mega',
    text:'lugia-mega',
    url:'/lugia-mega',
    render: () => import('./mobile/mega'),
  },
  '/logs':{
    value:'更新日志',
    text:'更新日志',
    url:'/logs',
    render: () => import('./mobile/logs'),
  },
  NotFound:{
    render: async () => {
      return () => <Redirect to={'/home'}/>;
    },
    isHidden: true,
  }

};
let rout = createRoute(designRouter, PageLoading);

const u = window.navigator.userAgent.toLowerCase();
if(u.indexOf('iphone') > -1 || u.indexOf('android') > -1 ||  u.indexOf('ipad') > -1){
  const _query_url = location.search;
  if(_query_url.indexOf('ismobile') < 0){
    console.log('ismobile');
    rout = createRoute(designRouterMobile, PageLoading);
  }
}


export default () => {

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
