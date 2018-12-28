/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { timeLine, Theme, Button, Icon } from "@lugia/lugia-web";
const TimeLine = timeLine.TimeLine;
const TimeLineItem = timeLine.TimeLineItem;
export default class ReverseTimeLine extends React.Component<Object, Object> {
  state = {
    reverse: false
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div style={{ margin: 30 }}>
        <Button type="primary" onClick={this.handleClick}>
          点击反转
        </Button>
        <TimeLine reverse={this.state.reverse}>
          <TimeLineItem time="2018-01-01" description={"description111"} />
          <TimeLineItem time="2018-01-02" description={"description222"} />
          <TimeLineItem time="2018-01-03" description={"description333"} />
          <TimeLineItem time="2018-01-04" description={"description444"} />
          <TimeLineItem time="2018-01-05" description={"description555"} />
        </TimeLine>
      </div>
    );
  }
}
