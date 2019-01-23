import React from 'react';
import {Button,notification} from '@lugia/lugia-web';

export default class NotificationDemo extends React.Component {
    placementOpen = placement => {
        notification.open({
            icon: 'lugia-icon-reminder_check_circle',
            title: '恭喜！成功完成任务！',
            description: '您今天的任务圆满完成，再接再厉。',
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
