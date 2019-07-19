import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
const {Tabpane}=Tabs;
const Contain =styled.div`
  float:left;
  width:50%;
`;
const H1 = styled.h1`
  line-height:50px;
  font-size:16px;
`;
const H2 = styled.p`
  line-height:50px;
  font-size:14px;
`;
export default class TabPanelEvent extends React.Component<any, any> {
  constructor(){
    super();
    this.state={
      onClick:'onClick 没有触发',
      onMouseEnter:'onMouseEnter 没有触发',
      onMouseLeave:'onMouseLeave 没有触发'
    }
  }
  onClick=(obj)=>{
    this.setState({onClick:`onClick 触发，返回:${obj}`});
  };
  onMouseEnter=(obj)=>{
    this.setState({onMouseEnter:`onMouseEnter 触发，返回:${obj}`});
  }
  onMouseLeave=(obj)=>{
    this.setState({onMouseLeave:`onMouseLeave 触发，返回:${obj}`});
  }
  render(){
    const children=[
      <Tabpane title={'1111'} content={'111'} onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>,
      <Tabpane title={'2222'} content={'2222'} onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>,
    ];
    return (
      <div>
        <H2>onClick:{this.state.onClick}</H2>
        <H2>onMouseEnter:{this.state.onMouseEnter}</H2>
        <H2>onMouseLeave:{this.state.onMouseLeave}</H2>
        <Tabs children={children}/>
      </div>
    )
  }
}
