import React from 'react';
import {Checkbox} from '@lugia/lugia-web';

const CheckboxGroup = Checkbox.Group;

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
                <CheckboxGroup styles="vertical" onChange={this.handleChange} value={this.state.newValue}>
                    <Checkbox value="11" disabled>
                        CheckBox1
                    </Checkbox>
                    <Checkbox value="22">CheckBox2</Checkbox>
                    <Checkbox value="33">CheckBox3</Checkbox>
                </CheckboxGroup>
            </div>
        );
    }
}
