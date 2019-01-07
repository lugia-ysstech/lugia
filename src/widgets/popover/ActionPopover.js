import React from 'react';
import { Popover, Theme, Button, Input } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const Direction = styled(Button)``;
const Wrapper = styled.div`
  margin: 100px;
`;
export default class ActionPopover extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    const config = {
      [Widget.Popover]: {
        color: '#fef0ef',
        fontColor: '#000'
      }
    };
    const text = 'this is title ';
    const description = 'this is description';
    return (
      <Wrapper>
        <Popover
          title={text}
          action={'focus'}
          description={[<div>{description}</div>, <div>{description}</div>]}
        >
          <Input placeholder={'聚焦弹出'} />
        </Popover>
        <Popover
          title={text}
          action={'hover'}
          description={[<div>{description}</div>, <div>{description}</div>]}
        >
          <Direction> 悬停</Direction>
        </Popover>
        <Popover
          title={text}
          action={'click'}
          description={[<div>{description}</div>, <div>{description}</div>]}
        >
          <Direction>点击</Direction>
        </Popover>
      </Wrapper>
    );
  }
}
