import React from 'react';
import {Radio} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
const RadioGroup = Radio.Group;
const data = [
    { text: 'radio1', value: 'Apple' },
    { text: 'radio2', value: 'Pear' },
    { text: 'radio3', value: 'Orange', disabled: true },
];

export default class RadioGroupDemo extends React.Component {
    constructor(){
        super();
        this.state ={
            value: 'apples'
        };
    }
    onChange = obj => {
        console.info('obj-demo', obj);
        this.setState({
          value: obj.newValue
        });
    };
    render() {
        const radioView = {
            [Widget.RadioGroup]: {
                width: 100,
                color: 'red',
            },
        };
        return (
            <div>
                <RadioGroup
                    onChange={this.onChange}
                    displayFiled="text"
                    valueField="value"
                    value={this.state.value}
                    styles="vertical"
                    displayValue="DisplayValue"
                    data={data}
                />
            </div>
        );
    }
}
