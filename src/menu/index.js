/**
 *
 * create by LYQ
 *
 *
 */
import React from 'react';
import { go, Link } from '@lugia/lugiax-router';
import { Button, Menu,Navmenu ,Theme} from '@lugia/lugia-web';
import '../css/menu.css';
import routerConfig from '../router';
import Widget from '@lugia/lugia-web/dist/consts/index';
import { bindTo, connect } from '@lugia/lugiax';
import menu from './models/menu';
import MenuList from './component/menulist';


const NavmenuList = connect(
  menu,
  state => {
    // console.log('get(current)',state.menu.get('current'));
    return { current: state.menu.get('current') };
  },
  mutations => {
    const { menu } = mutations;
    return { onSelect: menu.onSelect};
  }
)(MenuList);


export default () => {
  return (
    <div >
      {
        <NavmenuList/>
      }
    </div>
  );
};
