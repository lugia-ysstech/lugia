/**
 *
 * create by szfeng
 *
 */
import React from 'react';
import { AutoComplete } from '@lugia/lugia-web';

const data = [
  'Nikcy Romero',
  'Armin van Buuren',
  'Hardwell',
  'Zedd',
  'Kazze',

  'Vicetone',
  'Martin Garrix',
  'David Guetta',
  'The Chainsmokers',
  'Kygo',

  'Axwell ^ Ingrosso',
  'Dimitri Vegas & Like Mike',
  'Calvin Harris',
  'Avicci',
  'Fedde Le Grand',

  'Tiesto',
  'Snoop Dogg',
  'Bassjackers',
  'Sebastian Ingrosso',
  'Swedish House Mafia',
  'Alesso',
  'Afrojack',
  'Knife Party',
  'Dannic',
  'R3hab'
];

export default class ShowOldAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: data,
      value: ''
    };
  }
  render() {
    return (
      <AutoComplete
        data={this.state.menuData}
        onChange={this.onChange}
        placeholder={'请输入'}
        showOldValue={true}
      />
    );
  }

  onChange = value => {
    this.search(value);
  };

  search(query) {
    let menuData;
    let rowSet = [];
    const len = data.length;

    for (let i = 0; i < len; i++) {
      const row = data[i];
      if (query === row) {
        rowSet = [];
        break;
      }

      if (this.searchValue(query, row)) {
        rowSet.push(row);
      }
    }

    if (rowSet.length === len) {
      menuData = data;
    } else {
      menuData = rowSet;
    }
    this.setState({ menuData });
  }

  searchValue = (query, row) => {
    return row.indexOf(query) !== -1 || row === query;
  };
}
