import Widget from '@lugia/lugia-web/dist/consts/index';
import { Theme, Tag } from '@lugia/lugia-web';
import styled from 'styled-components';
import React from 'react';
const TagWrap = styled.div`
  display: inline-block;
  margin: 5px;
`;

export default class ClosableTag extends React.Component<any, any> {
  render() {
    return [
      <div>
        <TagWrap>
          <Theme
            config={{
              [Widget.Tag]: {
                color: '#4d63ff'
              }
            }}
          >
            <Tag closable>标签1</Tag>
          </Theme>
        </TagWrap>

        <TagWrap>
          <Theme
            config={{
              [Widget.Tag]: {
                color: '#e8e8e8'
              }
            }}
          >
            <Tag type={'primary'} closable>
              标签2
            </Tag>
          </Theme>
        </TagWrap>

        <TagWrap>
          <Tag type={'basic'} closable>
            标签3
          </Tag>
        </TagWrap>

        <TagWrap>
          <Theme
            config={{
              [Widget.Tag]: {
                color: '#f22735'
              }
            }}
          >
            <Tag type={'presets'} closable>
              标签4
            </Tag>
          </Theme>
        </TagWrap>
      </div>,
      <div>
        <TagWrap>
          <Theme
            config={{
              [Widget.Tag]: {
                color: '#4d63ff'
              }
            }}
          >
            <Tag shape={'round'} closable>
              标签1
            </Tag>
          </Theme>
        </TagWrap>

        <TagWrap>
          <Theme
            config={{
              [Widget.Tag]: {
                color: '#e8e8e8'
              }
            }}
          >
            <Tag type={'primary'} shape={'round'} closable>
              标签2
            </Tag>
          </Theme>
        </TagWrap>

        <TagWrap>
          <Tag type={'basic'} shape={'round'} closable>
            标签3
          </Tag>
        </TagWrap>

        <TagWrap>
          <Theme
            config={{
              [Widget.Tag]: {
                color: '#f22735'
              }
            }}
          >
            <Tag type={'presets'} shape={'round'} closable>
              标签4
            </Tag>
          </Theme>
        </TagWrap>
      </div>
    ];
  }

  onClose = () => {
    console.log('close');
  };
}
