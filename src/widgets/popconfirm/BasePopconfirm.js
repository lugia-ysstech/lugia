import React from 'react';
import { Popconfirm, Theme, Button } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';

const Wrapper = styled.div`
`;
const buttonWidth = 80;
const DirectionButton = styled(Button)`
  width: ${buttonWidth}px;
`;
const ToolTipBaseWrapper = styled.div`
  display: inline-block;
`;
const DirectionButtonButtonTopWrapper = styled.div`
  margin-left: ${buttonWidth}px;
  white-space: nowrap;
  display: inline-block;
`;
const DirectionButtonButtonLeftWrapper = styled.div`
  width: ${buttonWidth}px;
  position: absolute;
`;
const DirectionButtonButtonRightWrapper = styled.div`
  width: ${buttonWidth}px;
  margin-left: ${buttonWidth * 4 + 24}px;
`;
const DirectionButtonButtonBottomWrapper = styled.div`
  margin-left: ${buttonWidth}px;
  white-space: nowrap;
  display: inline-block;
`;
const ToolTipHWrapper = styled(ToolTipBaseWrapper)`
  margin-right: 10px;
`;
const ToolTipVWrapper = styled(ToolTipBaseWrapper)`
  margin-top: 10px;
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
    const config = {
      [Widget.Button]: {
        Container: {
          normal: {
            width: buttonWidth
          }
        }
      }
    };
    return (
      <Wrapper>
        <Theme config={config}>
          <DirectionButtonButtonTopWrapper>
            <ToolTipHWrapper>
              <Popconfirm placement="topLeft" title={text} action={'click'}>
                <DirectionButton type="primary">TL</DirectionButton>
              </Popconfirm>
            </ToolTipHWrapper>
            <ToolTipHWrapper>
              <Popconfirm placement="top" title={text}>
                <DirectionButton type="primary">Top</DirectionButton>
              </Popconfirm>
            </ToolTipHWrapper>
            <ToolTipHWrapper>
              <Popconfirm placement="topRight" title={text}>
                <DirectionButton type="primary">TR</DirectionButton>
              </Popconfirm>
            </ToolTipHWrapper>
          </DirectionButtonButtonTopWrapper>
          <DirectionButtonButtonLeftWrapper>
            <ToolTipVWrapper>
              <Popconfirm placement="leftTop" title={text}>
                <DirectionButton type="primary">LT</DirectionButton>
              </Popconfirm>
            </ToolTipVWrapper>
            <ToolTipVWrapper>
              <Popconfirm placement="left" title={text}>
                <DirectionButton type="primary">Left</DirectionButton>
              </Popconfirm>
            </ToolTipVWrapper>
            <ToolTipVWrapper>
              <Popconfirm placement="leftBottom" title={text}>
                <DirectionButton type="primary">LB</DirectionButton>
              </Popconfirm>
            </ToolTipVWrapper>
          </DirectionButtonButtonLeftWrapper>
          <DirectionButtonButtonRightWrapper>
            <ToolTipVWrapper>
              <Popconfirm placement="rightTop" title={text}>
                <DirectionButton type="primary">RT</DirectionButton>
              </Popconfirm>
            </ToolTipVWrapper>
            <ToolTipVWrapper>
              <Popconfirm placement="right" title={text}>
                <DirectionButton type="primary">Right</DirectionButton>
              </Popconfirm>
            </ToolTipVWrapper>
            <ToolTipVWrapper>
              <Popconfirm placement="rightBottom" title={text}>
                <DirectionButton type="primary">RB</DirectionButton>
              </Popconfirm>
            </ToolTipVWrapper>
          </DirectionButtonButtonRightWrapper>
          <DirectionButtonButtonBottomWrapper>
            <ToolTipHWrapper>
              <Popconfirm placement="bottomLeft" title={text}>
                <DirectionButton type="primary">BL</DirectionButton>
              </Popconfirm>
            </ToolTipHWrapper>
            <ToolTipHWrapper>
              <Popconfirm placement="bottom" title={text}>
                <DirectionButton type="primary">Bottom</DirectionButton>
              </Popconfirm>
            </ToolTipHWrapper>
            <ToolTipHWrapper>
              <Popconfirm placement="bottomRight" title={text}>
                <DirectionButton type="primary">BR</DirectionButton>
              </Popconfirm>
            </ToolTipHWrapper>
          </DirectionButtonButtonBottomWrapper>
        </Theme>
      </Wrapper>
    );
  }
}
