import * as React from 'react';
import {Button,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class ButtonDemo extends React.Component<any, any> {

    render() {
        const view = {
            [Widget.Button]: {
                width: 100,
            },
            register: {
                width: 300,
                margin: 10,
                color: 'red',
            },
        };
        return (
            <div>
                <Theme config={view}>
                    <Button viewClass="register">Button</Button>
                </Theme>
            </div>
        );
    }
}
