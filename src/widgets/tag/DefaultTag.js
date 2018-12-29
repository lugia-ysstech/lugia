/**
 * create by szfeng
 *
 * @flow
 */
import Widget from '@lugia/lugia-web/dist/consts/index';
import { Theme, Tag } from '@lugia/lugia-web';
import styled from 'styled-components';
import React from 'react';
const TagWrap = styled.div`
  display: inline-block;
  margin: 5px;
`;

export default class DefaultTag extends React.Component<any, any> {
  render() {
    const config1 = {
      [Widget.Tag]: {
        color: '#ff5588'
      }
    };

    const config2 = {
      [Widget.Tag]: {
        color: '#486fff'
      }
    };

    return [
      <Theme config={config1}>
        <TagWrap>
          <Tag>closeable</Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config1}>
        <TagWrap>
          <Tag>defaultTag</Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config2}>
        <TagWrap>
          <Tag>closeable</Tag>
        </TagWrap>
      </Theme>,
      <Theme config={config2}>
        <TagWrap>
          <Tag>defaultTag</Tag>
        </TagWrap>
      </Theme>
    ];
  }

  onClose = () => {
    console.log('close');
  };
}
