import * as React from 'react';
import {BackTop} from '@lugia/lugia-web';

export default class BackTopDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <BackTop />
                <span>滚动浏览器可查看 BackTop</span>
            </div>
        );
    }
}
