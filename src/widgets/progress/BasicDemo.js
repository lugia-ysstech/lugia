import React from 'react';
import {Progress} from '@lugia/lugia-web';

export default class ProgressDemo extends React.Component {
    render() {
        return (
            <div>
                <Progress percent={30} />
                <br/>
                <Progress percent={50} active />
                <br/>
                <Progress percent={70} status="error" />
                <br/>
                <Progress percent={100} status="success" />
                <br/>
                <Progress percent={70} showInfo={false} />
            </div>
        );
    }
}
