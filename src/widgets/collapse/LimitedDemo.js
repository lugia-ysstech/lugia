import React from 'react';
import {Collapse } from '@lugia/lugia-web';

const Panel = Collapse.Panel;

export default class CheckBoxDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            activeValue: '1',
        };
    }
    handleChangeActiveValue = (obj: Object) => {
        console.info(obj.newValue);
        this.setState({
            activeValue: obj.newValue,
        });
    };
    render() {
        return (
            <div>
                <Collapse activeValue={this.state.activeValue} onChange={this.handleChangeActiveValue}>
                    <Panel value="1" header="LUGIA">
                        <div>PanelContent...</div>
                        <div>PanelContent...</div>
                    </Panel>
                    <Panel value="2" header="LUGIA">
                        <div>PanelContent...</div>
                        <div>PanelContent...</div>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
