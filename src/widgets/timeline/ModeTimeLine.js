/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { timeLine, Theme, Button, Icon } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
const TimeLine = timeLine.TimeLine;
const TimeLineItem = timeLine.TimeLineItem;
const Wrapper = styled.div`
  text-align: left;
  margin: 50px;
`;
export default class ModeTimeLine extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <Wrapper>
        <p> 有详情描述 简洁样式</p>
        <br />
        <TimeLine>
          <TimeLineItem time="2018-01-01" description={"description111"} />
          <TimeLineItem time="2018-01-02" description={"description222"} />
          <TimeLineItem time="2018-01-03" description={"description333"} />
          <TimeLineItem time="2018-01-04" description={"description444"} />
          <TimeLineItem time="2018-01-05" description={"description555"} />
        </TimeLine>
        <p> 左右分散排列 有详情描述 简洁样式</p>
        <br />
        <TimeLine mode={"alternate"}>
          <TimeLineItem time="2018-01-01" description={"description111"} />
          <TimeLineItem time="2018-01-02" description={"description222"} />
          <TimeLineItem time="2018-01-03" description={"description333"} />
          <TimeLineItem time="2018-01-04" description={"description444"} />
          <TimeLineItem time="2018-01-05" description={"description555"} />
        </TimeLine>
      </Wrapper>
    );
  }
}
