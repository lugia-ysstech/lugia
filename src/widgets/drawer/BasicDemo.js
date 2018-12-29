import React from 'react';
import {Drawer} from '@lugia/lugia-web';

export default class DrawerDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false
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
    render() {
        const {visible} = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.openDrawer}>
                    click me
                </Button>
                <Drawer title="Basic Drawer" onClose={this.onClick} visible={visible}>
                    <p>Basic Drawer</p>
                    <p>Basic Drawer</p>
                    <p>Basic Drawer</p>
                </Drawer>
            </div>
        );
    }
}
