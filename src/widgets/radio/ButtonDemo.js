import React from 'react';
import {Radio} from '@lugia/lugia-web';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class RadioDemo extends React.Component {
    onChange = obj => {
        console.info('obj-demo', obj);
    };
    render() {
        return (
            <div>
                <RadioGroup childType="button" onChange={this.onChange} defaultValue="1">
                    <RadioButton value="1">CheckBox1</RadioButton>
                    <RadioButton value="2">CheckBox2</RadioButton>
                    <RadioButton value="3">CheckBox3</RadioButton>
                </RadioGroup>
            </div>
        );
    }
}
