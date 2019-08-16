/**
 *
 * create by LYQ
 *
 *
 */
import React from 'react';
import { Button, Menu, Navmenu, Theme, Affix } from '@lugia/lugia-web';
import '../css/menu.css';
import { connect } from '@lugia/lugiax';
import menu from './models/menu';
import MenuList from './component/menulist';


const NavmenuList = connect(
  menu,
  state => {
    return { current: state.get('current') };
  },
  mutations => {
    return { onSelect: mutations.onSelect};
  }
)(MenuList);


export default (props) => {
  const {width,padding,isMobile,data, ignoreGo, onSelect} = props;
  return (
    <Affix>
      {
        <NavmenuList width={width} padding={padding} isMobile={isMobile} data={data} ignoreGo={ignoreGo} onSelect={onSelect}/>
      }
    </Affix>
  );
};
