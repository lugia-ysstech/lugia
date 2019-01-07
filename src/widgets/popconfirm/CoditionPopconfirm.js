import React from 'react';
import {
  Popconfirm,
  Theme,
  Button,
  notification,
  Switch
} from '@lugia/lugia-web';
import styled from 'styled-components';

const Direction = styled(Button)``;
export default class CoditionPopconfirm extends React.Component<any, any> {
  state = {
    visible: false,
    condition: true
  };

  changeCondition = (value: Object) => {
    const condition = value.oldValue === true;
    this.setState({ condition });
  };

  confirm = () => {
    this.setState({ visible: false });
    notification.success({ title: '操作成功 ' });
  };

  cancel = () => {
    this.setState({ visible: false });
    notification.error({ title: '取消操作' });
  };

  handleVisibleChange = (visible: Object) => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    if (this.state.condition === true) {
      this.confirm();
    } else {
      this.setState({ visible });
    }
  };

  render() {
    return (
      <div style={{ margin: 20 }}>
        <p> 触发弹出框</p>
        <Switch defaultChecked onChange={this.changeCondition} />
        <Popconfirm
          title="确定要删除吗?"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="确定"
          cancelText="取消"
        >
          <Direction type="primary">删除任务</Direction>
        </Popconfirm>
      </div>
    );
  }
}
