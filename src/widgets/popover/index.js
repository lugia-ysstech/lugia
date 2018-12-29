/**
 *
 * create by liangguodong
 *
 * @flow
 */
import * as React from 'react';
import { popover, Button, Input } from '@lugia/lugia-web';
import BasePopover from './BasePopover';
import ActionPopover from './ActionPopover';
import HoverClickPopover from './HoverClickPopover';
import InnerClosePopover from './InnerClosePopover';

export const WrapperDemo = () => {
  return (
    <div>
      <BasePopover />
      <br />
      <ActionPopover />
      <br />
      <InnerClosePopover />
      <br />
      <HoverClickPopover />
    </div>
  );
};
export default () => {
  return <WrapperDemo />;
};
