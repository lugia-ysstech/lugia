import React from 'react';
import {Collapse } from '@lugia/lugia-web';

const Panel = Collapse.Panel;

export default class CheckBoxDemo extends React.Component {
    render() {
        return (
            <div>
                <Collapse defaultActiveValue={'1'}>
                    <Panel value="1" title="LUGIA">
                        <div>PanelContent...</div>
                        <div>PanelContent...</div>
                    </Panel>
                    <Panel value="2" title="LUGIA">
                        <div>PanelContent...</div>
                        <div>PanelContent...</div>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
