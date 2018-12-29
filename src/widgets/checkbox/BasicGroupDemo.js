import React from 'react';
import {CheckBox} from '@lugia/lugia-web';

const CheckBoxGroup = CheckBox.Group;

export default class CheckBoxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newValue: ['11', '44']
        };
    }
    handleChange = ({ newValue, newDisplayValue }) => {
        console.info(newValue, newDisplayValue);
        this.setState({ newValue});
    };
    render() {
        return (
            <div>
                <CheckBoxGroup onChange={this.handleChange} value={this.state.newValue}>
                    <CheckBox value="11" disabled>
                        CheckBox1
                    </CheckBox>
                    <CheckBox value="22">CheckBox2</CheckBox>
                    <CheckBox value="33">CheckBox3</CheckBox>
                </CheckBoxGroup>
            </div>
        )
    }
}