import React from 'react';
import {Button,notification} from '@lugia/lugia-web';

export default class NotificationDemo extends React.Component {
    defaultOpen = () => {
        notification.open({ title: '恭喜！成功完成任务', description: '您今天的任务圆满完成，再接再厉。' });
    };
    render() {
        return (
            <Button onClick={this.defaultOpen}>基本用法</Button>
        );
    }
}
