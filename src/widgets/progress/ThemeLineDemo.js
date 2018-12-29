import React from 'react';
import {Progress, Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class ProgressDemo extends React.Component {
    render() {
        const view = {
            [Widget.Progress]: {
                color: 'red',
                width: 200,
                height: 18,
            },
        };
        return (
            <div>
                <Theme config={view}>
                    <Progress percent={30} showType="inside" />
                </Theme>
                <Theme config={view}>
                    <Progress percent={30} />
                </Theme>
            </div>
        );
    }
}