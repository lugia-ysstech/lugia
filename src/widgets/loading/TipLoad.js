import React from 'react';
import { Loading } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem=styled.span`
  display:inline-block;
  padding:0 10px 10px 0;
`;
export default class BaseLoad extends React.Component {
  render() {
    return(
      <Loading tip={'加载中...'}/>
    );
  }
}
