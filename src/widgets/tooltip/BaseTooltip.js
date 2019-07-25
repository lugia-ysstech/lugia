import React from "react";
import { Tooltip, Theme, Button } from "@lugia/lugia-web";
import styled from "styled-components";
const buttonWidth = 80;
const DirectionButton = styled(Button)`
  width: ${buttonWidth}px;
`;
const ToolTipBaseWrapper = styled.div`
  display: inline-block;
`;
const DirectionTopWrapper = styled.div`
  margin-left: ${buttonWidth}px;
  white-space: nowrap;
  display: inline-block;
`;
const DirectionLeftWrapper = styled.div`
  width: ${buttonWidth}px;
  position: absolute;
`;
const DirectionRightWrapper = styled.div`
  width: ${buttonWidth}px;
  margin-left: ${buttonWidth * 4 + 24}px;
`;
const DirectionBottomWrapper = styled.div`
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
export default class BaseTooltip extends React.Component<any, any> {
  render() {
    const text = <span>prompt text</span>;
    return (
      <div>
        <DirectionTopWrapper>
          <ToolTipHWrapper>
            <Tooltip placement="topLeft" title={text}>
              <DirectionButton type="primary">TL</DirectionButton>
            </Tooltip>
          </ToolTipHWrapper>
          <ToolTipHWrapper>
            <Tooltip placement="top" title={text}>
              <DirectionButton type="primary">Top</DirectionButton>
            </Tooltip>
          </ToolTipHWrapper>
          <ToolTipHWrapper>
            <Tooltip placement="topRight" title={text}>
              <DirectionButton type="primary">TR</DirectionButton>
            </Tooltip>
          </ToolTipHWrapper>
        </DirectionTopWrapper>
        <DirectionLeftWrapper>
          <ToolTipVWrapper>
            <Tooltip placement="leftTop" title={text}>
              <DirectionButton type="primary">LT</DirectionButton>
            </Tooltip>
          </ToolTipVWrapper>
          <ToolTipVWrapper>
            <Tooltip placement="left" title={text}>
              <DirectionButton type="primary">Left</DirectionButton>
            </Tooltip>
          </ToolTipVWrapper>
          <ToolTipVWrapper>
            <Tooltip placement="leftBottom" title={text}>
              <DirectionButton type="primary">LB</DirectionButton>
            </Tooltip>
          </ToolTipVWrapper>
        </DirectionLeftWrapper>
        <DirectionRightWrapper>
          <ToolTipVWrapper>
            <Tooltip placement="rightTop" title={text}>
              <DirectionButton type="primary">RT</DirectionButton>
            </Tooltip>
          </ToolTipVWrapper>
          <ToolTipVWrapper>
            <Tooltip placement="right" title={text}>
              <DirectionButton type="primary">Right</DirectionButton>
            </Tooltip>
          </ToolTipVWrapper>
          <ToolTipVWrapper>
            <Tooltip placement="rightBottom" title={text}>
              <DirectionButton type="primary">RB</DirectionButton>
            </Tooltip>
          </ToolTipVWrapper>
        </DirectionRightWrapper>
        <DirectionBottomWrapper>
          <ToolTipHWrapper>
            <Tooltip placement="bottomLeft" title={text}>
              <DirectionButton type="primary">BL</DirectionButton>
            </Tooltip>
          </ToolTipHWrapper>
          <ToolTipHWrapper>
            <Tooltip placement="bottom" title={text}>
              <DirectionButton type="primary">Bottom</DirectionButton>
            </Tooltip>
          </ToolTipHWrapper>
          <ToolTipHWrapper>
            <Tooltip placement="bottomRight" title={text}>
              <DirectionButton type="primary">BR</DirectionButton>
            </Tooltip>
          </ToolTipHWrapper>
        </DirectionBottomWrapper>
      </div>
    );
  }
}
