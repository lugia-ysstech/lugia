import React from 'react';
import {Drawer, Radio, Button} from '@lugia/lugia-web';
import styled from 'styled-components';

const RadioGroup = Radio.Group;
const RadioBox = styled.div`
  margin-bottom: 10px;
`;

export default class DrawerDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            radioValue: 'right'
        };
    }
    openDrawer = () => {
        this.setState({
            visible: true
        });
    };
    onClick= () => {
        this.setState({
            visible: false
        });
    };
    handleChange = obj => {
        this.setState({
            radioValue: obj.newValue,
        });
    };
    render() {
        const {visible, radioValue} = this.state;
        return (
            <div>
                <RadioBox>
                    <RadioGroup value={radioValue} onChange={this.handleChange}>
                        <Radio value="right">right</Radio>
                        <Radio value="left">left</Radio>
                        <Radio value="top">top</Radio>
                        <Radio value="bottom">bottom</Radio>
                    </RadioGroup>
                </RadioBox>
                <Button type="primary" onClick={this.openDrawer}>
                    click me
                </Button>

                <Drawer
                    title="Direction Drawer"
                    placement={radioValue}
                    onClose={this.onClick}
                    visible={visible}
                >
                    <p>Direction Drawer</p>
                    <p>Direction Drawer</p>
                    <p>Direction Drawer</p>
                </Drawer>
            </div>
        );
    }
}
