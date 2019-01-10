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
                <Button circle icon="lugia-icon-direction_logout" /><Empty />
                <Button type="primary" circle icon="lugia-icon-financial_search" /><Empty />
                <Button circle icon="lugia-icon-financial_download" />
            </div>
        );
    }
}
