import React from 'react';
import { Popconfirm, Theme, Button } from '@lugia/lugia-web';
import styled from 'styled-components';

const Direction = styled(Button)``;
const Wrapper = styled.div`
  margin: 100px;
`;
export default class BasePopconfirm extends React.Component<any, any> {
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
        <div style={{ marginLeft: 50, whiteSpace: 'nowrap' }}>
          <Popconfirm placement="topLeft" title={text} action={'click'}>
            <Direction type="primary">TL</Direction>
          </Popconfirm>
          <Popconfirm placement="top" title={text}>
            <Direction type="primary">Top</Direction>
          </Popconfirm>
          <Popconfirm placement="topRight" title={text}>
            <Direction type="primary">TR</Direction>
          </Popconfirm>
        </div>
        <div style={{ width: 70, float: 'left' }}>
          <Popconfirm placement="leftTop" title={text}>
            <Direction type="primary">LT</Direction>
          </Popconfirm>
          <Popconfirm placement="left" title={text}>
            <Direction type="primary">Left</Direction>
          </Popconfirm>
          <Popconfirm placement="leftBottom" title={text}>
            <Direction type="primary">LB</Direction>
          </Popconfirm>
        </div>
        <div style={{ width: 70, marginLeft: 200 }}>
          <Popconfirm placement="rightTop" title={text}>
            <Direction type="primary">RT</Direction>
          </Popconfirm>
          <Popconfirm placement="right" title={text}>
            <Direction type="primary">Right</Direction>
          </Popconfirm>
          <Popconfirm placement="rightBottom" title={text}>
            <Direction type="primary">RB</Direction>
          </Popconfirm>
        </div>
        <div style={{ marginLeft: 50, clear: 'both', whiteSpace: 'nowrap' }}>
          <Popconfirm placement="bottomLeft" title={text}>
            <Direction type="primary">BL</Direction>
          </Popconfirm>
          <Popconfirm placement="bottom" title={text}>
            <Direction type="primary">Bottom</Direction>
          </Popconfirm>
          <Popconfirm placement="bottomRight" title={text}>
            <Direction type="primary">BR</Direction>
          </Popconfirm>
        </div>
      </Wrapper>
    );
  }
}
