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
        <br />
        <Wrapper>分页 展示在左边 默认在左边</Wrapper>
        <Pagination
          showSizeChanger
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
        />
        <br />
        <Wrapper>分页 展示在右边 </Wrapper>
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
