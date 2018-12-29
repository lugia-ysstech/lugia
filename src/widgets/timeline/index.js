/**
 *
 * create by liangguodong
 *
 */
import * as React from "react";
import { timeLine, Theme, Button, Icon, tabs } from "@lugia/lugia-web";
import BaseTimeLine from "./BaseTimeLine";
import ModeTimeLine from "./ModeTimeLine";
import PendingTimeline from "./PendingTimeline";
import ReverseTimeLine from "./ReverseTimeLine";
import StatusTimeLine from "./StatusTimeLine";
import TypeTimeLine from "./TypeTimeLine";

export default () => {
  return (
    <div>
      <BaseTimeLine />
      <br />
      <ModeTimeLine />
      <br />
      <StatusTimeLine />
      <br />
      <TypeTimeLine />
      <br /> <PendingTimeline />
      <br />
      <ReverseTimeLine />
      <br />
    </div>
  );
};
