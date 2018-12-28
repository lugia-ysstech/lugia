import * as React from 'react';
import {Button} from '@lugia/lugia-web';

export default class ButtonDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Button disabled>Default</Button>
                <Button type="primary" disabled>
                    Primary
                </Button>
                <Button type="success" disabled>
                    Success
                </Button>
                <Button type="warning" disabled>
                    warning
                </Button>
                <Button type="danger" disabled>
                    danger
                </Button>
            </div>
        );
    }
}
