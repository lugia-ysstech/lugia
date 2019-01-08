import React from 'react';
import {Progress} from '@lugia/lugia-web';

export default class ProgressDemo extends React.Component {
    render() {
        return (
            <div>
                <Progress type="dashboard" percent={50} />
                <br/>
                <Progress type="dashboard" percent={100} />
                <br/>
                <Progress type="dashboard" status="error" percent={40} />
                <br/>
                <Progress type="dashboard" status="success" percent={80} />
            </div>
        );
    }
}
