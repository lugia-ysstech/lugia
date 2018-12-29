import React from 'react';
import {Progress, Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class ProgressDemo extends React.Component {

    render() {
        const CircleView = {
            [Widget.Progress]: {
                color: 'red',
            },
        };
        return (
            <div>
                <Theme config={CircleView}>
                    <Progress type="dashboard" percent={30} />
                </Theme>
            </div>
        );
    }
}
