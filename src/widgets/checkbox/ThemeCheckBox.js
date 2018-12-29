import React from 'react';
import {Checkbox,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class CheckBoxDemo extends React.Component {
    render() {
        const view ={
            [Widget.Checkbox]: {
                color: 'red',
            }
        };
        return (
            <div>
                <Theme config={view}>
                    <Checkbox >CheckBox</Checkbox>
                </Theme>
            </div>
        );
    }
}
