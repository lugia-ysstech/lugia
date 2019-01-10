/**
 *
 * create by LYQ
 *
 *
 */
import React from 'react';
import { Button, Menu, Navmenu, Theme } from '@lugia/lugia-web';
import '../css/menu.css';
import { bindTo, connect } from '@lugia/lugiax';
import search from './models/search';
import SearchElement from './component/search';

const SearchComponent = connect(
  search,
  state => {
    return { searchInfo: state.search.get('searchInfo') };
  },
  mutations => {
    const { search } = mutations;
    return { onTabClick: search.onTabClick};
  }
)(SearchElement);


export default () => {
  return (
    <div >
      <SearchComponent />
    </div>
  );
};
