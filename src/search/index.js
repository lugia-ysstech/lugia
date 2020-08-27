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
import styled from "styled-components";


const SearchContainer = styled.div`
 line-height: 1rem;
 margin-top: 15px;
`;

const SearchComponent = connect(
  search,
  state => {
    return {
      searchInfo: state.get('searchInfo'),
      result: state.get('result'),
    };
  },
  mutations => {
    return {
      handleInputChange: mutations.handleInputChange,
      fetchRequest: mutations.asyncFetchRequest
    };
  }
)(SearchElement);


export default (props) => {
  return (
    <SearchContainer >
      <SearchComponent {...props}/>
    </SearchContainer>
  );
};
