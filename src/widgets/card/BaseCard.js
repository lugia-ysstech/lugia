import React from "react";
import { Card, Theme } from "@lugia/lugia-web";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
`;
export default class BaseCard extends React.Component<any, any> {
  click = () => {};
  render() {
    return (
      <Wrapper>
        <Card title={"This is title"} description={"This is description"} />
      </Wrapper>
    );
  }
}
