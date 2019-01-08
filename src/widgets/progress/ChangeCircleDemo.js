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
                <Progress type="circle" percent={this.state.percent} />
                <br/>
                <Button onClick={() => this.handleClick('add')}>+10</Button>&nbsp;
                <Button onClick={() => this.handleClick('sub')}>-10</Button>
            </div>
        );
    }
}
