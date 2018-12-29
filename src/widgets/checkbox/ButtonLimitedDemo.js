import React from 'react';
import {CheckBox} from '@lugia/lugia-web';

const CheckBoxGroup = CheckBox.Group;
const CheckBoxButton = CheckBox.Button;
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
    handleChange = ({ newValue, newDisplayValue }: any): any => {
        console.info(newValue, newDisplayValue);
        this.setState({ newValue, newDisplayValue });
    };
    render() {
        return (
            <div>
                <CheckBoxGroup
                    onChange={this.handleChange}
                    data={options}
                    value={this.state.newValue}
                    displayValue={['check4', 'check5']}
                    displayField="label"
                    childType="button"
                />
            </div>
        )
    }
}