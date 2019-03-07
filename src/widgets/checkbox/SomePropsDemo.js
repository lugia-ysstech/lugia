import React from 'react';
import {Checkbox} from '@lugia/lugia-web';

const CheckboxGroup = Checkbox.Group;
const options = [
    { label: 'check1', value: '11', name: '1' },
    { label: 'check2', value: '22', name: '2' },
    { label: 'check3', value: '33', name: '3' },
];

export default class CheckBoxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newValue: ['11', '44'],
            newDisplayValue: ['check4', 'check5'],
        };
    }
    handleChange = ({ newValue, newDisplayValue }) => {
        console.info(newValue, newDisplayValue);
        this.setState({ newValue, newDisplayValue });
    };
    render() {
        return (
            <div>
                <CheckboxGroup
                    onChange={this.handleChange}
                    styles="vertical"
                    data={options}
                    defaultValue={['11', '44']}
                    displayValue={['check4', 'check5']}
                    displayField="label"
                />
            </div>
        );
    }
}
