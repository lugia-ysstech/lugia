import React from 'react';
import {Button,notification} from '@lugia/lugia-web';

export default class NotificationDemo extends React.Component {
    defaultOpen = () => {
        notification.open({ title: '今天天气很好！', description: '因为今天的太阳很大。' });
    };
    render() {
        return (
            <Button onClick={this.defaultOpen}>基本用法</Button>
        );
    }
}
