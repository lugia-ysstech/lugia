/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { AmountInput } from "@lugia/lugia-web";
import styled from "styled-components";

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
`;

export default class PrefixAmountInput extends React.Component<any, any> {
  render() {
    return(
    <Wrapper>
      <p>amountPrefix: '¥' </p>
      <AmountInput amountPrefix="¥" />
      <p>amountPrefix: '$' </p>
      <AmountInput amountPrefix="$" />
    </Wrapper>);
  }
}
