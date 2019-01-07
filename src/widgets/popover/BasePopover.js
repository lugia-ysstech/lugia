import React from 'react';
import { Popover, Theme, Button } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';

const Direction = styled(Button)``;
const Wrapper = styled.div`
  margin: 100px;
`;
export default class BasePopover extends React.Component<any, any> {
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
        <Theme config={config}>
          <div style={{ marginLeft: 50, whiteSpace: 'nowrap' }}>
            <Popover placement="topLeft" title={text} action={'click'}>
              <Direction type="primary">TL</Direction>
            </Popover>
            <Popover
              placement="top"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">Top</Direction>
            </Popover>
            <Popover
              placement="topRight"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">TR</Direction>
            </Popover>
          </div>
          <div style={{ width: 45, float: 'left' }}>
            <Popover
              placement="leftTop"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">LT</Direction>
            </Popover>
            <Popover
              placement="left"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">Left</Direction>
            </Popover>
            <Popover
              placement="leftBottom"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">LB</Direction>
            </Popover>
          </div>
          <div style={{ width: 50, marginLeft: 200 }}>
            <Popover
              placement="rightTop"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">RT</Direction>
            </Popover>
            <Popover
              placement="right"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">Right</Direction>
            </Popover>
            <Popover
              placement="rightBottom"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">RB</Direction>
            </Popover>
          </div>
          <div style={{ marginLeft: 50, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popover
              placement="bottomLeft"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">BL</Direction>
            </Popover>
            <Popover
              placement="bottom"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">Bottom</Direction>
            </Popover>
            <Popover
              placement="bottomRight"
              title={text}
              description={[<div>{description}</div>, <div>{description}</div>]}
            >
              <Direction type="primary">BR</Direction>
            </Popover>
          </div>
        </Theme>
      </Wrapper>
    );
  }
}
