import React from 'react';
import {Radio} from '@lugia/lugia-web';

const data = [
    { text: 'radio1', value: 'Apple' },
    { text: 'radio2', value: 'Pear' },
    { text: 'radio3', value: 'Orange', disabled: true },
];

export default class RadioDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'apple',
            displayValue: 'hello',
        };
    }
    handleChange = (obj) => {
        this.setState({
            value: obj.newValue,
            displayValue: obj.newDisplayValue,
        });
    };
    render() {
        return (
            <div>
                <RadioGroup
                    onChange={this.handleChange}
                    data={data}
                    value={this.state.value}
                    displayValue={this.state.displayValue}
                    childType="button"
                />
            </div>
        );
    }
}