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
export default class TabPosition extends React.Component<any, any> {
  render(){
    return (
      <div>
        <H2>top</H2>
        <Tabs tabPosition={'top'}/>
        <H2>right</H2>
        <Tabs tabPosition={'right'}/>
        <H2>bottom</H2>
        <Tabs tabPosition={'bottom'}/>
        <H2>left</H2>
        <Tabs tabPosition={'left'}/>
      </div>

    )
  }
}
