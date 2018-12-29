/**
 * create by szfeng
 */
import React from 'react';
import { Breadcrumb, Icon } from '@lugia/lugia-web';

export default class IconBreadcrumb extends React.Component<any, any> {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="breadcrumb">
          <span>首页</span>
          <Icon iconClass="lugia-icon-financial_smile" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="breadcrumb">
          <span>二级面包屑</span>
          <Icon iconClass="lugia-icon-financial_smile" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="breadcrumb">
          <span>三级面包屑</span>
          <Icon iconClass="lugia-icon-financial_smile" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>四级面包屑</span>
          <Icon iconClass="lugia-icon-financial_smile" />
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
