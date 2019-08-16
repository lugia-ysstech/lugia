import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import AFFIX from '@lugia/lugia-web/dist/affix/lugia.affix.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const TargetDemo =  require('./TargetDemo').default;  const CallBackDemo =  require('./CallBackDemo').default;  
        
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
                              <Title title={'固钉'} subTitle={'Affix'} desc={'将元素展示在可视区域。'} />
                              <Demo title={'基本用法'} titleID={'affix-0'} code={<code>{ `import * as React from \'react\';\nimport {Affix,Button} from \'@lugia/lugia-web\';\n\nexport default class BasicDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Affix offsetTop={20}>\n          <Button type=\"primary\">Affix top</Button>\n        </Affix>\n        <br />\n        <Affix offsetBottom={20}>\n          <Button type=\"primary\">Affix bottom</Button>\n        </Affix>\n      </div>\n    );\n  }\n}\n`}</code>} desc={'最简单的用法'}  demo={<BasicDemo />}></Demo><Demo title={'指定容器'} titleID={'affix-1'} code={<code>{ `import * as React from \'react\';\nimport {Affix,Button} from \'@lugia/lugia-web\';\n\nexport default class BasicDemo extends React.Component {\n  render() {\n    return (\n      <div>\n        <div\n          style={{ width: \'200px\', height: \'200px\', overflowY: \'scroll\' }}\n          ref={node => (this.EleRef = node)}\n        >\n          <div style={{ height: \'400px\' }}>\n            <div style={{ width: \'20px\', height: \'100px\' }} />\n            <Affix offsetTop={20} target={() => this.EleRef}>\n              <Button type=\"primary\">target top</Button>\n            </Affix>\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n`}</code>} desc={'指定固定的容器'}  demo={<TargetDemo />}></Demo><Demo title={'状态改变回调'} titleID={'affix-2'} code={<code>{ `import * as React from \'react\';\nimport {Affix,Button} from \'@lugia/lugia-web\';\n\nexport default class BasicDemo extends React.Component {\n  handleChange = res => {\n    console.info(res);\n  };\n  render() {\n    return (\n      <div>\n        <Affix offsetTop={20}>\n          <Button type=\"primary\" onChange={this.handleChange}>\n            Affix top\n          </Button>\n        </Affix>\n      </div>\n    );\n  }\n}\n`}</code>} desc={'状态改变时的回调'}  demo={<CallBackDemo />}></Demo>
                              <EditTables dataSource={AFFIX} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#affix-0'} /><Link title={'指定容器'} href={'#affix-1'} /><Link title={'状态改变回调'} href={'#affix-2'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        