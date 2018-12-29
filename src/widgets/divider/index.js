import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import DIVIDER from '@lugia/lugia-web/dist/divider/lugia.divider.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const TypeDivider =  require('./TypeDivider').default;  const PositionDivider =  require('./PositionDivider').default;  const VerticalDivider =  require('./VerticalDivider').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'分割线'} subTitle={'Divider'} desc={'区隔内容的分割线'} />
                            <Demo title={'分割线风格'} titleID={'divider-0'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Divider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\n\nconst Wrapper = styled.div`margin-left: 50px;\n`;\nexport default class TypeDivider extends React.Component<any, any> {\n\n  render () {\n    return (\n      <Wrapper>\n        <Divider content={\'solid\'} type=\"horizontal\" />\n        <br/>\n        <Divider dashed={true} content={\'dashed\'} />\n      </Wrapper>);\n  }\n}\n`}</code>} desc={'可以选择虚线, 实线的分割线'}  demo={<TypeDivider />}></Demo><Demo title={'分割线位置'} titleID={'divider-1'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Divider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  margin-left: 50px;\n`;\nexport default class PositionDivider extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <Divider content=\"position left\" position=\"left\" />\n        <Divider content=\"position right\" position=\"right\" />\n        <Divider content=\"position center\"  />\n        <Divider />\n        <p>\"不用思考.因为我帮你想好了\",这是lugia设计的重要原则之一.</p>\n        <Divider />\n      </Wrapper>\n    );\n  }\n}\n`}</code>} desc={'可以选择左边 右边,默认居中 '}  demo={<PositionDivider />}></Demo><Demo title={'分割线风格'} titleID={'divider-2'} code={<code>{ `/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Divider } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  margin-left: 50px;\n`;\nexport default class VerticalDivider extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <p>type vertical</p>\n        <div style={{ height: 20 }}>\n          text\n          <Divider type=\"vertical\" />\n          text\n          <Divider type=\"vertical\" />\n          text\n          <Divider type=\"vertical\" />\n          text\n          <Divider type=\"vertical\" />\n          text\n        </div>\n      </Wrapper>\n    );\n  }\n}\n`}</code>} desc={'可以选择虚线, 实线的分割线'}  demo={<VerticalDivider />}></Demo>
                            <EditTables dataSource={DIVIDER} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'分割线风格'} href={'#divider-0'} /><Link title={'分割线位置'} href={'#divider-1'} /><Link title={'分割线风格'} href={'#divider-2'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         }   
        