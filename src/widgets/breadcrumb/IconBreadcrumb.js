/**
 * create by szfeng
 */
import React from 'react';
import { Breadcrumb, Icon } from '@lugia/lugia-web';
import styled from 'styled-components';

const CommonIcon = styled(Icon)`
    margin-right: 5px;
`;

export default class IconBreadcrumb extends React.Component<any, any> {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="component/breadcrumb">
          <CommonIcon iconClass="lugia-icon-logo_windows" />
          <span>首页</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="component/breadcrumb">
          <CommonIcon iconClass="lugia-icon-logo_lugia" />
          <span>二级面包屑</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="component/breadcrumb">
          <CommonIcon iconClass="lugia-icon-logo_twitter" />
          <span>三级面包屑</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <CommonIcon iconClass="lugia-icon-logo_codepen_ciecle" />
          <span>四级面包屑</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
