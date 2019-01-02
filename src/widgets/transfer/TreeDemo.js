import React from 'react';
import {Transfer} from '@lugia/lugia-web';

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
        return (
            <div>
                <Transfer
                    data={treeData}
                    type="tree"
                    showSearch
                />
            </div>
        );
    }
}
