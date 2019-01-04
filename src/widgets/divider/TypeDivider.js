import React from 'react';
import { Divider } from '@lugia/lugia-web';
import styled from 'styled-components';


const Wrapper = styled.div`margin-left: 50px;
`;
export default class TypeDivider extends React.Component<any, any> {

  render () {
    return (
      <Wrapper>
        <Divider content={'solid'} type="horizontal" />
        <br/>
        <Divider dashed={true} content={'dashed'} />
      </Wrapper>);
  }
}
