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
export default class Data extends React.Component<any, any> {
  render(){
    const defaultData=[
      {
        title: 'Tab1',
        content: 'defaultDataTab1',
      },
      {
        title: 'Tab2',
        content: 'defaultData Tab2'
      },
    ];
    const data=[
      {
        title: 'Tab1',
        content: 'content of Tab1',
      },
      {
        title: 'Tab2',
        content: 'content of Tab2'
      },
    ];
    const disabledData=[
      {
        title: 'Tab1',
        content: 'content of Tab1',
      },
      {
        title: 'Tab2',
        content: 'content of Tab2',
        disabled:true
      },
    ];
    return (
      <div>
        <H2>defaultData</H2>
        <Tabs defaultData={defaultData} />
        <H2>data</H2>
        <Tabs data={data} />
        <H2>data+defaultData</H2>
        <Tabs data={data} defaultData={defaultData}/>
        <H2>disabled</H2>
        <Tabs data={disabledData}/>
        <H2>defaultActivityValue</H2>
        <Tabs data={data} defaultActivityValue={1}/>
        <H2>activityValue</H2>
        <Tabs data={data} activityValue={1}/>
        <H2>showDeleteBtn</H2>
        <Tabs data={data} showDeleteBtn={true}/>
      </div>
    )
  }
}
