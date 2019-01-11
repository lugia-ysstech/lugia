import React from 'react';
import { Popconfirm, Theme, Button, Input } from '@lugia/lugia-web';
import styled from 'styled-components';

const Direction = styled(Button)``;
const Wrapper = styled.div`
`;
const PopWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export default class ActionPopconfirm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    const text = '确定删除这个选项吗?';
    return (
      <Wrapper>
        <PopWrapper>
          <Popconfirm title={text} action={'focus'}>
            <Input placeholder={'聚焦弹出'} />
          </Popconfirm>
        </PopWrapper>
        <PopWrapper>
          <Popconfirm title={text} action={'hover'}>
            <Direction type="primary"> 鼠标移入</Direction>
          </Popconfirm>
        </PopWrapper>
        <PopWrapper>
          <Popconfirm
            title={text}
            action={'click'}
            cancelText="No"
            okText="yes"
            okType="danger"
          >
            <Direction type="primary">鼠标点击</Direction>
          </Popconfirm>
        </PopWrapper>
      </Wrapper>
    );
  }
}
