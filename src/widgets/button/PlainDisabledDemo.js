import * as React from 'react';
import {Button} from '@lugia/lugia-web';

export default class ButtonDemo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Button plain disabled>
                    default
                </Button>
                <Button type="primary" plain disabled>
                    primary
                </Button>
                <Button type="success" plain disabled>
                    success
                </Button>
                <Button type="warning" plain disabled>
                    warning
                </Button>
                <Button type="danger" plain disabled>
                    danger
                </Button>
            </div>
        );
    }
}
