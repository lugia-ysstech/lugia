/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import DefaultBreadcrumb from './DefaultBreadcrumb';
import IconBreadcrumb from './IconBreadcrumb';
import SeparatorBreadcrumb from './SeparatorBreadcrumb';
import RoutesBreadcrumb from './RoutesBreadcrumb';

export default class Demo extends React.Component<any, any> {
  render() {
    return (
      <div>
        <DefaultBreadcrumb />
        <IconBreadcrumb />
        <SeparatorBreadcrumb />
        <RoutesBreadcrumb />
      </div>
    );
  }
}
