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
                <Button shape="round">Default</Button><Empty />
                <Button type="primary" shape="round">Primary</Button><Empty />
                <Button type="success" shape="round">Success</Button><Empty />
                <Button type="warning" shape="round">Warning</Button><Empty />
                <Button type="danger" shape="round">Danger</Button>
            </Wrap>
        );
    }
}
