import * as React from 'react';
import styled from 'styled-components';
import {Button} from '@lugia/lugia-web';

const Empty = styled.span`
  display: inline-block;
  width: 10px;
`;

export default class ButtonDemo extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Button type="warning" size="small">
          Warning
        </Button><Empty />
        <Button>Default</Button><Empty />
        <Button type="primary" size="large">
          Primary
        </Button>
      </div>
    );
  }
}
