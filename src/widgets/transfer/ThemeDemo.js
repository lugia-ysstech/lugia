import React from 'react';
import {Transfer, Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

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
        const TransferView = {
            [Widget.Transfer]: {
                height: 400,
            },
        };
        return (
            <div>
                <Theme config={TransferView}>
                    <Transfer
                        data={data}
                        showSearch
                        defaultSourceSelectedKeys={['选项5']}
                        defaultTargetSelectedKeys={['选项2']}
                        defaultValue={['选项2', '选项3', '选项4']}
                    />
                </Theme>
            </div>
        );
    }
}