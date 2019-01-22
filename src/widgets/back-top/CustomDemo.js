import * as React from 'react';
import {BackTop} from '@lugia/lugia-web';
import styled from 'styled-components';

const DemoBack = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
`;
const Demo = styled.div`
  & > div > div {
    bottom: 100px;
  }
`;

export default class BackTopDemo extends React.Component<any, any> {
    render() {
        return (
            <Demo>
              <BackTop visibilityHeight={100}>
                <DemoBack>UP</DemoBack>
              </BackTop>
                <span>滚动浏览器可查看 BackTop</span>
            </Demo>
        );
    }
}
