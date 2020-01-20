import React from "react";
import styled from "styled-components";
import { TimeLine, Theme, Button, Icon, tabs } from "@lugia/lugia-web";
const TimeLineItem = TimeLine.TimeLineItem;

const Wrapper = styled.div`
  margin-right: 150px;
  display: inline-block;
`;
export default class PendingTimeline extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Wrapper>
          <TimeLine pending={true}>
            <TimeLineItem time="2018-01-01" description={"description111"} />
            <TimeLineItem time="2018-01-02" description={"description222"} />
            <TimeLineItem time="2018-01-03" description={"description333"} />
            <TimeLineItem time="2018-01-04" description={"description444"} />
            <TimeLineItem time="2018-01-05" description={"description555"} />
          </TimeLine>
        </Wrapper>
        <Wrapper>
          <TimeLine
            pending={true}
            pendingDot={<Icon iconClass={"lugia-icon-financial_abort"} />}
          >
            <TimeLineItem time="2018-01-01" description={"description111"} />
            <TimeLineItem time="2018-01-02" description={"description222"} />
            <TimeLineItem time="2018-01-03" description={"description333"} />
            <TimeLineItem time="2018-01-04" description={"description444"} />
            <TimeLineItem time="2018-01-05" description={"description555"} />
          </TimeLine>
        </Wrapper>
      </div>
    );
  }
}
