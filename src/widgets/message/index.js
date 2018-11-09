/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import {Button,Message} from '@lugia/lugia-web';
// import Button from '../button';
// import Message from './icon-content';

export default class MessageDemo extends React.Component<any, any> {
  showMessage = (type: 'info' | 'success' | 'error' | 'warning' | 'loading') => () => {
    Message[type]('哈哈哈哈', 2);
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <Button onClick={this.showMessage('info')}>普通提示</Button>
        <br />
        <br />
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
