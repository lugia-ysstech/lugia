import React from 'react';
import { TimeLine, Theme, Button, Icon, tabs } from '@lugia/lugia-web';
import styled from 'styled-components';
const TimeLineItem = TimeLine.TimeLineItem;
const Wrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
  display: inline-block;
`;
export default class BaseTimeLine extends React.Component<any, any> {
  render() {
    const view = {
      long: {
        height: 100
      },
      short: {
        height: 20
      }
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <br />
          <TimeLine>
            <TimeLineItem viewClass={'long'} time="2018-01-01" />
            <TimeLineItem time="2018-01-02" />
            <TimeLineItem time="2018-01-03" />
            <TimeLineItem viewClass={'short'} time="2018-01-04" />
            <TimeLineItem time="2018-01-05" />
          </TimeLine>
        </Wrapper>
        <Wrapper>
          <br />
          <TimeLine>
            <TimeLineItem time="2018-01-01" description={'description111'} />
            <TimeLineItem time="2018-01-02" description={'description222'} />
            <TimeLineItem time="2018-01-03" description={'description333'} />
            <TimeLineItem time="2018-01-04" description={'description444'} />
            <TimeLineItem time="2018-01-05" description={'description555'} />
          </TimeLine>
        </Wrapper>
        <Wrapper>
          <br />
          <TimeLine mode={'alternate'}>
            <TimeLineItem time="2018-01-01" />
            <TimeLineItem time="2018-01-02" />
            <TimeLineItem time="2018-01-03" />
            <TimeLineItem time="2018-01-04" />
            <TimeLineItem time="2018-01-05" />
          </TimeLine>
        </Wrapper>
      </Theme>
    );
  }
}
