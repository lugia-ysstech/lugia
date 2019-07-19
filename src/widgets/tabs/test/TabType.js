import React from 'react';
import { Theme, Tabs } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

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
export default class TabType extends React.Component<any, any> {
  render(){
    return (
      <div>
        <H2>line</H2>
        <Tabs tabType={'line'} />
        <H2>card</H2>
        <Tabs tabType={'card'} pagedType={'single'}/>
        <H2>window</H2>
        <Tabs tabType={'window'} pagedType={'page'}/>
      </div>

    )
  }
}
