import * as React from 'react';
import {BackTop,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
import styled from 'styled-components';

const Demo = styled.div`
  & > div > div {
    bottom: 150px;
  }
`;

export default class BackTopDemo extends React.Component {
    render() {
        const view = {
            [Widget.BackTop]: {
                color: '#fff',
                backgroundColor: '#4d63ff',
            },
        };
        return (
            <Demo>
                <Theme config={view}>
                    <BackTop visibilityHeight={100} />
                </Theme>
                <span>滚动浏览器可查看 BackTop</span>
            </Demo>
        );
    }
}
