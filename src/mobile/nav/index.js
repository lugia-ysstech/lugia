/**
 *
 * create by LYQ
 *
 *
 */
import React from 'react';
import { Button, Menu, Navmenu, Theme } from '@lugia/lugia-web';
import '../../css/menu.css';
import { bindTo, connect } from '@lugia/lugiax';
import nav from './models/nav';
import Navcomponent from './component/navcomponent';

const NavList = connect(
  nav,
  state => {
    return { current: state.get('current') };
  },
  mutations => {
    return { onTabClick: mutations.onTabClick};
  }
)(Navcomponent);


export default () => {
  return (
    <div >
        <NavList/>
    </div>
  );
};
