import React from 'react';
import {Checkbox} from '@lugia/lugia-web';

const CheckboxGroup = Checkbox.Group;
const CheckBoxButton = Checkbox.Button;

export default class CheckBoxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newValue: ['11', '44'],
            newDisplayValue: ['check4', 'check5'],
        };
    }
    handleChange = obj => {
        console.info(obj);
    };
    render() {
        return (
            <div>
                <CheckboxGroup childType="button" onChange={this.handleChange} defaultValue={['1', '2']}>
                    <CheckBoxButton value="1">CheckBox1</CheckBoxButton>
                    <CheckBoxButton value="2">CheckBox2</CheckBoxButton>
                    <CheckBoxButton value="3">CheckBox3</CheckBoxButton>
                </CheckboxGroup>
            </div>
        );
    }
}
