import React from 'react';
import { AmountInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
`;

export default class TransformAmountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return(
      <Wrapper>
        <AmountInput transform={true} />
        <AmountInput transform={false} />
      </Wrapper>);
  }
}
