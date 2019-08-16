import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import MESSAGE from '@lugia/lugia-web/dist/message/lugia.message.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const TypeDemo =  require('./TypeDemo').default;  const DelayDemo =  require('./DelayDemo').default;  
        
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
                              <Title title={'全局提示'} subTitle={'Message'} desc={'全局提示，展示操作反馈信息。'} />
                              <Demo title={'基础提示'} titleID={'message-0'} code={<code>{ `import React from \'react\';\nimport {Button, message} from \'@lugia/lugia-web\';\n\nexport default class MessageDemo extends React.Component {\n    showMessage = () => {\n        message.info(\'普通提示\', 2);\n    };\n    render() {\n        return (\n            <Button type=\"primary\" onClick={this.showMessage}>普通提示</Button>\n        );\n    }\n}\n`}</code>} desc={'全局信息提示'}  demo={<BasicDemo />}></Demo><Demo title={'更多提示类型'} titleID={'message-1'} code={<code>{ `import React from \'react\';\nimport {Button, message} from \'@lugia/lugia-web\';\n\nexport default class MessageDemo extends React.Component {\n    showMessage = type => () => {\n        message[type](\'消息提示\', 2);\n    };\n    render() {\n        return (\n            <div>\n                <Button type=\"success\" onClick={this.showMessage(\'success\')}>成功提示</Button>\n                <br />\n                <br />\n                <Button type=\"danger\" onClick={this.showMessage(\'error\')}>错误提示</Button>\n                <br />\n                <br />\n                <Button type=\"warning\" onClick={this.showMessage(\'warning\')}>警告提示</Button>\n                <br />\n                <br />\n                <Button onClick={this.showMessage(\'loading\')}>加载提示</Button>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'包括警告、失败、成功、加载等状态'}  demo={<TypeDemo />}></Demo><Demo title={'自定义时间'} titleID={'message-2'} code={<code>{ `import React from \'react\';\nimport {Button, message} from \'@lugia/lugia-web\';\n\nexport default class MessageDemo extends React.Component {\n    showMessage = () => {\n        message.info(\'普通提示\', 5);\n    };\n    render() {\n        return (\n            <Button type=\"primary\" onClick={this.showMessage}>普通提示</Button>\n        );\n    }\n}\n`}</code>} desc={'可以自定义时间来控制全局提示的消失时间，默认为2秒'}  demo={<DelayDemo />}></Demo>
                              <EditTables dataSource={MESSAGE} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基础提示'} href={'#message-0'} /><Link title={'更多提示类型'} href={'#message-1'} /><Link title={'自定义时间'} href={'#message-2'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        