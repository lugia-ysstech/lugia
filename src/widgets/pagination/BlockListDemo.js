import React from "react";
import { Pagination } from "@lugia/lugia-web";

export default class PaginationDemo extends React.Component {
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  render() {
    return (
      <div>
        <Pagination
          blockList={["Page", "PageInput"]}
          isShowTotalData
          showQuickJumper
          showSizeChanger
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
        />
        <br/>
        <Pagination
          blockList={["Page", "Total", "PageInput"]}
          isShowTotalData
          showQuickJumper
          showSizeChanger
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
        />
        <br/>
        <Pagination
          blockList={["Page", "PageInput", "Total", "PageSize"]}
          isShowTotalData
          showQuickJumper
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
