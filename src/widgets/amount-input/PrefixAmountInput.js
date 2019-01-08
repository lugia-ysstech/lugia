import React from 'react';
import { AmountInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
`;

export default class PrefixAmountInput extends React.Component<any, any> {
  render() {
    return(
    <Wrapper>
      <AmountInput amountPrefix="¥" />
      <AmountInput amountPrefix="$" />
    </Wrapper>);
  }
}
