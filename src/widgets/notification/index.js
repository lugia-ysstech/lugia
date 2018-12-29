import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import notification from '@lugia/lugia-web/dist/notification/lugia.notification.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const DelayDemo =  require('./DelayDemo').default;  const IconDemo =  require('./IconDemo').default;  const DirectionDemo =  require('./DirectionDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'Notification 通知提醒框'} subTitle={'Notification'} desc={'Notification 通知提醒框。'} />
                            <Demo title={'基础提醒框'} titleID={'notification-0'} code={<code>{ "import React from \'react\';\nimport {Button,notification} from \'@lugia/lugia-web\';\n\nexport default class NotificationDemo extends React.Component {\n    defaultOpen = () => {\n        notification.open({ title: \'今天天气很好！\', description: \'因为今天的太阳很大。\' });\n    };\n    render() {\n        return (\n            <Button onClick={this.defaultOpen}>基本用法</Button>\n        );\n    }\n}\n"}</code>} desc={'基础的通知提醒框'}  demo={<BasicDemo />}></Demo><Demo title={'自定义延时'} titleID={'notification-1'} code={<code>{ "import React from \'react\';\nimport {Button,notification} from \'@lugia/lugia-web\';\n\nexport default class NotificationDemo extends React.Component {\n    durationOpen = duration => {\n        notification.open({ title: \'今天天气很好！\', description: \'因为今天的太阳很大。\', duration });\n    };\n    render() {\n        return (\n            <div>\n                <Button onClick={() => this.durationOpen(6)}>自定义延时关闭</Button>\n                &nbsp;&nbsp;\n                <Button onClick={() => this.durationOpen(0)}>自定义延时关闭</Button>\n            </div>\n        );\n    }\n}\n"}</code>} desc={'自定义延时关闭通知提醒框，设置为0则不关闭'}  demo={<DelayDemo />}></Demo><Demo title={'带图标'} titleID={'notification-2'} code={<code>{ "import React from \'react\';\nimport {Button,notification} from \'@lugia/lugia-web\';\n\nexport default class NotificationDemo extends React.Component {\n    statusOpen = type => {\n        notification[type]({ title: \'今天天气很好！\', description: \'因为今天的太阳很大。\' });\n    };\n    customIconOpen = icon => {\n        notification.open({ title: \'今天天气很好！\', description: \'因为今天的太阳很大。\', icon });\n    };\n    render() {\n        return (\n            <div>\n                <Button onClick={() => this.statusOpen(\'info\')}>info</Button>&nbsp;&nbsp;\n                <Button onClick={() => this.statusOpen(\'success\')}>success</Button>&nbsp;&nbsp;\n                <Button onClick={() => this.statusOpen(\'error\')}>error</Button>&nbsp;&nbsp;\n                <Button onClick={() => this.statusOpen(\'warning\')}>warning</Button>&nbsp;&nbsp;\n                <Button onClick={() => this.customIconOpen(\'lugia-icon-reminder_check_circle\')}>\n                    自定义图标\n                </Button>\n            </div>\n        );\n    }\n}\n"}</code>} desc={'带有图标的通知提醒框，也可以自定义图标'}  demo={<IconDemo />}></Demo><Demo title={'自定义方向'} titleID={'notification-3'} code={<code>{ "import React from \'react\';\nimport {Button,notification} from \'@lugia/lugia-web\';\n\nexport default class NotificationDemo extends React.Component {\n    placementOpen = placement => {\n        notification.open({\n            icon: \'lugia-icon-reminder_check_circle\',\n            title: \'今天天气很好！\',\n            description: \'因为今天的太阳很大。\',\n            placement,\n        });\n    };\n    render() {\n        return (\n            <div>\n                <Button onClick={() => this.placementOpen(\'bottomLeft\')}>\n                    bottomLeft\n                </Button>&nbsp;&nbsp;\n                <Button onClick={() => this.placementOpen(\'bottomRight\')}>\n                    bottomRight\n                </Button>&nbsp;&nbsp;\n                <Button onClick={() => this.placementOpen(\'topLeft\')}>topLeft</Button>\n            </div>\n        );\n    }\n}\n"}</code>} desc={'自定义快速弹出对话框弹出方向，共左上、左下、右上、右下四个方向'}  demo={<DirectionDemo />}></Demo>
                            <EditTables dataSource={notification} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基础提醒框'} href={'#notification-0'} /><Link title={'自定义延时'} href={'#notification-1'} /><Link title={'带图标'} href={'#notification-2'} /><Link title={'自定义方向'} href={'#notification-3'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         }   
        