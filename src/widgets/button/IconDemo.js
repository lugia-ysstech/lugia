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
                <Button loading>loading</Button><Empty />
                <Button loading={{ delay: 3000 }}>loading</Button><Empty />
                <Button icon="lugia-icon-direction_logout">Button</Button><Empty />
                <Button icon="lugia-icon-financial_global">Button</Button>
            </Wrap>
        );
    }
}
