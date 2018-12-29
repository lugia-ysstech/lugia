/**
 *
 * create by LYQ
 *
 * @flow
 */
import * as React from 'react';
import {Button,notification} from '@lugia/lugia-web';

export default class NotificationDemo extends React.Component<any, any> {
  defaultOpen = () => {
    notification.open({ title: '今天天气很好！', description: '因为今天的太阳很大。' });
  };
  durationOpen = (duration: number) => {
    notification.open({ title: '今天天气很好！', description: '因为今天的太阳很大。', duration });
  };
  statusOpen = (type: 'info' | 'success' | 'error' | 'warning') => {
    notification[type]({ title: '今天天气很好！', description: '因为今天的太阳很大。' });
  };
  customIconOpen = (icon: string) => {
    notification.open({ title: '今天天气很好！', description: '因为今天的太阳很大。', icon });
  };
  placementOpen = (placement: 'bottomLeft' | 'bottomRight' | 'topLeft') => {
    notification.open({
      icon: 'lugia-icon-reminder_check_circle',
      title: '今天天气很好！',
      description: '因为今天的太阳很大。',
      placement,
    });
  };
  render() {
      console.log('=====',notification);
    return (
      <div>
        <br />
        <br />
        <Button onClick={this.defaultOpen}>基本用法</Button>
        <br />
        <br />
        <Button onClick={() => this.durationOpen(6)}>自定义延时关闭</Button>
        &nbsp;&nbsp;
        <Button onClick={() => this.durationOpen(0)}>自定义延时关闭</Button>
        <br />
        <br />
        <Button onClick={() => this.statusOpen('info')}>info</Button>&nbsp;&nbsp;
        <Button onClick={() => this.statusOpen('success')}>success</Button>&nbsp;&nbsp;
        <Button onClick={() => this.statusOpen('error')}>error</Button>&nbsp;&nbsp;
        <Button onClick={() => this.statusOpen('warning')}>warning</Button>&nbsp;&nbsp;
        <br />
        <br />
        <Button onClick={() => this.customIconOpen('lugia-icon-reminder_check_circle')}>
          自定义图标
        </Button>
        <br />
        <br />
        <Button onClick={() => this.placementOpen('bottomLeft')}>
          自定义方向-bottomLeft
        </Button>&nbsp;&nbsp;
        <Button onClick={() => this.placementOpen('bottomRight')}>
          自定义方向-bottomRight
        </Button>&nbsp;&nbsp;
        <Button onClick={() => this.placementOpen('topLeft')}>自定义方向-topLeft</Button>
      </div>
    );
  }
}
