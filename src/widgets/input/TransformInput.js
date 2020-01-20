import React from "react";
import { Input } from "@lugia/lugia-web";
import styled from "styled-components";

const Wrapper = styled.div``;

export default class TransformInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const formatter = value => {
      return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const parser = value => {
      return value.replace(/\$\s?|(,*)/g, "");
    };
    return (
      <Wrapper>
        <Input
          placeholder={"请填写金额"}
          formatter={formatter}
          parser={parser}
        />
      </Wrapper>
    );
  }
}
