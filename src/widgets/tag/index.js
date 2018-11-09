/**
 * create by LYQ
 *
 * @flow
 */
import Widget from '@lugia/lugia-web/dist/consts/index';
import {Theme,Tag} from '@lugia/lugia-web';
import styled from 'styled-components';
import React from 'react';

const Box = styled.div`
  display: inline-block;
  margin: 10px;
`;

const data = [];
for (let i = 10; i < 20; i++) {
  data.push(i);
}

export class LimitCase extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { data };
  }

  render() {
    return this.getTag();
  }

  onClose(item: string, e: Object) {
    const { data } = this.state;
    const index = data.indexOf(item);
    data.splice(index, 1);
    this.setState({ data });
  }

  getTag = () => {
    const { data } = this.state;
    return data.map((item, index) => {
      return (
        <Tag key={item} onClose={this.onClose.bind(this, item)}>
          {item}
        </Tag>
      );
    });
  };

  onClick = () => {
    console.log('cc');
  };
}

export class NormalCase extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { data };
  }

  render() {
    const config = {
      [Widget.Tag]: {
        color: '#ff5588',
      },
    };

    const config2 = {
      [Widget.Tag]: {
        color: '#fff',
      },
    };

    return (
      <div>
        <div>
          <Box>
            <Theme config={config}>
              <Tag type="customs" closeable={false} onClose={this.onClose}>
                customs
              </Tag>
            </Theme>
          </Box>

          <Box>
            <Theme config={config}>
              <Tag type="customs" shape={'round'} closeable={false} onClose={this.onClose}>
                customs
              </Tag>
            </Theme>
          </Box>

          <Box>
            <Tag type="customs" closeable={false} onClose={this.onClose}>
              标签
            </Tag>
          </Box>

          <Box>
            <Tag type="customs" onClose={this.onClose}>
              closeable
            </Tag>
          </Box>

          <Box>
            <Tag type="customs" shape={'round'} onClose={this.onClose}>
              closeable
            </Tag>
          </Box>
        </div>

        <div>
          <Box>
            <Theme config={config2}>
              <Tag type="primary" closeable={false} onClose={this.onClose}>
                标签
              </Tag>
            </Theme>
          </Box>

          <Box>
            <Theme config={config2}>
              <Tag type="primary" shape={'round'} closeable={false} onClose={this.onClose}>
                primary
              </Tag>
            </Theme>
          </Box>

          <Box>
            <Tag type="primary" closeable={false} onClose={this.onClose}>
              标签
            </Tag>
          </Box>

          <Box>
            <Tag type="primary" onClose={this.onClose}>
              closeable
            </Tag>
          </Box>

          <Box>
            <Tag type="primary" shape={'round'} onClose={this.onClose}>
              closeable
            </Tag>
          </Box>
        </div>

        <div>
          <Box>
            <Theme config={config}>
              <Tag type="basic" closeable={false} onClose={this.onClose}>
                basic
              </Tag>
            </Theme>
          </Box>

          <Box>
            <Theme config={config}>
              <Tag type="basic" shape={'round'} closeable={false} onClose={this.onClose}>
                basic
              </Tag>
            </Theme>
          </Box>

          <Box>
            <Tag type="basic" closeable={false} onClose={this.onClose}>
              标签
            </Tag>
          </Box>

          <Box>
            <Tag type="basic" onClose={this.onClose}>
              closeable
            </Tag>
          </Box>

          <Box>
            <Tag type="basic" shape={'round'} onClose={this.onClose}>
              closeable
            </Tag>
          </Box>
        </div>

        <div>
          <Box>
            <Theme config={config}>
              <Tag type="presets" closeable={false} onClose={this.onClose}>
                presets
              </Tag>
            </Theme>
          </Box>

          <Box>
            <Theme config={config}>
              <Tag type="presets" shape={'round'} closeable={false} onClose={this.onClose}>
                presets
              </Tag>
            </Theme>
          </Box>

          <Box>
            <Tag type="presets" closeable={false} onClose={this.onClose}>
              标签
            </Tag>
          </Box>

          <Box>
            <Tag type="presets" onClose={this.onClose}>
              closeable
            </Tag>
          </Box>

          <Box>
            <Tag
              type="presets"
              disabled
              shape={'round'}
              onClick={this.onClick}
              onClose={this.onClose}
            >
              closeable
            </Tag>
          </Box>
        </div>
      </div>
    );
  }

  onClose(item: string, e: Object) {}

  onClick = () => {
    console.log('cc');
  };
}

export default () => {
  return [<LimitCase />, <NormalCase />];
};
