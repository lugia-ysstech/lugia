/**
 *
 * create by ligx
 *
 * @flow
 */
import React from 'react';
import { Tree, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

const { TreeNode } = Tree;

const bigTree = [];

function getStringKey() {
    for (let a = 0; a < 5; a++) {
        bigTree.push({
            key: `${a}`,
            title: `${a}`,
        });
        for (let b = 0; b < 5; b++) {
            const keyb = `${a}.${b}`;
            bigTree.push({
                key: keyb,
                title: keyb,
                pid: `${a}`,
                path: `${a}`,
            });
            for (let c = 0; c < 20; c++) {
                const keyc = `${a}.${b}.${c}`;
                bigTree.push({
                    key: keyc,
                    title: keyc,
                    pid: `${keyb}`,
                    path: `${a}/${keyb}`,
                });
                for (let d = 0; d < 400; d++) {
                    const key = `${a}.${b}.${c}.${d}`;
                    bigTree.push({
                        key,
                        title: key,
                        pid: `${keyc}`,
                        isLeaf: true,
                        path: `${a}/${keyb}/${keyc}`,
                    });
                }
            }
        }
    }
}

getNumberKey();

function getNumberKey() {
    let key = 0;
    for (let a = 0; a < 5; a++) {
        const keyA = key++;
        bigTree.push({
            key: `${keyA}`,
            title: `${a}`,
        });
        for (let b = 0; b < 5; b++) {
            const titleB = `${a}.${b}`;
            const keyb = key++;
            bigTree.push({
                key: keyb,
                title: titleB,
                pid: `${keyA}`,
                path: `${keyA}`,
            });
            for (let c = 0; c < 20; c++) {
                const titleC = `${a}.${b}.${c}`;
                const keyc = key++;
                bigTree.push({
                    key: keyc,
                    title: titleC,
                    pid: `${keyb}`,
                    path: `${keyA}/${keyb}`,
                });
                for (let d = 0; d < 400; d++) {
                    const title = `${a}.${b}.${c}.${d}`;
                    const keyD = key++;
                    bigTree.push({
                        key: keyD,
                        title,
                        pid: `${keyc}`,
                        isLeaf: true,
                        path: `${keyA}/${keyb}/${keyc}`,
                    });
                }
            }
        }
    }
}

const now = new Date();
const len = bigTree.length;
let root = 0;
for (let i = 0; i < len; i++) {
    const node = bigTree[i];
    if (!node.pid) {
        root++;
    }
}
// console.info(new Date() - now);
const onSelect = (selectedKeys, info) => { },
    onCheck = (checkedKeys, info) => { };

const rowData = [
    { key: '1', title: '1' },
    { key: '1.1', title: '1.1', pid: '1', path: '1' },
    { key: '1.1.1', title: '1.1.1', pid: '1.1', path: '1/1.1' },
    { key: '1.1.1.1', title: '1.1.1.1', pid: '1.1.1', path: '1/1.1/1.1.1' },
    {
        key: '1.1.1.1.1',
        title: '1.1.1.1.1',
        pid: '1.1.1.1',
        path: '1/1.1/1.1.1/1.1.1.1',
        isLeaf: true,
    },
    { key: '1.2', title: '1.2', pid: '1', path: '1' },
    { key: '1.2.1', title: '1.2.1', pid: '1.2', path: '1/1.2', isLeaf: true },
    { key: '1.2.2', title: '1.2.2', pid: '1.2', path: '1/1.2' },
    { key: '1.2.2.1', title: '1.2.2.1', pid: '1.2.2', path: '1/1.2/1.2.2' },
    {
        key: '1.2.2.1.1',
        title: '1.2.2.1.1',
        pid: '1.2.2.1',
        path: '1/1.2/1.2.2/1.2.2.1',
        isLeaf: true,
    },
    {
        key: '1.2.2.1.2',
        title: '1.2.2.1.2',
        pid: '1.2.2.1',
        path: '1/1.2/1.2.2/1.2.2.1',
        isLeaf: true,
    },
    { key: '1.2.2.2', title: '1.2.2.2', pid: '1.2.2', path: '1/1.2/1.2.2', isLeaf: true },

    { key: '1.3', title: '1.3', pid: '1', path: '1' },
    { key: '1.3.1', title: '1.3.1', pid: '1.3', path: '1/1.3' },
    { key: '1.3.1.1', title: '1.3.1.1', pid: '1.3.1', path: '1/1.3/1.3.1', isLeaf: true },
    { key: '1.3.1.2', title: '1.3.1.2', pid: '1.3.1', path: '1/1.3/1.3.1', isLeaf: true },
    { key: '1.3.2', title: '1.3.2', pid: '1.3', path: '1/1.3' },
    { key: '1.3.2.1', title: '1.3.2.1', pid: '1.3.2', path: '1/1.3/1.3.2', isLeaf: true },
    { key: '1.3.2.2', title: '1.3.2.2', pid: '1.3.2', path: '1/1.3/1.3.2', isLeaf: true },
    { key: '1.3.3', title: '1.3.3', pid: '1.3', path: '1/1.3', isLeaf: true },

    { key: '2', title: '2' },
    { key: '2.1', title: '2.1', pid: '2', path: '2' },
    { key: '2.1.1', title: '2.1.1', pid: '2.1', path: '2/2.1', isLeaf: true },
    { key: '2.1.2', title: '2.1.2', pid: '2.1', path: '2/2.1' },
    { key: '2.1.2.1', title: '2.1.2.1', pid: '2.1.2', path: '2/2.1/2.1.2', isLeaf: true },
    { key: '2.2', title: '2.2', pid: '2', path: '2' },
    { key: '2.2.1', title: '2.2.1', pid: '2.2', path: '2/2.2' },
    { key: '2.2.1.1', title: '2.2.1.1', pid: '2.2.1', path: '2/2.2/2.2.1', isLeaf: true },
    { key: '2.2.1.2', title: '2.2.1.2', pid: '2.2.1', path: '2/2.2/2.2.1', isLeaf: true },
    { key: '2.2.2', title: '2.2.2', pid: '2.2', path: '2/2.2', isLeaf: true },

    { key: '3', title: '3' },
    { key: '3.1', title: '3.1', pid: '3', path: '3', isLeaf: true },
    { key: '3.2', title: '3.2', pid: '3', path: '3', isLeaf: true },
    { key: '4', title: '4', isLeaf: true },
];

// console.info(bigTree.length);

class LimitTree extends React.Component<Object, Object> {
    constructor(props) {
        super(props);
        const { value } = props;
        this.state = { value };
    }

    render() {
        const { value } = this.state;
        // console.info('render', value);
        return [
            <Tree
                expandAll
                {...this.props}
                // value={value}
                onChange={this.onChange}
            />
        ];
    }

    onChange = (value, displayValue) => {
        console.info(value);
        // this.setState({ value, });
    };
    all: boolean;
    onClick = () => {
        this.setState({ value: '1.1' });
    };
}

const config = {
    [Widget.Tree]: {
        height: 600,
    },
};
export default () => {
    return (
        <Theme config={config}>
            <LimitTree data={rowData} expandAll={true} mutliple={true} igronSelectField={'igron'} />
        </Theme>
    );
};
