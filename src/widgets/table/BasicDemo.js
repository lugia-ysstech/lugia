import * as React from 'react';
import {Table} from '@lugia/lugia-web';
console.info(Table);

const columns = [{
  title: 'Name', dataIndex: 'name', key:'name', width: 100,
}, {
  title: 'Age', dataIndex: 'age', key:'age', width: 100,
}, {
  title: 'Address', dataIndex: 'address', key:'address', width: 200,
}, {
  title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="javascript:;">Delete</a>,
}];

const data = [
  { name: 'Jack', age: 28, address: 'some where', key:'1' },
  { name: 'Rose', age: 36, address: 'some where', key:'2' },
  { name: 'Uzi', age: 36, address: 'some where', key:'3' },
  { name: 'ClearLove', age: 36, address: 'some where', key:'4' },
  { name: 'Rookie', age: 36, address: 'some where', key:'5' },
  { name: 'TheShy', age: 36, address: 'some where', key:'6' },
];

export default class TableDemo extends React.Component {
  render() {
    return (
      <div>
        <Table columns={columns} data={data} />
      </div>
    );
  }
}
