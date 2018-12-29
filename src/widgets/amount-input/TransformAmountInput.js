/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { AmountInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
`;

export default class TransformAmountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return(
      <Wrapper>
        <p> transform:true </p>
        <AmountInput transform={true} />
        <p> transform:false </p>
        <AmountInput transform={false} />
      </Wrapper>);
  }
}
