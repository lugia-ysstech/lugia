import React from 'react';
import {Transfer, Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

const treeData = [
    { text: '1', value: '1' },
    {
        text: '2',
        value: '2',
        children: [
            {
                text: '2.1',
                value: '2.1',
                children: [{ text: '2.1.1', value: '2.1.1' }, { text: '2.1.2', value: '2.1.2' }],
            },
            {
                text: '2.2',
                value: '2.2',
                children: [{ text: '2.2.1', value: '2.2.1' }, { text: '2.2.2', value: '2.2.2' }],
            },
        ],
    },
];

export default class TransferDemo extends React.Component {
    render() {
        const TransferView = {
            [Widget.Transfer]: {
                height: 400,
            },
        };
        return (
            <div>
                <Theme config={TransferView}>
                    <Transfer
                        data={treeData}
                        type="tree"
                        defaultSourceSelectedKeys={['2.2.1']}
                        defaultTargetSelectedKeys={['2.1.1']}
                        defaultValue={['3.1', '3.2', '2.1.1']}
                        showSearch
                        defaultDisplayValue={['dis1', 'dis2', '2.1.1']}
                    />
                </Theme>
            </div>
        );
    }
}
