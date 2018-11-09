/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import {Breadcrumb,Icon}  from '@lugia/lugia-web';
import styled from 'styled-components';
// import Icon from '../icon';

const Hr = styled.div`
  height: 2px;
  background: orange;
  margin: 20px 0;
`;

const CommonIcon = styled(Icon)`
  color: #000;
  border-radius: 50%;
`;

const routes = [
  {
    path: 'index',
    title: '首页',
  },
  {
    path: 'first',
    title: '一级面包屑',
  },
  {
    path: 'second:id',
    title: '二级面包屑:id',
  },
  {
    path: 'third',
    title: '当前页面',
  },
];

export default class Demo extends React.Component<any, any> {
  render() {
    return (
      <div>
        {/*Breadcrumb 和 Breadcrumb.Item配合使用，使用href属性时，可跳转 */}
        {/* <Breadcrumb separator={'>'}>
          <Breadcrumb.Item href="a">主页</Breadcrumb.Item>
          <Breadcrumb.Item href="b">一级菜单</Breadcrumb.Item>
          <Breadcrumb.Item href="c">二级菜单</Breadcrumb.Item>
          <Breadcrumb.Item>三级菜单</Breadcrumb.Item>
        </Breadcrumb> */}
        {/* <Breadcrumb separator={'>'}>
          <Breadcrumb.Item path="/index">主页</Breadcrumb.Item>
          <Breadcrumb.Item path="two">一级菜单</Breadcrumb.Item>
          <Breadcrumb.Item path="/index">二级菜单</Breadcrumb.Item>
          <Breadcrumb.Item href="d">三级菜单</Breadcrumb.Item>
        </Breadcrumb> */}
        <Hr />
        {/* 传入routes路由属性，使用默认的 renderItem函数,生成面包屑组件 */}
        {/* <Breadcrumb separator={'>'} params={{ id: 1 }} routes={routes} /> */}
        <Hr />
        {/* 传入Icon图标 */}
        {/* <Breadcrumb>
          <Breadcrumb.Item href="">
            <CommonIcon iconClass="lugia-icon-logo_chrome" type="home" />
            <span>一级面包屑菜单 </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <span>二级面包屑菜单</span>
            <CommonIcon iconClass="lugia-icon-financial_smile" type="user" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>二级面包屑菜单</span>
            <CommonIcon iconClass="lugia-icon-logo_apple" type="user" />
          </Breadcrumb.Item>
        </Breadcrumb> */}
        <Breadcrumb separator={undefined} params={{ id: 1 }} routes={routes} />
      </div>
    );
  }
}

//     demo2
//  给路由传入params 参数
// import * as React from 'react';
// import Breadcrumb from './index';

// export default class Demo extends React.Component<any, any> {
//   render() {
//     return <Breadcrumb params={{ id: 1 }} routes={routes} />;
//   }
// }
