/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import { go } from '@lugia/lugiax-router';
import {Theme ,Icon,Input,AutoComplete} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';
//
// const SearchInput = styled(Input)`
//   margin:0 50px;
//   border-bottom:1px solid #ccc !important;
//   // position:relative;
// `;


type DefProps={
  current?:Array<string>,
  onSelect?:Function,
};

type StateProps={
  currentState:Array<string>
};

class SearchIcon extends React.Component<any> {
  static displayName = Widget.SearchIcon;

  render() {
    return <Icon iconClass="lugia-icon-financial_search"  />;
  }
}


const data = [
  'autocomplete',
];

export default class Navcomponent extends React.Component<any, any> {

  static getDerivedStateFromProps(defProps: DefProps, stateProps: StateProps) {

    if (!stateProps) {
      return {
        menuData:data
      };
    }
    return {

    };
  }

  render() {
    const InputStyle = {
      [Widget.Input]: {
        borderSize:{top:0,right:0,bottom:1,left:0},
        borderColor:'#ccc',
        margin: {top:0,right:0,bottom:0,left:38},
      },
      [Widget.AutoComplete]: {
        width:80,
      },
    };
    return (
        <Theme config={InputStyle}>
          {/*<Input prefix={<SearchIcon />} onChange={this.handleInputChange} placeholder="在lugia中搜索" value={this.state.value}   />*/}
          <AutoComplete

            data={this.state.menuData}

            onChange={this.handleInputChange}

            placeholder={'在lugia中搜索'}

          />

        </Theme>

    );
  }

  handleInputChange = (newValue:Object) => {
    console.log(newValue);
    this.setState({
      value:newValue,
    });
  };

  linkToUrl = res => {
    go({ url: res });
  };


}
