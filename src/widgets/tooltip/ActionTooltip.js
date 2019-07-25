import React from 'react';
import { Tooltip, Theme, Button, Input } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
import { Popconfirm } from '../popconfirm/ActionPopconfirm';

const Direction = styled(Button)``;
const Wrapper = styled.div``;
const PopWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export default class ActionTooltip extends React.Component<any, any> {
  render() {
    const text = 'this is title ';
    return (
      <Wrapper>
        <PopWrapper>
          <Tooltip
            title={text}
            action={'click'}
            placement="top"
          >
            <Direction type="primary">鼠标点击</Direction>
          </Tooltip>
        </PopWrapper>
        <PopWrapper>
          <Tooltip
            title={text}
            action={'hover'}
            placement="top"
          >
            <Direction type="primary">鼠标移入</Direction>
          </Tooltip>
        </PopWrapper>
        <PopWrapper>
        <Tooltip
          title={text}
          action={'focus'}
          placement="top"
        >
          <Input placeholder={'聚焦弹出'} />
        </Tooltip>
      </PopWrapper>
      </Wrapper>
    );
  }
}
