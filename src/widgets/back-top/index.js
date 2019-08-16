import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import BACKTOP from '@lugia/lugia-web/dist/back-top/lugia.back-top.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const ThemeDemo =  require('./ThemeDemo').default;  const CustomDemo =  require('./CustomDemo').default;  
        
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
                              <Title title={'回到顶部'} subTitle={'BackTop'} desc={'返回页面顶部。'} />
                              <Demo title={'基本'} titleID={'back-top-0'} code={<code>{ `import * as React from \'react\';\nimport {BackTop} from \'@lugia/lugia-web\';\n\nexport default class BackTopDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <div>\n                <BackTop visibilityHeight={100}/>\n                <span>滚动浏览器可查看 BackTop</span>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'最简单的用法'}  demo={<BasicDemo />}></Demo><Demo title={'配置theme主题'} titleID={'back-top-1'} code={<code>{ `import * as React from \'react\';\nimport {BackTop,Theme} from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts/index\';\nimport styled from \'styled-components\';\n\nconst Demo = styled.div\`\n  & > div > div {\n    bottom: 150px;\n  }\n\`;\n\nexport default class BackTopDemo extends React.Component {\n    render() {\n        const view = {\n            [Widget.BackTop]: {\n                color: \'#fff\',\n                backgroundColor: \'#4d63ff\',\n            },\n        };\n        return (\n            <Demo>\n                <Theme config={view}>\n                    <BackTop visibilityHeight={100} />\n                </Theme>\n                <span>滚动浏览器可查看 BackTop</span>\n            </Demo>\n        );\n    }\n}\n`}</code>} desc={'根据需要单独配置样式，可配置 color backgroundColor'}  demo={<ThemeDemo />}></Demo><Demo title={'可自定义Dom'} titleID={'back-top-2'} code={<code>{ `import * as React from \'react\';\nimport {BackTop} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst DemoBack = styled.div\`\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 4px;\n  border: 1px solid #e8e8e8;\n\`;\nconst Demo = styled.div\`\n  & > div > div {\n    bottom: 100px;\n  }\n\`;\n\nexport default class BackTopDemo extends React.Component<any, any> {\n    render() {\n        return (\n            <Demo>\n              <BackTop visibilityHeight={100}>\n                <DemoBack>UP</DemoBack>\n              </BackTop>\n                <span>滚动浏览器可查看 BackTop</span>\n            </Demo>\n        );\n    }\n}\n`}</code>} desc={'可以自己定义被包裹元素来进行展示'}  demo={<CustomDemo />}></Demo>
                              <EditTables dataSource={BACKTOP} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本'} href={'#back-top-0'} /><Link title={'配置theme主题'} href={'#back-top-1'} /><Link title={'可自定义Dom'} href={'#back-top-2'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        