import React from 'react';
import {Pagination} from '@lugia/lugia-web';

export default class PaginationDemo extends React.Component {
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  render() {
    return (
      <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
    );
  }
}
