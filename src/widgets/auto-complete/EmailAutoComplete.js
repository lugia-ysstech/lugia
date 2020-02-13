import React from 'react';
import { AutoComplete } from '@lugia/lugia-web';

const data = ['@gmail.com', '@sina.com', '@163.com', '@qq.com'];

export default class Demo extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      menuData: []
    };
  }
  render() {
    const { menuData } = this.state;
    return (
      <AutoComplete
        data={menuData}
        onChange={this.onChange}
        placeholder={'请输入'}
        showOldValue={true}
      />
    );
  }

  onChange = value => {
    const newData = [];
    data.forEach(item => {
      if (value.indexOf('@') === -1) {
        item = '' + value + item;
        newData.push(item);
      }
    });

    this.setState({ menuData: newData });
  };
}
