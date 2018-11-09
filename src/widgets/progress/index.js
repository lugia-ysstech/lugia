/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import {Progress,Button,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

export default class ProgressDemo extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      percent: 30,
    };
  }
  handleClick = (type: 'add' | 'sub') => {
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
    const view = {
      [Widget.Progress]: {
        color: 'red',
        width: 100,
        height: 18,
      },
    };
    const CircleView = {
      [Widget.Progress]: {
        color: 'red',
      },
    };
    return (
      <div>
        <div style={{ width: '300px', margin: '50px' }}>
          <h1>line</h1>
          <p>props: percent={30}</p>
          <br />
          <Progress percent={30} />
          <br />
          <p>props: percent={30} status="active"</p>
          <br />
          <Progress percent={30} status="active" />
          <br />
          <p>props: percent={30} status="success" format= percent => percent + '--'</p>
          <br />
          <Progress percent={30} status="success" format={percent => percent + '--'} />
          <br />
          <p>props: percent={30} status="success"</p>
          <br />
          <Progress percent={30} status="success" />
          <br />
          <p>props: percent={30} status="error"</p>
          <br />
          <Progress percent={30} status="error" />
          <br />
          <p>props: percent={100} status="error"</p>
          <br />
          <Progress percent={100} status="error" />
          <br />
          <p>props: percent=this.state.percent status="active"</p>
          <br />
          <Progress percent={this.state.percent} status="active" />
          <Button onClick={() => this.handleClick('add')}>+10</Button>&nbsp;
          <Button onClick={() => this.handleClick('sub')}>-10</Button>
          <br />
          <p>props: percent={30} showInfo=false</p>
          <br />
          <Progress percent={30} showInfo={false} />
          <br />
          <p>Theme===>>> props: percent={30}</p>
          <br />
          <Theme config={view}>
            <Progress percent={30} />
          </Theme>
          <div style={{ width: '200px', margin: '50px 0' }}>
            <p>props: size=small percent={30}</p>
            <br />
            <Progress size="small" percent={30} />
            <br />
            <p>props: size=small percent={30} status="active"</p>
            <br />
            <Progress size="small" percent={30} status="active" />
            <br />
            <p>props: size=small percent={30} status="success"</p>
            <br />
            <Progress size="small" percent={30} status="success" />
            <br />
            <p>props: size=small percent={30} status="error"</p>
            <br />
            <Progress size="small" percent={30} status="error" />
            <br />
            <p>props: size=small percent={100} status="error"</p>
            <br />
            <Progress size="small" percent={100} status="error" />
          </div>
          <div style={{ width: '300px', margin: '50px 0' }}>
            <p>percent={0} showType="inside"</p>
            <br />
            <Progress percent={0} showType="inside" />
            <br />
            <p>percent={30} showType="inside" status="active"</p>
            <br />
            <Progress percent={30} showType="inside" status="active" />
            <br />
            <p>percent={30} showType="inside"</p>
            <br />
            <Progress percent={30} showType="inside" />
            <br />
            <p>percent={30} showType="inside" status="success"</p>
            <br />
            <Progress percent={130} showType="inside" />
            <br />
            <p>percent={30} showType="inside" status="error"</p>
            <br />
            <Progress percent={30} showType="inside" status="error" />
            <br />
            <br />
            <p>percent={100} showType="inside" status="error"</p>
            <br />
            <Progress percent={100} showType="inside" status="error" />
            <br />
            <p>Theme===>>> props: percent={30}</p>
            <br />
            <Theme config={view}>
              <Progress percent={30} showType="inside" />
            </Theme>
          </div>
        </div>

        <div style={{ margin: '50px' }}>
          <h1>circle</h1>
          <p>type="circle" props: percent={0}</p>
          <br />
          <Progress type="circle" percent={0} />
          <br />
          <p>type="circle" props: percent={30}</p>
          <br />
          <Progress type="circle" percent={this.state.percent} />
          <Button onClick={() => this.handleClick('add')}>+10</Button>&nbsp;
          <Button onClick={() => this.handleClick('sub')}>-10</Button>
          <br />
          <p>type="circle" props: percent={100}</p>
          <br />
          <Progress type="circle" percent={100} />
          <br />
          <p>type="circle" props: percent={50}</p>
          <br />
          <Progress type="circle" status="success" percent={50} />
          <br />
          <p>type="circle" props: percent={50}</p>
          <br />
          <Progress type="circle" status="error" percent={50} />
          <br />
          <p>type="circle" props: percent={100}</p>
          <br />
          <Progress type="circle" status="error" percent={100} />
          <br />
          <p>props: percent={50} status="error" format= percent => percent + '--'</p>
          <br />
          <Progress type="circle" status="error" percent={50} format={percent => percent + '--'} />
          <br />
          <p>Theme: color===>>> props: percent={30}</p>
          <br />
          <Theme config={CircleView}>
            <Progress type="circle" percent={30} />
          </Theme>
          <p>type="circle" size="small" props: percent={0}</p>
          <br />
          <Progress type="circle" size="small" percent={0} />
          <br />
          <p>type="circle" props: percent={30}</p>
          <br />
          <Progress type="circle" size="small" percent={this.state.percent} />
          <br />
          <p>type="circle" props: percent={100}</p>
          <br />
          <Progress type="circle" size="small" percent={100} />
          <br />
          <p>type="circle" props: percent={50}</p>
          <br />
          <Progress type="circle" size="small" status="error" percent={50} />
          <br />
          <p>type="circle" props: percent={100}</p>
          <br />
          <Progress type="circle" size="small" status="error" percent={100} />
          <br />
          <div style={{ margin: '50px' }}>
            <h1>dashboard</h1>
            <p>type="dashboard" props: percent={50}</p>
            <br />
            <Progress type="dashboard" percent={50} />
            <br />
            <p>type="dashboard" props: percent={100}</p>
            <br />
            <Progress type="dashboard" percent={100} />
            <br />
            <p>type="dashboard" props: percent={80} status="success"</p>
            <br />
            <Progress type="dashboard" status="success" percent={80} />
            <br />
            <p>type="dashboard" props: percent={40} status="error"</p>
            <br />
            <Progress type="dashboard" status="error" percent={40} />
            <br />
            <p>type="dashboard" props: percent={100} status="error"</p>
            <br />
            <Progress type="dashboard" status="error" percent={100} />
            <br />
            <p>type="dashboard" props: percent={50} format= percent => percent + '--'</p>
            <br />
            <Progress type="dashboard" percent={50} format={percent => percent + '--'} />
            <br />
            <p>type="circle" props: percent={this.state.percent}</p>
            <br />
            <Progress type="dashboard" percent={this.state.percent} />
            <Button onClick={() => this.handleClick('add')}>+10</Button>&nbsp;
            <Button onClick={() => this.handleClick('sub')}>-10</Button>
            <br />
            <p>Theme: color===>>> props: percent={30}</p>
            <br />
            <Theme config={CircleView}>
              <Progress type="dashboard" percent={30} />
            </Theme>
          </div>
        </div>
      </div>
    );
  }
}
