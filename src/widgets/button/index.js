/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import {Button , Theme} from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts/index';
// import Theme from '../theme';
// import Widget from '../consts';

const Wrapper = styled.div`
  float: left;
  margin-right: 50px;
`;

export default () => {
  const view = {
    [Widget.Button]: {
      width: 100,
    },
    register: {
      width: 300,
      margin: 10,
      color: 'red',
    },
  };
  return (
    <div>
      <Wrapper>
        <p>type</p>
        <p>default</p>
        <Button>Default</Button>
        <p>primary</p>
        <Button type="primary">Primary</Button>
        <p>success</p>
        <Button type="success">Success</Button>
        <p>warning</p>
        <Button type="warning">Warning</Button>
        <p>danger</p>
        <Button type="danger">Danger</Button>
      </Wrapper>
      <Wrapper>
        <p>shape</p>
        <p>default</p>
        <Button shape="round">Hello</Button>
        <p>primary</p>
        <Button type="primary" shape="round">
          Primary
        </Button>
        <p>success</p>
        <Button type="success" shape="round">
          Primary
        </Button>
        <p>warning</p>
        <Button type="warning" shape="round">
          Primary
        </Button>
        <p>danger</p>
        <Button type="danger" shape="round">
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <p>plain</p>
        <p>default</p>
        <Button shape="round" plain>
          hello
        </Button>
        <p>primary</p>
        <Button type="primary" shape="round" plain>
          Primary
        </Button>
        <p>success</p>
        <Button type="success" shape="round" plain>
          Primary
        </Button>
        <p>warning</p>
        <Button type="warning" shape="round" plain>
          primary
        </Button>
        <p>danger</p>
        <Button type="danger" shape="round" plain>
          Primary
        </Button>
      </Wrapper>
      <Wrapper>
        <p>size</p>
        <p>default</p>
        <Button>Default</Button>
        <p>medium</p>
        <Button type="primary" size="large">
          Primary
        </Button>
        <p>small</p>
        <Button type="success" size="bigger">
          Success
        </Button>
        <p>mini</p>
        <Button type="warning" size="small">
          Warning
        </Button>
      </Wrapper>
      <Wrapper>
        <p>disabled</p>
        <p>default</p>
        <Button disabled>Default</Button>
        <p>primary</p>
        <Button type="primary" disabled>
          Primary
        </Button>
        <p>success</p>
        <Button type="success" disabled>
          Success
        </Button>
        <p>warning</p>
        <Button type="warning" disabled>
          warning
        </Button>
        <p>danger</p>
        <Button type="danger" disabled>
          danger
        </Button>
      </Wrapper>
      <Wrapper>
        <p>plain disabled</p>
        <p>default</p>
        <Button plain disabled>
          default
        </Button>
        <p>primary</p>
        <Button type="primary" plain disabled>
          primary
        </Button>
        <p>success</p>
        <Button type="success" plain disabled>
          success
        </Button>
        <p>warning</p>
        <Button type="warning" plain disabled>
          warning
        </Button>
        <p>danger</p>
        <Button type="danger" plain disabled>
          danger
        </Button>
      </Wrapper>
      <Wrapper>
        <p>circle</p>
        <Button circle plain>
          我爱
        </Button>
        <p>loading</p>
        <Button loading>loading</Button>
        <p>loading</p>
        <Button loading={{ delay: 3000 }}>loading</Button>
        <p>icon Button</p>
        <Button icon="lugia-icon-direction_logout">Button</Button>
        <p>icon Button</p>
        <Button icon="lugia-icon-financial_global">Button</Button>
      </Wrapper>

      <Theme config={view}>
        <Button viewClass="register">Button</Button>
      </Theme>
    </div>
  );
};
