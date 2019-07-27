import React from "react";
import { Popover, Theme, Button } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";

const Wrapper = styled.div``;
const buttonWidth = 80;
const DirectionButton = styled(Button)`
  width: ${buttonWidth}px;
`;
const ToolTipBaseWrapper = styled.div`
  display: inline-block;
`;
const DirectionButtonTopWrapper = styled.div`
  margin-left: ${buttonWidth}px;
  white-space: nowrap;
  display: inline-block;
`;
const DirectionButtonLeftWrapper = styled.div`
  width: ${buttonWidth}px;
  position: absolute;
`;
const DirectionButtonRightWrapper = styled.div`
  width: ${buttonWidth}px;
  margin-left: ${buttonWidth * 4 + 24}px;
`;
const DirectionButtonBottomWrapper = styled.div`
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
export default class BasePopover extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    const config = {
      [Widget.Button]: {
        Container: {
          normal: {
            width: buttonWidth
          }
        }
      }
    };
    const text = "this is title ";
    const description = "this is description";
    return (
      <Wrapper>
        <Theme config={config}>
          <DirectionButtonTopWrapper>
            <ToolTipHWrapper>
              <Popover placement="topLeft" title={text} action={"click"}>
                <DirectionButton type="primary">TL</DirectionButton>
              </Popover>
            </ToolTipHWrapper>
            <ToolTipHWrapper>
              <Popover
                placement="top"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">Top</DirectionButton>
              </Popover>
            </ToolTipHWrapper>
            <ToolTipHWrapper>
              <Popover
                placement="topRight"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">TR</DirectionButton>
              </Popover>
            </ToolTipHWrapper>
          </DirectionButtonTopWrapper>
          <DirectionButtonLeftWrapper>
            <ToolTipVWrapper>
              <Popover
                placement="leftTop"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">LT</DirectionButton>
              </Popover>
            </ToolTipVWrapper>
            <ToolTipVWrapper>
              <Popover
                placement="left"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">Left</DirectionButton>
              </Popover>
            </ToolTipVWrapper>
            <ToolTipVWrapper>
              <Popover
                placement="leftBottom"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">LB</DirectionButton>
              </Popover>
            </ToolTipVWrapper>
          </DirectionButtonLeftWrapper>
          <DirectionButtonRightWrapper>
            <ToolTipVWrapper>
              <Popover
                placement="rightTop"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">RT</DirectionButton>
              </Popover>
            </ToolTipVWrapper>
            <ToolTipVWrapper>
              <Popover
                placement="right"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">Right</DirectionButton>
              </Popover>
            </ToolTipVWrapper>
            <ToolTipVWrapper>
              <Popover
                placement="rightBottom"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">RB</DirectionButton>
              </Popover>
            </ToolTipVWrapper>
          </DirectionButtonRightWrapper>
          <DirectionButtonBottomWrapper>
            <ToolTipHWrapper>
              <Popover
                placement="bottomLeft"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">BL</DirectionButton>
              </Popover>
            </ToolTipHWrapper>
            <ToolTipHWrapper>
              <Popover
                placement="bottom"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">Bottom</DirectionButton>
              </Popover>
            </ToolTipHWrapper>
            <ToolTipHWrapper>
              <Popover
                placement="bottomRight"
                title={text}
                description={[
                  <div>{description}</div>,
                  <div>{description}</div>
                ]}
              >
                <DirectionButton type="primary">BR</DirectionButton>
              </Popover>
            </ToolTipHWrapper>
          </DirectionButtonBottomWrapper>
        </Theme>
      </Wrapper>
    );
  }
}
