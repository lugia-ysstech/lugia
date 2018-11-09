/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import {BackTop ,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
// import Widget from '../consts/index';

const Demo = styled.div`
  & > div > div {
    bottom: ${props => 50 + props.cur * 50}px;
  }
`;
const DemoBack = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
`;
export default class BackTopDemo extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.BackTop]: {
        color: 'red',
        backgroundColor: 'orange',
      },
    };
    console.log('render',Demo);
    return (
      <div style={{ height: '1600px' }}>
        <BackTop />
        <Demo cur={1}>
          <BackTop>
            <DemoBack>UP</DemoBack>
          </BackTop>
        </Demo>
        <Demo cur={2}>
          <Theme >
            <BackTop />
          </Theme>
        </Demo>
      </div>
    );
  }
}
