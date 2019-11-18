import React from 'react';
import {Button,Modal} from '@lugia/lugia-web';

export default class ModalDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        };
    }
    Click = () => {
        this.setState({
            visible: true
        });
    };
    buttonClick = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.Click}>自定义页脚</Button>
                <Modal
                    visible={this.state.visible}
                    footer={[
                        <div style={{marginTop: "15px"}}>
                            <Button type="primary" onClick={this.buttonClick}>
                                自定义页脚
                            </Button>
                        </div>
                    ]}
                    title="这是标题！"
                    onCancel={this.buttonClick}
                >
                    这是内容！
                </Modal>
            </div>
        );
    }
}
