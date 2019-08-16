import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import ANCHOR from '@lugia/lugia-web/dist/anchor/lugia.anchor.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const AffixDemo =  require('./AffixDemo').default;  const TypeDemo =  require('./TypeDemo').default;  
        
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
                              <Title title={'锚点'} subTitle={'Anchor'} desc={'用于跳转到页面指定位置。'} />
                              <Demo title={'基本用法'} titleID={'anchor-0'} code={<code>{ `import React from \'react\';\nimport {Anchor} from \'@lugia/lugia-web\';\n\nconst { Link } = Anchor;\n\nexport default class AnchorDemo extends React.Component {\n    render(){\n        return (\n            <Anchor slideType=\"circle\">\n              <Link title=\"基本用法\" href=\"#anchor-0\" />\n              <Link title=\"指定容器\" href=\"#anchor-1\" />\n              <Link title=\"固定状态改变的回调\" href=\"#anchor-2\" />\n            </Anchor>\n        );\n    }\n}\n`}</code>} desc={'最简单的用法'}  demo={<BasicDemo />}></Demo><Demo title={'指定容器'} titleID={'anchor-1'} code={<code>{ `import React from \'react\';\nimport {Anchor} from \'@lugia/lugia-web\';\n\nconst { Link } = Anchor;\n\nexport default class AnchorDemo extends React.Component {\n    render(){\n        return (\n            <div style={{marginLeft: \'200px\'}}>\n                <Anchor slideType=\"circle\" affix={false}>\n                    <Link title=\"基本用法\" href=\"#anchor-0\" />\n                    <Link title=\"指定容器\" href=\"#anchor-1\" />\n                    <Link title=\"固定状态改变的回调\" href=\"#anchor-2\" />\n                </Anchor>\n            </div>\n        );\n    }\n}\n`}</code>} desc={'指定滚动容器'}  demo={<AffixDemo />}></Demo><Demo title={'固定状态改变的回调'} titleID={'anchor-2'} code={<code>{ `import React from \'react\';\nimport {Anchor} from \'@lugia/lugia-web\';\n\nconst { Link } = Anchor;\n\nexport default class AnchorDemo extends React.Component {\n    render(){\n        return (\n            <div style={{marginLeft: \'400px\'}}>\n                <Anchor slideType=\"none\">\n                  <Link title=\"基本用法\" href=\"#anchor-0\" />\n                  <Link title=\"指定容器\" href=\"#anchor-1\" />\n                  <Link title=\"固定状态改变的回调\" href=\"#anchor-2\" />\n                </Anchor>\n            </div>\n\n        );\n    }\n}\n`}</code>} desc={'可以获取是否固定状态'}  demo={<TypeDemo />}></Demo>
                              <EditTables dataSource={ANCHOR} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#anchor-0'} /><Link title={'指定容器'} href={'#anchor-1'} /><Link title={'固定状态改变的回调'} href={'#anchor-2'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        