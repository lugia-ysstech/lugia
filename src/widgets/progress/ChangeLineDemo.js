import React from 'react';
import {Progress, Button} from '@lugia/lugia-web';

export default class ProgressDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            percent: 30,
        };
    }
    handleClick = type => {
        let res = this.state.percent;
        if (type === 'add') {
            res += 10;
        } else {
            res -= 10;
        }
        this.setState({
            percent: res,
        });
    };
    render() {
        return (
            <div>
                <Progress percent={this.state.percent} status="active" />
                <br/>
                <Button onClick={() => this.handleClick('add')}>+10</Button>&nbsp;&nbsp;
                <Button onClick={() => this.handleClick('sub')}>-10</Button>
            </div>
        );
    }
}
