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
export default class TalPanel extends React.Component<any, any> {
  render(){
    const data=[
      <Tabpane title={'disabled'} content={'disabled'} disabled/>,
      <Tabpane title={'2222'} content={<div>2222</div>}/>,
      <Tabpane title={'isSelect'} content={<div>isSelect</div>} isSelect/>,
      <Tabpane title={'icon'} content={<div>icon</div>} icon={'lugia-icon-financial_pay'}/>,
      <Tabpane title={'suffixIcon'} content={<div>suffixIcon</div>} suffixIcon={'lugia-icon-financial_unlock'}/>
    ];
    return (
      <Tabs
        children={data}
      />
    )
  }
}
