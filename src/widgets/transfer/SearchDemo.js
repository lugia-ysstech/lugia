import React from 'react';
import {Transfer} from '@lugia/lugia-web';

const data = [
    { text: '选项1', value: '选项1', disabled: false },
    { text: '选项2', value: '选项2', disabled: false },
    { text: '选项3', value: '选项3', disabled: false },
    { text: '选项4', value: '选项4', disabled: false },
    { text: '选项5', value: '选项5', disabled: true },
    { text: '选项6', value: '选项6', disabled: false },
    { text: '选项7', value: '选项7', disabled: false },
    { text: '选项8', value: '选项8', disabled: false },
    { text: '选项9', value: '选项9', disabled: false },
    { text: '选项0', value: '选项0', disabled: true },
    { text: '选项10', value: '选项10', disabled: true },
];

export default class TransferDemo extends React.Component {
    render() {
        return (
            <div>
                <Transfer
                    showSearch
                    data={data}
                    defaultValue={['选项2', '选项3', '选项4']}
                />
            </div>
        );
    }
}
