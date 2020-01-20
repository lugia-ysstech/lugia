import React from "react";
import { Pagination } from "@lugia/lugia-web";

export default class PaginationDemo extends React.Component {
  render() {
    return <Pagination defaultCurrent={6} total={500} />;
  }
}
