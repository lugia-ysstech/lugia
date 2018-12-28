import React from 'react';
import {CheckBox} from '@lugia/lugia-web';

export default class CheckBoxDemo extends React.Component {
    render() {
        return (
            <div>
                <CheckBox disabled>CheckBox</CheckBox>
                <CheckBox checked disabled>
                    CheckBox
                </CheckBox>
            </div>
        )
    }
}