import React from 'react';
import {Button,notification} from '@lugia/lugia-web';

export default class NotificationDemo extends React.Component {
    statusOpen = type => {
        notification[type]({ title: '今天天气很好！', description: '因为今天的太阳很大。' });
    };
    customIconOpen = icon => {
        notification.open({ title: '今天天气很好！', description: '因为今天的太阳很大。', icon });
    };
    render() {
        return (
            <div>
                <Button onClick={() => this.statusOpen('info')}>info</Button>&nbsp;&nbsp;
                <Button onClick={() => this.statusOpen('success')}>success</Button>&nbsp;&nbsp;
                <Button onClick={() => this.statusOpen('error')}>error</Button>&nbsp;&nbsp;
                <Button onClick={() => this.statusOpen('warning')}>warning</Button>&nbsp;&nbsp;
                <Button onClick={() => this.customIconOpen('lugia-icon-reminder_check_circle')}>
                    自定义图标
                </Button>
            </div>
        );
    }
}
