import * as React from 'react';
import {Button} from '@lugia/lugia-web';

export default class ButtonDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Button circle icon="lugia-icon-direction_logout" />
                <Button circle icon="lugia-icon-financial_search" />
                <Button circle icon="lugia-icon-financial_download" />
            </div>
        );
    }
}
