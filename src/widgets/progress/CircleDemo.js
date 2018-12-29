import React from 'react';
import {Progress} from '@lugia/lugia-web';

export default class ProgressDemo extends React.Component {
    render() {
        return (
            <div>
                <Progress type="circle" percent={0} />
                <Progress type="circle" status="error" percent={50} />
                <Progress type="circle" status="success" percent={100} />
            </div>
        );
    }
}