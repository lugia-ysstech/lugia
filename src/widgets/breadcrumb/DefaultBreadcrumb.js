import React from 'react';
import { Breadcrumb } from '@lugia/lugia-web';

export default class DefaultBreadcrumb extends React.Component<any, any> {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="breadcrumb">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="breadcrumb">二级面包屑</Breadcrumb.Item>
        <Breadcrumb.Item href="breadcrumb">三级面包屑</Breadcrumb.Item>
        <Breadcrumb.Item>四级面包屑</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
