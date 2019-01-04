import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import BACKTOP from '@lugia/lugia-web/dist/back-top/lugia.back-top.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const ThemeDemo =  require('./ThemeDemo').default;  const CustomDemo =  require('./CustomDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'回到顶部'} subTitle={'BackTop'} desc={'返回页面顶部。'} />
                            <Demo title={'基本'} titleID={'back-top-0'} code={<code>{ `import * as React from \'react\';\nimport {BackTop} from \'@lugia/lugia-web\';\n\nexport default class BackTopDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <div>\n                <BackTop />\n                <span>滚动浏览器可查看 BackTop</span>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'最简单的用法'}  demo={<BasicDemo />}></Demo><Demo title={'配置theme主题'} titleID={'back-top-1'} code={<code>{ `import * as React from \'react\';\nimport {BackTop,Theme} from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts/index\';\n\nexport default class BackTopDemo extends React.Component {\n\n    render() {\n        const view = {\n            [Widget.BackTop]: {\n                color: \'red\',\n                backgroundColor: \'orange\',\n            },\n        };\n        return (\n            <div>\n                <Theme config={view}>\n                    <BackTop />\n                </Theme>\n                <span>滚动浏览器可查看 BackTop</span>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'根据需要单独配置警告提示样式，可配置 color backgroundColor'}  demo={<ThemeDemo />}></Demo><Demo title={'可关闭'} titleID={'back-top-2'} code={<code>{ `import * as React from \'react\';\nimport {BackTop} from \'@lugia/lugia-web\';\n\nexport default class BackTopDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <div>\n                <BackTop />\n                <span>滚动浏览器可查看 BackTop</span>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'可以关闭的警告提示'}  demo={<CustomDemo />}></Demo>
                            <EditTables dataSource={BACKTOP} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本'} href={'#back-top-0'} /><Link title={'配置theme主题'} href={'#back-top-1'} /><Link title={'可关闭'} href={'#back-top-2'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         }   
        
