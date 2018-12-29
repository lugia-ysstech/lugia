import React from 'react';
import {Button,notification} from '@lugia/lugia-web';

export default class NotificationDemo extends React.Component {
    placementOpen = placement => {
        notification.open({
            icon: 'lugia-icon-reminder_check_circle',
            title: '今天天气很好！',
            description: '因为今天的太阳很大。',
            placement,
        });
    };
    render() {
        return (
            <div>
                <Button onClick={() => this.placementOpen('bottomLeft')}>
                    bottomLeft
                </Button>&nbsp;&nbsp;
                <Button onClick={() => this.placementOpen('bottomRight')}>
                    bottomRight
                </Button>&nbsp;&nbsp;
                <Button onClick={() => this.placementOpen('topLeft')}>topLeft</Button>
            </div>
        );
    }
}
