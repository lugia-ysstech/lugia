import React from "react";
import { Pagination } from "@lugia/lugia-web";

export default class PaginationDemo extends React.Component {
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  render() {
    return (
      <div>
        <br />
        <div>分页 展示在左边 默认在左边</div>
        <Pagination
          showSizeChanger
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
        />
        <br />
        <div>分页 展示在右边 </div>
        <Pagination
          align={"Right"}
          showSizeChanger
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
        />
      </div>
    );
  }
}
