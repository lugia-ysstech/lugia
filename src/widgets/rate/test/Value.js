
import React from 'react';
import { Rate } from '@lugia/lugia-web';
import styled from 'styled-components';
const TextBox = styled.span`
  font-size: 14px;
  color: #333;
`;
export default class Value extends React.Component<any, any> {
  state={
    value:0
  };
  render() {
    return (
      <div>
      <Rate  max={10} value={3} onClick={this.onClick}/>
      </div>
    );
  }
  onClick=(value)=>{
    this.setState({value})
  }
}
