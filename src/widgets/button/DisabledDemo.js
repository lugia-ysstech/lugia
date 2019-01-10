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
                <Button disabled>Default</Button>
                <Empty />
                <Button type="primary" disabled>
                    Primary
                </Button>
                <Empty />
                <Button type="success" disabled>
                    Success
                </Button>
                <Empty />
                <Button type="warning" disabled>
                    warning
                </Button>
                <Empty />
                <Button type="danger" disabled>
                    danger
                </Button>
            </div>
        );
    }
}
