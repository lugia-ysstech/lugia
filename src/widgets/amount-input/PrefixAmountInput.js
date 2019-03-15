import React from 'react';
import { AmountInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
`;
const InputWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export default class PrefixAmountInput extends React.Component<any, any> {
  render() {
    return(
    <Wrapper>
      <InputWrapper>
        <AmountInput amountPrefix="¥" />
      </InputWrapper>
      <InputWrapper>
        <AmountInput amountPrefix="$" transform={false} />
      </InputWrapper>
    </Wrapper>);
  }
}
