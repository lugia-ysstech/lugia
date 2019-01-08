import React from 'react';
import { AmountInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
`;

const onChange = cmpName => (value: any) => {};
export default class SizeAmountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    return(
    <Wrapper>
    <AmountInput size={'small'} placeholder={'请填写金额'} />
    <AmountInput placeholder={'请填写金额'} />
    <AmountInput size={'large'} placeholder={'请填写金额'} />
    </Wrapper>);
  }
}
