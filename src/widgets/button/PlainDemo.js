import * as React from 'react';
import {Button} from '@lugia/lugia-web';

export default class ButtonDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Button shape="round" plain>Default</Button>
                <Button type="primary" shape="round" plain>Primary</Button>
                <Button type="success" shape="round" plain>Success</Button>
                <Button type="warning" shape="round" plain>Warning</Button>
                <Button type="danger" shape="round" plain>Danger</Button>
            </div>
        );
    }
}
