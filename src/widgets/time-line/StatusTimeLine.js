import React from "react";
import { TimeLine } from "@lugia/lugia-web";
import styled from "styled-components";
const TimeLineItem = TimeLine.TimeLineItem;
const Wrapper = styled.div`
  text-align: left;
`;
export default class StatusTimeLine extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <br />
        <TimeLine>
          <TimeLineItem time="2018-01-01" status={"success"} />
          <TimeLineItem time="2018-01-02" />
          <TimeLineItem time="2018-01-03" status={"failed"} />
          <TimeLineItem time="2018-01-04" />
          <TimeLineItem time="2018-01-05" />
        </TimeLine>
      </Wrapper>
    );
  }
}
