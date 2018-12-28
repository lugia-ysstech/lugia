import * as React from 'react';
import {Button} from '@lugia/lugia-web';

export default class ButtonDemo extends React.Component {
    render() {
        return (
            <div>
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type="success">Success</Button>
                <Button type="warning">Warning</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}
