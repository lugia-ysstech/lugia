import React from 'react';
import { AmountInput } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
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
    <p>small size</p>
    <AmountInput size={'small'} placeholder={'请填写金额'} />
    <p>default size</p>
    <AmountInput placeholder={'请填写金额'} />
    <p>large size</p>
    <AmountInput size={'large'} placeholder={'请填写金额'} />
    </Wrapper>);
  }
}
