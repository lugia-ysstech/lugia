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
                <Button shape="round" plain>Default</Button><Empty />
                <Button type="primary" shape="round" plain>Primary</Button><Empty />
                <Button type="success" shape="round" plain>Success</Button><Empty />
                <Button type="warning" shape="round" plain>Warning</Button><Empty />
                <Button type="danger" shape="round" plain>Danger</Button>
            </div>
        );
    }
}
