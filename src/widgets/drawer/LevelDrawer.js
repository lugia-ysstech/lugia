import React from 'react';
import {Drawer, Button} from '@lugia/lugia-web';

export default class DrawerDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible1: false,
            visible2: false,
            visible3: false
        };
    }
    openDrawer = cur => () => {
        this.setState({
            ['visible' + cur]: true,
        });
    };
    onClick = cur => () => {
        this.setState({
            ['visible' + cur]: false,
        });
    };
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.openDrawer(1)}>
                    click me
                </Button>

                <Drawer title="Drawer-Header" onClose={this.onClick(1)} visible={this.state.visible1}>
                    <p>First contents...</p>
                    <p>First contents...</p>
                    <p>First contents...</p>
                    <br/>
                    <Button type="primary" onClick={this.openDrawer(2)}>
                        Second Drawer
                    </Button>
                    <Drawer onClose={this.onClick(2)} visible={this.state.visible2}>
                        <p>Second contents...</p>
                        <p>Second contents...</p>
                        <p>Second contents...</p>
                        <br/>
                        <Button type="primary" onClick={this.openDrawer(3)}>
                            Three Drawer
                        </Button>
                        <Drawer onClose={this.onClick(3)} visible={this.state.visible3}>
                            <p>Three contents...</p>
                            <p>Three contents...</p>
                            <p>Three contents...</p>
                        </Drawer>
                    </Drawer>
                </Drawer>
            </div>
        );
    }
}
