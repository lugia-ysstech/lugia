/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { AmountInput, Theme, Button } from "@lugia/lugia-web";
import styled from "styled-components";
import BaseAmountInput from "./BaseAmountInput";
import DisableAmountInput from "./DisableAmountInput";
import DefaultValueAmountInput from "./DefaultValueAmountInput";
import SizeAmountInput from "./SizeAmountInput";
import TransformAmountInput from "./TransformAmountInput";
import PrefixAmountInput from "./PrefixAmountInput";

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
`;
const onChange = cmpName => (value: any) => {};

export default () => {
  return (
    <div>
      <Wrapper>
        <BaseAmountInput />
        <DefaultValueAmountInput
          value={"123456"}
          onChange={onChange("limit")}
        />
        <DisableAmountInput />
      </Wrapper>
      <SizeAmountInput></SizeAmountInput>
      <TransformAmountInput></TransformAmountInput>
      <PrefixAmountInput></PrefixAmountInput>
    </div>
  );
};
