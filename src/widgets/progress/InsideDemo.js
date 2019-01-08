import React from 'react';
import {Progress} from '@lugia/lugia-web';

export default class ProgressDemo extends React.Component {
    render() {
        return (
            <div>
                <Progress percent={0} showType="inside" />
                <br/>
                <Progress percent={30} showType="inside" status="active" />
                <br/>
                <Progress percent={30} showType="inside" />
                <br/>
                <Progress percent={100} showType="inside" />
                <br/>
                <Progress percent={30} showType="inside" status="error" />
            </div>
        );
    }
}
