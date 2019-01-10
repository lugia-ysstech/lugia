/**
 *
 * create by LYQ
 *
 *
 */
import React from 'react';
import { Button, Menu, Navmenu, Theme } from '@lugia/lugia-web';
import '../css/menu.css';
import { connect } from '@lugia/lugiax';
import search from './models/search';
import SearchElement from './component/search';

const SearchComponent = connect(
  search,
  state => {
    return {
      searchInfo: state.search.get('searchInfo'),
      result: state.search.get('result'),
    };
  },
  mutations => {
    const { search } = mutations;
    return {
      handleInputChange: search.handleInputChange,
      fetchRequest: search.asyncFetchRequest
    };
  }
)(SearchElement);


export default () => {
  return (
    <div >
      <SearchComponent />
    </div>
  );
};
