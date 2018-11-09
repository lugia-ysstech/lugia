/**
 *
 * create by ligx
 *
 * @flow
 */
import React, { Component } from "react";
import styled from "styled-components";
import Timer from "./Timer";

const hoverColor = "red";
const Item = styled.li`
  user-select: none;
  cursor: pointer;
  &:hover {
    color: ${hoverColor};
  }
`;

export default class List extends Component {
  render() {
    return <ul>{this.renderList()}</ul>;
  }

  delItem = (title: string) => () => {
    const { delItem } = this.props;
    delItem && delItem({ title });
  };

  renderList(): Object[] {
    const { data = [] } = this.props;
    return data.map((item: Object) => {
      const { beginAt, time, taskName } = item;
      return (
        <Item>
          <Timer beginAt={beginAt} time={time} taskName={taskName} />
        </Item>
      );
    });
  }
}
