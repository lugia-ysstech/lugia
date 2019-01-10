import * as React from 'react';
import styled from 'styled-components';
import {Button} from '@lugia/lugia-web';

const Empty = styled.span`
  display: inline-block;
  width: 10px;
`;

export default class ButtonDemo extends React.Component {
    render() {
        return (
            <div>
                <Button>Default</Button><Empty />
                <Button type="primary">Primary</Button><Empty />
                <Button type="success">Success</Button><Empty />
                <Button type="warning">Warning</Button><Empty />
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}
