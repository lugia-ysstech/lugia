import React from 'react';
import { AutoComplete ,Theme} from '@lugia/lugia-web';
import Widget from "@lugia/lugia-web/dist/consts";


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
      <Theme
        config={{
          [Widget.AutoComplete]: {
            Container: {
              normal: { width: 300 }
            }
          }
        }}
      >
      <AutoComplete
        data={menuData}
        onChange={this.onChange}
        placeholder={'请输入'}
        showOldValue={true}
      />
      </Theme>
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
