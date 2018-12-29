import React from 'react';
import {Radio, Theme} from '@lugia/lugia-web';

export default class RadioDemo extends React.Component {
    render() {
        const view = {
            register: {
                width: 120,
                color: 'red',
                margin: 20,
            }
        };
        return (
            <div>
                <Theme config={view}>
                    <Radio viewClass="register" value="apple">
                        Radio
                    </Radio>
                </Theme>
            </div>
        );
    }
}
