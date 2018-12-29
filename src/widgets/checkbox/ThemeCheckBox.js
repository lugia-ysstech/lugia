import React from 'react';
import {CheckBox,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class CheckBoxDemo extends React.Component {
    render() {
        const view ={
            [Widget.CheckBox]: {
                color: 'red',
            }
        };
        return (
            <div>
                <Theme config={view}>
                    <CheckBox >CheckBox</CheckBox>
                </Theme>
            </div>
        );
    }
}
