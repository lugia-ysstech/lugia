import React from 'react';
import { Input } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
`;
const InputWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export default class SizeNumberInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    return (
      <Wrapper>
        <InputWrapper>
          <Input size={'small'} placeholder={'请填写金额'} />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder={'请填写金额'} />
        </InputWrapper>
        <InputWrapper>
          <Input size={'large'} placeholder={'请填写金额'} />
        </InputWrapper>
      </Wrapper>
    );
  }
}
