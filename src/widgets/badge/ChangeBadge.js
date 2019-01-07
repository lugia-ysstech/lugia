import React from 'react';
import { Badge, Theme,Icon } from '@lugia/lugia-web';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
  text-align: center;
  padding: 20px;
`;
const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  margin-left: 10px;
`;
export default class ChangeBadge extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  click = type => () => {
    const count = type === 'plus' ? this.state.count + 1 : this.state.count - 1;
    this.setState({ count });
  };
  render () {
    return (
      <Wrapper>
        <Badge count={this.state.count} showZero overflowCount={9}>
          <Box />
        </Badge>
        <Icon
          style={{ fontSize: '2em' }}
          iconClass="lugia-icon-reminder_plus_square_o"
          onClick={this.click('plus')}
        />
        <Icon
          iconClass="lugia-icon-reminder_minus_square_o"
          onClick={this.click('minus')}
        />
      </Wrapper>);
  }
}
