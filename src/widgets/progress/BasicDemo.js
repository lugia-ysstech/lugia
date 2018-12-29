import React from 'react';
import {Progress} from '@lugia/lugia-web';

export default class ProgressDemo extends React.Component {
    render() {
        return (
            <div>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="error" />
                <Progress percent={100} status="success" />
                <Progress percent={70} showInfo={false} />
            </div>
        );
    }
}
