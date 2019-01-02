import * as React from 'react';
import {Button} from '@lugia/lugia-web';

export default class ButtonDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Button shape="round">Default</Button>
                <Button type="primary" shape="round">Primary</Button>
                <Button type="success" shape="round">Success</Button>
                <Button type="warning" shape="round">Warning</Button>
                <Button type="danger" shape="round">Danger</Button>
            </div>
        );
    }
}
