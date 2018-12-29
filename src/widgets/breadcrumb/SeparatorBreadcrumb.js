/**
 * create by szfeng
 */
import React from 'react';
import { Breadcrumb } from '@lugia/lugia-web';

export default class SeparatorBreadcrumb extends React.Component<any, any> {
  render() {
    return (
      <Breadcrumb separator={'>'}>
        <Breadcrumb.Item href="breadcrumb">首页</Breadcrumb.Item>
        <Breadcrumb.Item href="breadcrumb">二级面包屑</Breadcrumb.Item>
        <Breadcrumb.Item href="breadcrumb">三级面包屑</Breadcrumb.Item>
        <Breadcrumb.Item>四级面包屑</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
