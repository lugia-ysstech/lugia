import * as React from 'react';
import {Button} from '@lugia/lugia-web';

export default class ButtonDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Button loading>loading</Button>
                <Button loading={{ delay: 3000 }}>loading</Button>
                <Button icon="lugia-icon-direction_logout">Button</Button>
                <Button icon="lugia-icon-financial_global">Button</Button>
            </div>
        );
    }
}
