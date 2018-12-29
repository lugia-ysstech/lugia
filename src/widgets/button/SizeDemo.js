import * as React from 'react';
import {Button} from '@lugia/lugia-web';

export default class ButtonDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Button>Default</Button>
                <Button type="primary" size="large">
                    Primary
                </Button>
                <Button type="success" size="bigger">
                    Success
                </Button>
                <Button type="warning" size="small">
                    Warning
                </Button>
            </div>
        );
    }
}
