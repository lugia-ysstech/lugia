/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import {Tooltip,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';

const buttonWidth = 70;
const text = <span>prompt text</span>;
const Content = styled.div`
  margin: 100px;
`;
const Button = styled.button`
  width: ${buttonWidth}px;
`;
export default () => {
  const config = {
    [Widget.Tooltip]: {
      color: '#fef0ef',
      fontColor: '#000',
    },
  };
  return (
    <Theme config={config}>
      <Content className="demo">
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <Tooltip placement="topLeft" title={text}>
            <Button>TL</Button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title={text}>
            <Button>TR</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Tooltip placement="leftTop" title={text}>
            <Button>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <Button>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <Button>LB</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
          <Tooltip placement="rightTop" title={text}>
            <Button>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <Button>RB</Button>
          </Tooltip>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <Tooltip placement="bottomLeft" title={text}>
            <Button>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <Button>BR</Button>
          </Tooltip>
        </div>
      </Content>
    </Theme>
  );
};
