/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { tabs, Theme } from '@lugia/lugia-web';
import BaseTabs from './BaseTabs';
import PositionTabs from './PositionTabs';
import TypeTabs from './TypeTabs';
import PagedTypeTabs from './PagedTypeTabs';
import OrderTabs from './OrderTabs';
import ChangeTabs from './ChangeTabs';

export default () => {
  return (
    <div>
      <BaseTabs />
      <PositionTabs />
      <TypeTabs />
      <PagedTypeTabs />
      <OrderTabs />
      <ChangeTabs />
    </div>
  );
};
