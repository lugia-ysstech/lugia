import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import DIVIDER from '@lugia/lugia-web/dist/divider/lugia.divider.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const TypeDivider =  require('./TypeDivider').default;  const PositionDivider =  require('./PositionDivider').default;  const ContentDivider =  require('./ContentDivider').default;  const VerticalDivider =  require('./VerticalDivider').default;  
        
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
                              <Title title={'分割线'} subTitle={'Divider'} desc={'区隔内容的分割线'} />
                              <Demo title={'风格'} titleID={'divider-0'} code={<code>{ `import React from \'react\';\nimport { Divider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\n\nconst Wrapper = styled.div\`\n\`;\nexport default class TypeDivider extends React.Component<any, any> {\n\n  render () {\n    return (\n      <Wrapper>\n        <Divider content={\'solid\'} type=\"horizontal\" />\n        <br/>\n        <Divider dashed={true} content={\'dashed\'} />\n      </Wrapper>);\n  }\n}\n`}</code>} desc={'可以选择虚线，实线的分割线'}  demo={<TypeDivider />}></Demo><Demo title={'位置'} titleID={'divider-1'} code={<code>{ `import React from \'react\';\nimport { Divider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\n\`;\nexport default class PositionDivider extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <Divider content=\"position left\" position=\"left\" />\n        <Divider content=\"position right\" position=\"right\" />\n        <Divider content=\"position center\"  />\n      </Wrapper>\n    );\n  }\n}\n`}</code>} desc={'可以配置显示在标题的左边，右边，默认居中显示'}  demo={<PositionDivider />}></Demo><Demo title={'段落分割线'} titleID={'divider-2'} code={<code>{ `import React from \'react\';\nimport { Divider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\`;\nconst DividerContent = styled.div\`\n  line-height: 1.5;\n  padding: 0 10px;\n\`;\nexport default class ContentDivider extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <Divider />\n        <DividerContent>\n          \"不用思考.因为我帮你想好了\",这是lugia设计的重要原则之一.\n        </DividerContent>\n        <Divider />\n      </Wrapper>\n    );\n  }\n}\n`}</code>} desc={'段落间的分割线 '}  demo={<ContentDivider />}></Demo><Demo title={'垂直方向'} titleID={'divider-3'} code={<code>{ `import React from \'react\';\nimport { Divider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\n\`;\nexport default class VerticalDivider extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <div style={{ height: 20 }}>\n          text\n          <Divider type=\"vertical\" />\n          text\n          <Divider type=\"vertical\" />\n          text\n          <Divider type=\"vertical\" />\n          text\n          <Divider type=\"vertical\" />\n          text\n        </div>\n      </Wrapper>\n    );\n  }\n}\n`}</code>} desc={'可以设置给一行内容设置垂直方向分割线'}  demo={<VerticalDivider />}></Demo>
                              <EditTables dataSource={DIVIDER} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'风格'} href={'#divider-0'} /><Link title={'位置'} href={'#divider-1'} /><Link title={'段落分割线'} href={'#divider-2'} /><Link title={'垂直方向'} href={'#divider-3'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        