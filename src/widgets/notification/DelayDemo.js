import React from 'react';
import {Button,notification} from '@lugia/lugia-web';

export default class NotificationDemo extends React.Component {
    durationOpen = duration => {
        notification.open({ title: '今天天气很好！', description: '因为今天的太阳很大。', duration });
    };
    render() {
        return (
            <div>
                <Button onClick={() => this.durationOpen(6)}>自定义延时关闭</Button>
                &nbsp;&nbsp;
                <Button onClick={() => this.durationOpen(0)}>自定义延时关闭</Button>
            </div>
        );
    }
}
