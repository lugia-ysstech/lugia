/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Popover, Theme, Button } from '@lugia/lugia-web';
import styled from 'styled-components';
const Direction = styled(Button)``;
export default class InnerClosePopover extends React.Component<any, any> {
  state = {
    visible: false
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const description = 'this is description';
    return (
      <Popover
        placement="top"
        title="this is the title"
        action="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        clear={'lugia-icon-reminder_close'}
        description={[<div>{description}</div>]}
        onClearClick={this.hide}
      >
        <Direction type="primary">内部关闭</Direction>
      </Popover>
    );
  }
}
