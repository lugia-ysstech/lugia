import React from "react";
import { TimeLine } from "@lugia/lugia-web";
import styled from "styled-components";
const TimeLineItem = TimeLine.TimeLineItem;
const Wrapper = styled.div`
  display: inline-block;
`;
export default class DescriptionTimeLine extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <TimeLine>
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
