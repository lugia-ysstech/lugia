/**
 *
 * create by liangguodong on 2018/8/27
 *
 */
import React from "react";
import BaseBadge from "./BaseBadge";
import ShowZeroBadge from "./ShowZeroBadge";
import ColorBadge from "./ColorBadge";
import ClickBadge from "./ClickBadge";
import ChangeBadge from "./ChangeBadge";
import OverFlowBadge from "./OverFlowBadge";

export default () => {
  return (
    <div>
      <BaseBadge></BaseBadge>
      <OverFlowBadge></OverFlowBadge>
      <ClickBadge></ClickBadge>
      <ColorBadge></ColorBadge>
      <ShowZeroBadge></ShowZeroBadge>
      <ChangeBadge></ChangeBadge>
    </div>
  );
};
