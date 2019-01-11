import React from 'react';
import { TimeLine, Theme, Button, Icon, tabs } from '@lugia/lugia-web';
import styled from 'styled-components';
const TimeLineItem = TimeLine.TimeLineItem;
const Wrapper = styled.div`
  display: inline-block;
`;
export default class BaseTimeLine extends React.Component<any, any> {
  render() {
    const view = {
      long: {
        height: 100,
        width:200
      },
      short: {
        height: 20,
        width:200
      }
      // viewClass={'short'}
    };
    return (
      <Theme config={view}>
          <Wrapper>
            <TimeLine>
              <TimeLineItem  time="2018-01-01" />
              <TimeLineItem time="2018-01-02" />
              <TimeLineItem time="2018-01-03" />
              <TimeLineItem  time="2018-01-04" />
              <TimeLineItem time="2018-01-05" />
            </TimeLine>
          </Wrapper>
      </Theme>
    );
  }
}
