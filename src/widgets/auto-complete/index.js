/**
 *
 * create by LYQ
 *
 * @flow
 */

import  React from 'react';
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
  'R3hab',
];

export default class Demo extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      menuData: data,
      value: '',
    };
  }
  render() {
    const { menuData } = this.state;
    return <AutoComplete data={menuData} onChange={this.onChange} />;
  }

  onChange = (value: string) => {
    this.search(value);
  };

  search(query: string) {
    let menuData;
    let rowSet = [];
    const len = data.length;

    for (let i = 0; i < len; i++) {
      const row = data[i];
      if (this.searchValue(query, row)) {
        rowSet.push(row);
      }
      if (query === row) {
        rowSet = [];
        break;
      }
    }

    if (rowSet.length === len) {
      menuData = data;
    } else {
      menuData = rowSet;
    }
    this.setState({ menuData });
  }

  searchValue = (query: string, row: string): boolean => {
    return row.indexOf(query) !== -1 || row === query;
  };
}
