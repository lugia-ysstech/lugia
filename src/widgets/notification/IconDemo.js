import React from 'react';
import {Button,notification} from '@lugia/lugia-web';

const text = {
  info: {
    title: '恭喜！成功完成任务！',
    desc: '您今天的任务圆满完成，再接再厉。'
  },
  success: {
    title: '恭喜！成功完成任务！',
    desc: '您今天的任务圆满完成，再接再厉。'
  },
  error: {
    title: '注意！程序发生错误！',
    desc: '程序有问题，注意一下。'
  },
  warning: {
    title: '警告！可能会导致程序错误！',
    desc: '您在使用以下操作，程序会发生错误。'
  }
};

export default class NotificationDemo extends React.Component {
    statusOpen = type => {
        notification[type]({ title: text[type].title, description: text[type].desc });
    };
    customIconOpen = icon => {
        notification.open({ title: '自定义图标！', description: '可根据需要自定义图标。', icon });
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
