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
export default class TabsEvent extends React.Component<any, any> {
  constructor(){
    super();
    this.state={
      onTabClick:'onTabClick 没有触发',
      onChange:'onChange 没有触发',
      onNextClick:'onNextClick 没有触发',
      onPreClick:'onPreClick 没有触发',
      onDelete:'onDelete 没有触发'
    }
  }
  onTabClick=(obj)=>{
    this.setState({onTabClick:`onTabClick 触发，返回:${obj}`});
  };
  onChange=(obj)=>{
    this.setState({onChange:`onChange 触发，返回:${obj}`});
  };
  onNextClick=(obj)=>{
    this.setState({onNextClick:`onNextClick 触发，返回:${obj}`});
  };
  onPreClick=(obj)=>{
    this.setState({onPreClick:`onPreClick 触发，返回:${obj}`});
  };
  onDelete=(obj)=>{
    this.setState({onDelete:`onDelete 触发，返回:${obj}`});
  };
  render(){
    return (
      <div>
        <H2>onTabClick:{this.state.onTabClick}</H2>
        <H2>onChange:{this.state.onChange}</H2>
        <H2>onNextClick:{this.state.onNextClick}</H2>
        <H2>onPreClick:{this.state.onPreClick}</H2>
        <H2>onDelete:{this.state.onDelete}</H2>
        <Tabs
          onTabClick={this.onTabClick}
          onChange={this.onChange}
          onNextClick={this.onNextClick}
          onPreClick={this.onPreClick}
          onDelete={this.onDelete}
          tabType={'card'}
          showDeleteBtn
        />
      </div>
    )
  }
}
