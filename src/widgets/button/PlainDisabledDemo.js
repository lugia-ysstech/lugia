import * as React from 'react';
import styled from 'styled-components';
import {Button} from '@lugia/lugia-web';

const Empty = styled.span`
  display: inline-block;
  width: 10px;
`;
const Wrap = styled.div`
  & > button {
    margin-bottom: 10px;
  }  
`;

export default class ButtonDemo extends React.Component<any, any> {
    render() {
        return (
            <Wrap>
                <Button plain disabled>
                    default
                </Button>
                <Empty />
                <Button type="primary" plain disabled>
                    primary
                </Button>
                <Empty />
                <Button type="success" plain disabled>
                    success
                </Button>
                <Empty />
                <Button type="warning" plain disabled>
                    warning
                </Button>
                <Empty />
                <Button type="danger" plain disabled>
                    danger
                </Button>
            </Wrap>
        );
    }
}
