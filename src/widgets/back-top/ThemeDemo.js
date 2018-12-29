import * as React from 'react';
import {BackTop,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class BackTopDemo extends React.Component {

    render() {
        const view = {
            [Widget.BackTop]: {
                color: 'red',
                backgroundColor: 'orange',
            },
        };
        return (
            <div>
                <Theme config={view}>
                    <BackTop />
                </Theme>
                <span>滚动浏览器可查看 BackTop</span>
            </div>
        );
    }
}
