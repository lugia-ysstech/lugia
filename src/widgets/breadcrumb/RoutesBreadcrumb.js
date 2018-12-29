/**
 * create by szfeng
 */
import React from 'react';
import { Breadcrumb } from '@lugia/lugia-web';

const routes = [
  {
    path: 'index',
    title: '首页'
  },
  {
    path: 'first',
    title: '一级面包屑'
  },
  {
    path: 'second:id',
    title: '二级面包屑:id'
  },
  {
    path: 'third',
    title: '四级面包屑'
  }
];

export default class RoutesBreadcrumb extends React.Component<any, any> {
  render() {
    return <Breadcrumb routes={routes} params={{ id: 'params' }} />;
  }
}
