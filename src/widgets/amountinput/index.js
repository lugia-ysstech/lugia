/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import {AmountInput , Theme } from '@lugia/lugia-web';
import styled from 'styled-components';

class LimitAmountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
    this.props.onChange({ newValue: value });
  };

  render() {
    return <AmountInput value={this.state.value} onChange={this.onChange} />;
  }
}
class DefaultValueAmountInput extends React.Component<any, any> {
  render() {
    return <AmountInput defaultValue={'123456'} onChange={this.props.onChange} />;
  }
}
const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
`;
export default () => {
  const view = {
    // [Widget.AmountInput]: {
    //   width: 350,
    //   margin: 10,
    // },
    register: {
      width: 100,
    },
  };
  const onChange = (cmpName: string) => (value: any) => {};
  return (
    <div>
      <Wrapper>
        <p>formatter AmountInput</p>
        <AmountInput placeholder={'请填写金额'} />
        <p>default AmountInput</p>
        <AmountInput placeholder={'请填写金额'} />
        <p>禁用状态 </p>
        <AmountInput size={'default'} disabled={true} />
      </Wrapper>
      <Wrapper>
        <Theme config={view}>
          <p>small size</p>
          <AmountInput size={'small'} placeholder={'请填写金额'} />
          <p>default size</p>
          <AmountInput placeholder={'请填写金额'} />
          <p>large size</p>
          <AmountInput size={'large'} placeholder={'请填写金额'} />
        </Theme>
      </Wrapper>
      <Wrapper>
        <p>受限Input</p>
        <LimitAmountInput onChange={onChange('limit')} />
        <p>有默认值的 受限Input</p>
        <DefaultValueAmountInput value={'123456'} onChange={onChange('limit')} />
      </Wrapper>
      <Wrapper>
        <p>amountPrefix: '¥' transform: false </p>
        <AmountInput amountPrefix="¥" transform={false} />
        <p>amountPrefix: '$' transform: false </p>
        <AmountInput amountPrefix="$" transform={false} />
      </Wrapper>
    </div>
  );
};
