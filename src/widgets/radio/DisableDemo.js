import React from 'react';
import {Radio} from '@lugia/lugia-web';

export default class RadioDemo extends React.Component {
    render() {
        return (
            <div>
                <Radio value="1" disabled>
                    Radio
                </Radio>
                <Radio value="1" checked disabled>
                    Radio
                </Radio>
            </div>
        );
    }
}
