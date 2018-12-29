import React from 'react';
import {Button,Modal} from '@lugia/lugia-web';

export default class ModalDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            confirmLoading: false,
        }
    }
    Click = () => {
        this.setState({
            visible: true
        })
    };
    buttonClick = () => {
        this.setState({
            visible: false
        })
    };
    loadingClick = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
            });
        }, 3000);
    };

    render() {
        return (
            <div>
                <Button onClick={this.Click}>Modal</Button>
                <Modal
                    visible={this.state.visible}
                    title="这是标题！"
                    confirmLoading={this.state.confirmLoading}
                    onOk={this.loadingClick}
                    onCancel={this.buttonClick}
                >
                    这是内容！
                </Modal>
            </div>
        );
    }
}