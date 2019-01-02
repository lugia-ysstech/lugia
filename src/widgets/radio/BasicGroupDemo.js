import React from 'react';
import {Radio} from '@lugia/lugia-web';

const RadioGroup = Radio.Group;

export default class RadioGroupDemo extends React.Component {
    render() {
        return (
            <div>
                <RadioGroup defaultValue="1">
                    <Radio value="1">Radio1</Radio>
                    <Radio value="2">Radio2</Radio>
                </RadioGroup>
            </div>
        );
    }
}
