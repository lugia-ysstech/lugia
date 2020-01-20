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
export default class SizeNumberInput extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <InputWrapper>
          <NumberInput size={"small"} />
        </InputWrapper>
        <InputWrapper>
          <NumberInput />
        </InputWrapper>
        <InputWrapper>
          <NumberInput size={"large"} />
        </InputWrapper>
      </Wrapper>
    );
  }
}
