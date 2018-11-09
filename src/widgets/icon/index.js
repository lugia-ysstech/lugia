/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import {Icon,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
// import '../common/shirm';

type IconProps = {
    viewClass?: string,
    onClick?: Function,
    getTheme?: Function,
  };
  
export default (IconProps) => {
  const onClick = () => {};
  const defaultView = {
    [Widget.Icon]: { 
        margin:{
            left:20,
            right:20,
            top:20,
            bottom:20
        },
     },
  };
return (
    <Theme config={defaultView}>
        <Icon iconClass="lugia-icon-financial_switch_e_and_c" onClick={onClick} />
        <Icon iconClass="lugia-icon-direction_down" onClick={onClick} />
        <Icon iconClass="lugia-icon-reminder_close_circle_o" onClick={onClick} />
    </Theme>
);
};
