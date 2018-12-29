import React from 'react';
import {Button, message} from '@lugia/lugia-web';

export default class MessageDemo extends React.Component {
    showMessage = type => () => {
        message[type]('消息提示', 2);
    };
    render() {
        return (
            <div>
                <Button onClick={this.showMessage('success')}>成功提示</Button>
                <br />
                <br />
                <Button onClick={this.showMessage('error')}>错误提示</Button>
                <br />
                <br />
                <Button onClick={this.showMessage('warning')}>警告提示</Button>
                <br />
                <br />
                <Button onClick={this.showMessage('loading')}>加载提示</Button>
            </div>
        );
    }
}
