import React from 'react';
import { Input } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
`;

const onChange = cmpName => (value: any) => {};
export default class SizeInput extends React.Component<any, any> {
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
    <Input size={'small'} placeholder={'请填写金额'} />
    <p>default size</p>
    <Input placeholder={'请填写金额'} />
    <p>large size</p>
    <Input size={'large'} placeholder={'请填写金额'} />
    </Wrapper>);
  }
}
