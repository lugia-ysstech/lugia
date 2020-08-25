import React from "react";
import styled from "styled-components";

const HoverDecorateWrap = styled.div`
  width: 30px;
  height: 25px;
  position: absolute;
  top: ${props => (props.y ? props.y : 0)}px;
  left: ${props => (props.x ? props.x : 0)}px;
`;

const CommonDot = styled.div`
  border-radius: 4px;
  background: ${props => (props.isDev ? "#6FBDFF" : "#4d68ff")};
  opacity: 0.3;
  position: absolute;
`;
const BigDot = styled(CommonDot)`
  width: 11px;
  height: 11px;
  right: 0px;
  bottom: 4px;
`;
const BigDotDown = styled(BigDot)`
  top: 4px;
  left: 8px;
`;
const MiddleDot = styled(CommonDot)`
  width: 8px;
  height: 8px;
  left: 0px;
  top: 0px;
`;
const MiddleDotDown = styled(MiddleDot)`
  left: 22px;
  top: 16px;
`;
const SmallDot = styled(CommonDot)`
  width: 5px;
  height: 5px;
  left: 8px;
  bottom: 4px;
`;
const SmallDotDown = styled(SmallDot)`
  left: 0;
  bottom: 6px;
`;

export const HoverDecorateUp = ({ x, y, isDev }) => {
  return (
    <HoverDecorateWrap x={x} y={y}>
      <BigDot isDev={isDev} />
      <MiddleDot isDev={isDev} />
      <SmallDot isDev={isDev} />
    </HoverDecorateWrap>
  );
};
export const HoverDecorateDown = ({ x, y, isDev }) => {
  return (
    <HoverDecorateWrap x={x} y={y}>
      <BigDotDown isDev={isDev} />
      <MiddleDotDown isDev={isDev} />
      <SmallDotDown isDev={isDev} />
    </HoverDecorateWrap>
  );
};
