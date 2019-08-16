import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import MODAL from '@lugia/lugia-web/dist/modal/lugia.modal.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const AsyncDemo =  require('./AsyncDemo').default;  const FooterDemo =  require('./FooterDemo').default;  const ConfirmDemo =  require('./ConfirmDemo').default;  const MoreDemo =  require('./MoreDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev, isMobile = false} = this.props;
                const span = isMobile ? 24 : 20;
                const style = isMobile ? {} : {paddingRight: '50px'};
                return(
                    <Row>
                        <Col span={span}>
                          <div style={style}>
                              <Title title={'对话框'} subTitle={'Modal'} desc={'Modal 对话框。'} />
                              <Demo title={'基础对话框'} titleID={'modal-0'} code={<code>{ `import React from \'react\';\nimport {Button,Modal} from \'@lugia/lugia-web\';\n\nexport default class ModalDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            visible: false,\n        };\n    }\n    Click = () => {\n        this.setState({\n            visible: true\n        });\n    };\n    buttonClick = () => {\n        this.setState({\n            visible: false\n        });\n    };\n\n    render() {\n        return (\n            <div>\n                <Button onClick={this.Click}>Modal</Button>\n                <Modal\n                    visible={this.state.visible}\n                    title=\"这是标题！\"\n                    onOk={this.buttonClick}\n                    onCancel={this.buttonClick}\n                >\n                    这是内容！\n                </Modal>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'基础对话框'}  demo={<BasicDemo />}></Demo><Demo title={'异步关闭'} titleID={'modal-1'} code={<code>{ `import React from \'react\';\nimport {Button,Modal} from \'@lugia/lugia-web\';\n\nexport default class ModalDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            visible: false,\n            confirmLoading: false,\n        };\n    }\n    Click = () => {\n        this.setState({\n            visible: true\n        });\n    };\n    buttonClick = () => {\n        this.setState({\n            visible: false\n        });\n    };\n    loadingClick = () => {\n        this.setState({\n            confirmLoading: true,\n        });\n        setTimeout(() => {\n            this.setState({\n                visible: false,\n            });\n        }, 3000);\n    };\n\n    render() {\n        return (\n            <div>\n                <Button onClick={this.Click}>Modal</Button>\n                <Modal\n                    visible={this.state.visible}\n                    title=\"这是标题！\"\n                    confirmLoading={this.state.confirmLoading}\n                    onOk={this.loadingClick}\n                    onCancel={this.buttonClick}\n                >\n                    这是内容！\n                </Modal>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'点击确定按钮后先loading，之后在关闭对话框'}  demo={<AsyncDemo />}></Demo><Demo title={'自定义页脚'} titleID={'modal-2'} code={<code>{ `import React from \'react\';\nimport {Button,Modal} from \'@lugia/lugia-web\';\n\nexport default class ModalDemo extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            visible: false,\n        };\n    }\n    Click = () => {\n        this.setState({\n            visible: true\n        });\n    };\n    buttonClick = () => {\n        this.setState({\n            visible: false\n        });\n    };\n\n    render() {\n        return (\n            <div>\n                <Button onClick={this.Click}>自定义页脚</Button>\n                <Modal\n                    visible={this.state.visible}\n                    footer={[\n                        <Button type=\"primary\" onClick={this.buttonClick}>\n                            自定义页脚\n                        </Button>,\n                    ]}\n                    title=\"这是标题！\"\n                    onCancel={this.buttonClick}\n                >\n                    这是内容！\n                </Modal>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'可以根据需要自定义页脚按钮，不需要页脚可设置footer 为 null'}  demo={<FooterDemo />}></Demo><Demo title={'确认对话框'} titleID={'modal-3'} code={<code>{ `import React from \'react\';\nimport {Button,Modal} from \'@lugia/lugia-web\';\n\nexport default class ModalDemo extends React.Component {\n\n    render() {\n        return (\n            <Button onClick={() => Modal.confirm({ title: \'confirm\', content: \'this is confirm text!\' })}>\n                confirm\n            </Button>\n        );\n    }\n}\n`}</code>} desc={'快速弹出对话框'}  demo={<ConfirmDemo />}></Demo><Demo title={'信息提示'} titleID={'modal-4'} code={<code>{ `import React from \'react\';\nimport {Button,Modal} from \'@lugia/lugia-web\';\n\nexport default class ModalDemo extends React.Component {\n\n    render() {\n        return (\n            <div>\n                <Button type=\"primary\" onClick={() => Modal.info({ title: \'info\', content: \'this is info text!\' })}>\n                    info\n                </Button>&nbsp;&nbsp;\n                <Button type=\"success\" onClick={() => Modal.success({ title: \'success\', content: \'this is success text!\' })}>\n                    success\n                </Button>&nbsp;&nbsp;\n                <Button type=\"danger\" onClick={() => Modal.error({ title: \'error\', content: \'this is error text!\' })}>\n                    error\n                </Button>&nbsp;&nbsp;\n                <Button type=\"warning\" onClick={() => Modal.warning({ title: \'warning\', content: \'this is warning text!\' })}>\n                    warning\n                </Button>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'更多快速弹出对话框'}  demo={<MoreDemo />}></Demo>
                              <EditTables dataSource={MODAL} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基础对话框'} href={'#modal-0'} /><Link title={'异步关闭'} href={'#modal-1'} /><Link title={'自定义页脚'} href={'#modal-2'} /><Link title={'确认对话框'} href={'#modal-3'} /><Link title={'信息提示'} href={'#modal-4'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        