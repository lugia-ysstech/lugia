/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Popover, Theme, Button } from '@lugia/lugia-web';
import styled from 'styled-components';
const Direction = styled(Button)``;
export default class HoverClickPopover extends React.Component<any, any> {
  state = {
    clicked: false,
    hovered: false
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false
    });
  };

  handleHoverChange = visible => {
    const { onVisibleChange } = this.props;
    this.setState({
      hovered: visible,
      clicked: false
    });
    onVisibleChange && onVisibleChange(visible);
  };

  handleClickChange = visible => {
    this.setState({
      clicked: visible,
      hovered: false
    });
  };

  render() {
    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
      <Popover
        style={{ width: 500 }}
        description={hoverContent}
        title="This is  hover title"
        action={'hover'}
        placement="topLeft"
        visible={this.state.hovered}
        onVisibleChange={this.handleHoverChange}
      >
        <div>
          <Popover
            description={clickContent}
            title="This is  click title"
            action={'click'}
            placement="topLeft"
            visible={this.state.clicked}
            clear={'lugia-icon-reminder_close'}
            onVisibleChange={this.handleClickChange}
            onClearClick={this.hide}
          >
            <Direction type="primary">Hover and click / 悬停并单击</Direction>
          </Popover>
        </div>
      </Popover>
    );
  }
}
