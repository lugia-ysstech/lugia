import React from 'react';
import {Button, message} from '@lugia/lugia-web';

export default class MessageDemo extends React.Component {
    showMessage = () => {
        message.info('普通提示', 5);
    };
    render() {
        return (
            <Button onClick={this.showMessage}>普通提示</Button>
        );
    }
}