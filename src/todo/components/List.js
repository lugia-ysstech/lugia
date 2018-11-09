/**
 *
 * create by ligx
 *
 * @flow
 */
import React, { Component } from "react";
import styled from "styled-components";
const hoverColor = "red";
const Item = styled.li`
  user-select: none;
  cursor: pointer;
  &:hover {
    color: ${hoverColor};
  }
`;

const CloseIcon = styled.span`
  user-select: none;
  cursor: pointer;
  ${Item}:hover {
    color: ${hoverColor};
  }
  &:hover {
    color: ${hoverColor};
  }
`;

export default class List extends Component<any> {
  render() {
    return <ul>{this.renderList()}</ul>;
  }

  delItem = (title: string) => () => {
    const { delItem } = this.props;
    delItem && delItem({ title });
  };

  renderList(): Object[] {
    const { data = [] } = this.props;
    return data.map(title => {
      const del = this.delItem(title);
      return (
        <Item onClick={del}>
          {title} <CloseIcon onClick={del}>x</CloseIcon>
        </Item>
      );
    });
  }
}
