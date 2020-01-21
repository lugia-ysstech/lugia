import * as React from "react";
import { Table } from "@lugia/lugia-web";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Operations",
    dataIndex: "",
    key: "operatio ns",
    render: () => <a href="#">Delete</a>
  }
];

const data = [
  { name: "Jack", age: 28, address: "some where", key: "1" },
  { name: "Rose", age: 36, address: "some where", key: "2" },
  { name: "Rook", age: 22, address: "some where", key: "3" },
  { name: "Lise", age: 33, address: "some where", key: "4" }
];

export default class TableDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      selectRowKeys: ["1"]
    };
  }

  selectChange = (selectRowKeys: string, records: Object) => {
    console.log("selectRowKeys", selectRowKeys, "records", records);
    this.setState({
      selectRowKeys
    });
  };
  render() {
    return (
      <div>
        <Table
          columns={columns}
          data={data}
          selectOptions={{
            onChange: this.selectChange,
            selectRowKeys: this.state.selectRowKeys,
            setCheckboxProps(record) {
              return { disabled: record.name === "Jack" };
            },
            width: 60
          }}
          expandedRowRender={record => <p>{record.name}</p>}
        />
      </div>
    );
  }
}
