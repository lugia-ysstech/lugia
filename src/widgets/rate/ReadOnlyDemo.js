import React from 'react';
import { Rate} from '@lugia/lugia-web';
import styled from 'styled-components';

const TextBox = styled.span`
  font-size: 14px;
  color: #333;
  margin: 0 6px;
`;
export default class RateDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {value:3.5};
  }
  render() {
    const config = {
      count: 5,
      max: 5,
      value: 3.6,
      disabled: true,
      allowHalf: true,
      className: 'cccc',
      onClick: res => {
        this.setStateValue("value",  res.newValue);
      },
      onChange: res => {
        this.setStateValue("value", res.newValue);
      }
    };
    const {value} = this.state;
    return (
      <div>
          <Rate {...config} character="好" />
          <TextBox>{value} 颗星</TextBox>
      </div>
    );
  }
  setStateValue = (target: string, val: number) => {
    this.setState({
      [target]: val
    });
  };
}
