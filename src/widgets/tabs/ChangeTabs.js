import React from 'react';
import { Theme, Tabs, Button,Icon } from '@lugia/lugia-web';
import styled from "styled-components";
import Widget from '@lugia/lugia-web/dist/consts';

const CustomHome = styled.div`
  width: 40px;
`;
const CustomTitle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 120px;
`;
const CustomContent = styled.div`
  padding: 20px;
`;

const defaultHome = [
  {
    title: <CustomHome> <Icon iconClass={"lugia-icon-financial_home"} /></CustomHome>,
    content: <CustomContent>content of Home</CustomContent>,
    value: '0'
  }
];

const getRandom = (limit:number) => {
  return Math.floor(Math.random() * limit);
};
const getData = () => {
  const defaultData = [];
  for(let i = 0;i< 5;i++){
    const valueNumber = getRandom(100);
    const valueNumberAfter = getRandom(20);
    const title = `Tab${valueNumber}${valueNumberAfter}`;
    const item = {
      title: <CustomTitle>{title}</CustomTitle> ,
      content: <CustomContent>Content of new {title}</CustomContent>  ,
      value:title
    };
    defaultData.push(item)
  }
  return defaultHome.concat(defaultData);
};

const themeConfig = {
  [Widget.Tabs]: {
    TabHeader: {
      DefaultTabPan: {
        normal: {
          padding: {
            left: 0,
            right: 0,
            top:0,
            bottom:0
          },
        },

      },
    },
  },
};
export default class ChangeTabs extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      data:getData()
    };
  }

  render() {

    const { data } = this.state;
    return (
      <div>
        <Theme config={themeConfig}>
          <Tabs
            tabType={'line'}
            data={data}
          />
          <Tabs
            tabType={'card'}
            data={data}
          />
          <Tabs
            tabType={'window'}
            data={data}
          />
        </Theme>

      </div>
    );

  }
}
