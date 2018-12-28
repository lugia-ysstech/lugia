import React from 'react';
import {Radio} from '@lugia/lugia-web';

const RadioGroup = Radio.Group;
const data = [
    { text: 'radio1', value: 'Apple' },
    { text: 'radio2', value: 'Pear' },
    { text: 'radio3', value: 'Orange', disabled: true },
];

export default class RadioGroupDemo extends React.Component {
    onChange = obj => {
        console.info('obj-demo', obj);
    };
    render() {
        return (
            <div>
                <RadioGroup
                    onChange={this.onChange}
                    styles="vertical"
                    displayFiled="text"
                    valueField="value"
                    defaultValue="Apple"
                    data={data}
                />
            </div>
        );
    }
}