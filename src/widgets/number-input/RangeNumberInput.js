import React from "react";
import { NumberInput } from "@lugia/lugia-web";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
`;
const InputWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export default class RangeNumberInput extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <InputWrapper>
          <NumberInput max={100} min={10} step={5} defaultValue="5" />
        </InputWrapper>
        <InputWrapper>
          <NumberInput max={1} min={0.01} step={0.01} defaultValue="0.50" />
        </InputWrapper>
        <InputWrapper>
          <NumberInput max={100} min={10} step={5} defaultValue="10" />
        </InputWrapper>
      </Wrapper>
    );
  }
}
