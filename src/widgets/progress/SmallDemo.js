import React from 'react';
import {Progress} from '@lugia/lugia-web';

export default class ProgressDemo extends React.Component {
    render() {
        return (
            <div>
                <Progress percent={30} size="small" />
                <br/>
                <Progress percent={50} status="active" size="small" />
                <br/>
                <Progress percent={70} status="error" size="small" />
                <br/>
                <Progress percent={100} status="success" size="small" />
            </div>
        );
    }
}
