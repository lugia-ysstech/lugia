import React from "react";
import { Pagination } from "@lugia/lugia-web";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 30px;
`;
export default class PaginationDemo extends React.Component {
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  render() {
    return (
      <div>
        <Wrapper>分页 展示分页列表和快速跳转</Wrapper>
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
        <br />
        <Wrapper>分页 展示分页列表，总计数据和快速跳转</Wrapper>
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
        <br />
        <Wrapper>分页 展示分页列表，快速跳转，总计数据和展示条数下拉框</Wrapper>
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
