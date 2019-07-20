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
export default class IsSelect extends React.Component<any, any> {
  render(){
    return (
      <Tabs>
        <Tabpane title={'1111'} content={'11111'} />
        <Tabpane title={'2222'} isSelect content={<div>2222</div>}/>
      </Tabs>
    )
  }
}
