/**
 * create by szfeng
 *
 */
import Widget from '@lugia/lugia-web/dist/consts/index';
import { Theme, Tag, Input, Icon } from '@lugia/lugia-web';
import styled from 'styled-components';
import React from 'react';

const AddIcon = styled(Icon)`
  position: relative;
  top: 2px;
  left: -3px;
`;

const Box = styled.div`
  display: inline-block;
  margin: 5px;
`;

export default class LimitCase extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: ['标签1', '标签2'],
      inputVisible: false,
      newTagText: ''
    };
  }

  render() {
    const { inputVisible } = this.state;
    const inputConfig = { [Widget.Input]: { width: 100, height: 20 } };
    const tagConfig = { [Widget.Tag]: { width: 100 } };
    return (
      <div>
        <Box>
          <Tag>on close</Tag>
        </Box>
        {this.getTags()}
        {inputVisible && (
          <Theme config={inputConfig}>
            <Input
              onChange={this.onChange}
              autoFocus
              onBlur={this.onBlur}
              size={'small'}
              onKeyDown={this.onKeyDown}
            />
          </Theme>
        )}
        {!inputVisible && (
          <Box>
            <Theme config={tagConfig}>
              <Tag onClick={this.handleAddTag} type="basic">
                <AddIcon iconClass={'lugia-icon-reminder_plus_circle_o'} />
                标签
              </Tag>
            </Theme>
          </Box>
        )}
      </div>
    );
  }

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.onBlur();
    }
  };

  onClose(item: string, e: Object) {
    const { data } = this.state;
    const index = data.indexOf(item);
    data.splice(index, 1);
    setTimeout(() => {
      this.setState({ data });
    }, 300);
  }

  onChange = target => {
    const { newValue: newTagText } = target;
    this.setState({ newTagText });
  };

  handleAddTag = () => {
    this.setState({ inputVisible: true });
  };

  onBlur = () => {
    const { data, newTagText } = this.state;
    if (newTagText) {
      data.push(newTagText);
    }
    this.setState({ inputVisible: false, newTagText: '' });
  };

  getTags = () => {
    const { data } = this.state;
    return data.map((item, index) => {
      return (
        <Box>
          <Tag key={item} closable onClose={this.onClose.bind(this, item)}>
            {item}
          </Tag>
        </Box>
      );
    });
  };
}
