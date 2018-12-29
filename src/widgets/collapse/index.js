/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import { Theme ,Collapse,Panel} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
// import Widget from '../consts';


const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 50px;
  border: 1px solid #e8e8e8;
`;

const view = {
  [Widget.Panel]: {
    width: 500,
    color: '#56f43e',
    backgroundColor: '#e6f7ff',
    margin: 50,
    borderSize: {
      top: 0,
      right: 0,
      bottom: 1,
      left: 0,
    },
  },
};
const wrapView = {
  [Widget.Collapse]: {
    width: 500,
    margin: 20,
  },
  [Widget.Panel]: {
    borderSize: 0,
  },
};

export class PanelDemo extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      open: true,
    };
  }
  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };
  render() {
    const { open } = this.state;

    return (
      <div>
        <Wrapper>
          <Panel value="1" header="LUGIA">
            <div>PanelContent...</div>
            <div>PanelContent...</div>
          </Panel>
          <br />
          <Panel value="2" open={open} onClick={this.handleClick} header="lugia">
            <div>PanelContent...</div>
            <div>PanelContent...</div>
          </Panel>
          <br />
          <Panel value="3" header="LUGIA" disabled>
            <div>PanelContent...</div>
            <div>PanelContent...</div>
          </Panel>
          <br />
          <Panel value="4" showArrow={false} header="LUGIA">
            <div>PanelContent...</div>
            <div>PanelContent...</div>
          </Panel>
          <br />
          <Theme config={view}>
            <Panel value="4" showArrow={false} header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
          </Theme>
          <br />
          <Theme config={view}>
            <Panel value="5" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
          </Theme>
        </Wrapper>
      </div>
    );
  }
}
export  default  class CollapseDemo extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      activeValue: '1',
      defaultActiveValue: '1',
    };
  }
  handleChangeActiveValue = (obj: Object) => {
    console.info(obj.newValue);
    this.setState({
      activeValue: obj.newValue,
    });
  };
  handleChangeDefaultActiveValue = (obj: Object) => {
    console.info(obj.newValue);
  };
  render() {
    const { activeValue, defaultActiveValue } = this.state;
    return (
      <div>
        <Wrapper>
          <p>defaultActiveValue={'1'}</p>
          <Collapse defaultActiveValue={defaultActiveValue}>
            <Panel value="1" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
            <Panel value="2" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
          </Collapse>
          <br />
          <p>activeValue={'1'}</p>
          <Collapse activeValue={'1'}>
            <Panel value="1" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
            <Panel value="2" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
          </Collapse>
          <br />
          <p>activeValue={'this.state.activeValue'}</p>
          <Collapse activeValue={activeValue} onChange={this.handleChangeActiveValue}>
            <Panel value="1" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
            <Panel value="2" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
          </Collapse>
          <br />
          <Collapse defaultActiveValue={defaultActiveValue} accordion>
            <Panel value="1" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
            <Panel value="2" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
            <Panel value="3" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
            <Panel value="4" header="LUGIA">
              <div>PanelContent...</div>
              <div>PanelContent...</div>
            </Panel>
          </Collapse>
          <br />
          <Theme config={wrapView}>
            <Collapse activeValue={activeValue} onChange={this.handleChangeActiveValue}>
              <Panel value="1" header="LUGIA">
                <div>PanelContent...</div>
                <div>PanelContent...</div>
              </Panel>
              <Panel value="2" header="LUGIA">
                <div>PanelContent...</div>
                <div>PanelContent...</div>
              </Panel>
            </Collapse>
          </Theme>
          <br />
        </Wrapper>
      </div>
    );
  }
}
