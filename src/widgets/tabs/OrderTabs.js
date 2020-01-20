import React from 'react';
import { Tabs } from '@lugia/lugia-web';
import styled from "styled-components";

const hasActivityKeyDefaultData = [
  {
    title: 'Tab1',
    content: 'content of Tab1',
    value: '0'
  },
  {
    title: 'Tab2',
    content: 'content of Tab2',
    value: '1'
  },
];

const Title = styled.div`
   margin: 0 0 10px;
`;

export default class OrderTabs extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      data:hasActivityKeyDefaultData
    };
  }

  onAddClick = () => {
    const {data} = this.state;
    const addItem = [
      { title: '用户管理', content: '这里是用户管理界面' , value: '用户管理' },
      { title: '权限管理', content: '这里是权限管理界面' , value: '权限管理'},
      { title: '数据统计', content: '这里是数据统计界面' , value: '数据统计'},
      { title: '消息通知', content: '这里是消息通知界面' , value: '消息通知'},
      { title: '个人中心', content: '这里是个人中心界面' , value: '个人中心'},
      { title: '设置', content: '这里是设置界面' , value: '设置'},
      { title: '图表统计', content: '这里是图表统计界面' , value: '图表统计'},
    ];
    const index = Math.floor(Math.random() * 5);
    const item = addItem[index];
    const {value} = item;
    item.value = `${value}${index + Math.floor(Math.random() * 200)}`;
    data.push(item);
    this.setState({data});
  };

  onDeleteClick = res => {
    const { data } = this.state;
    const { index } = res;
    const newDate = [...data];
    newDate.splice(index, 1);
    this.setState({ data: newDate });
  };

  render() {
    const {data} = this.state;
    return (
      <div>
        <Title>  </Title>
        <Tabs
          tabType={'card'}
          pagedType={'single'}
          onAddClick={this.onAddClick}
          onDelete={this.onDeleteClick}
          data={data}
          showAddBtn={true}
          showDeleteBtn={true}
        />
      </div>
    );
  }
}
