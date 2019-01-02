/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Icon, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';

export default class BaseIcon extends React.Component<any, any> {
  render() {
    const onClick = () => {};
    const defaultView = {
      [Widget.Icon]: {
        margin: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        }
      }
    };
    return (
      <Theme config={defaultView}>
        <Icon
          iconClass="lugia-icon-financial_switch_e_and_c"
          onClick={onClick}
        />
        <Icon iconClass="lugia-icon-direction_down" onClick={onClick} />
        <Icon
          iconClass="lugia-icon-reminder_close_circle_o"
          onClick={onClick}
        />
      </Theme>
    );
  }
}
