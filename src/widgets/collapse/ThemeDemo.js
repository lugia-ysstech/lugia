import React from 'react';
import {Collapse,Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

const Panel = Collapse.Panel;

export default class CheckBoxDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            activeValue: '1',
        };
    }
    handleChangeActiveValue = obj => {
        console.info(obj.newValue);
        this.setState({
            activeValue: obj.newValue,
        });
    };
    render() {
        const wrapView = {
            [Widget.Collapse]: {
                width: 500,
                margin: 20,
            },
            [Widget.Panel]: {
                borderSize: 0,
            },
        };
        const {activeValue} = this.state;
        return (
            <div>
                <Theme config={wrapView}>
                    <Collapse activeValue={activeValue} onChange={this.handleChangeActiveValue}>
                        <Panel value="1" title="LUGIA">
                            <div>PanelContent...</div>
                            <div>PanelContent...</div>
                        </Panel>
                        <Panel value="2" title="LUGIA">
                            <div>PanelContent...</div>
                            <div>PanelContent...</div>
                        </Panel>
                    </Collapse>
                </Theme>
            </div>
        );
    }
}
