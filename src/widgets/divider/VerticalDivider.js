import React from "react";
import { Divider } from "@lugia/lugia-web";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 20;
`;
export default class VerticalDivider extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <div style={{ height: 20 }}>
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
          <Divider type="vertical" />
          text
        </div>
      </Wrapper>
    );
  }
}
