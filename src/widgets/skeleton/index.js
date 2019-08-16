import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import SKELETON from '@lugia/lugia-web/dist/skeleton/lugia.skeleton.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const DefaultSkeleton =  require('./DefaultSkeleton').default;  const ParagraphSkeleton =  require('./ParagraphSkeleton').default;  const MultiSkeleton =  require('./MultiSkeleton').default;  const AnimationSkeleton =  require('./AnimationSkeleton').default;  const SwitchSkeleton =  require('./SwitchSkeleton').default;  
        
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
                              <Title title={'加载占位符'} subTitle={'Skeleton'} desc={'在等待加载内容时，提供一个占位的图形组合'} />
                              <Demo title={'基本用法'} titleID={'skeleton-0'} code={<code>{ `import React from \'react\';\nimport { Skeleton } from \'@lugia/lugia-web\';\n\nexport default class DefaultSkeleton extends React.Component {\n  render() {\n    return <Skeleton />;\n  }\n}\n`}</code>} desc={'默认的占位符组合'}  demo={<DefaultSkeleton />}></Demo><Demo title={'只有段落的占位符'} titleID={'skeleton-1'} code={<code>{ `import React from \'react\';\nimport { Skeleton } from \'@lugia/lugia-web\';\n\nexport default class Paragraph extends React.Component {\n  render() {\n    return (\n      <Skeleton\n        avatar={false}\n        paragraph={{ rows: 6 }}\n        titleWidth={100}\n        paragraphWidth={[200, 300, 400, 400, 350, 250]}\n      />\n    );\n  }\n}\n`}</code>} desc={'通过avatar：false隐藏头像占位符，默认为true。'}  demo={<ParagraphSkeleton />}></Demo><Demo title={'更复杂的占位符'} titleID={'skeleton-2'} code={<code>{ `import React from \'react\';\nimport { Skeleton } from \'@lugia/lugia-web\';\n\nexport default class MultiSkeleton extends React.Component {\n  render() {\n    return (\n      <Skeleton\n        picture={true}\n        pictureWidth={200}\n        pictureHeight={100}\n        titleWidth={100}\n        paragraphWidth={[200, 300, 200]}\n      />\n    );\n  }\n}\n`}</code>} desc={'带有头像和图片占位符，pictureWidth和pictureHeight分别控制图像占位符的宽度和高度'}  demo={<MultiSkeleton />}></Demo><Demo title={'带动画的占位符'} titleID={'skeleton-3'} code={<code>{ `import React from \'react\';\nimport { Skeleton } from \'@lugia/lugia-web\';\n\nexport default class AnimationSkeleton extends React.Component {\n  render() {\n    return (\n      <Skeleton\n        picture={true}\n        pictureWidth={200}\n        pictureHeight={100}\n        titleWidth={100}\n        paragraphWidth={[200, 300, 200]}\n        animation={true}\n      />\n    );\n  }\n}\n`}</code>} desc={'通过animation控制是否开启动画，默认为false'}  demo={<AnimationSkeleton />}></Demo><Demo title={'包含子组件'} titleID={'skeleton-4'} code={<code>{ `import React from \'react\';\nimport styled from \'styled-components\';\nimport { Skeleton, Button } from \'@lugia/lugia-web\';\n\nconst ButtonWrap = styled.div\`\n  margin-bottom: 20px;\n\`;\n\nconst Box = styled.div\`\n  height: 136px;\n  width: 732px;\n  display: inline-block;\n\`;\n\nconst H = styled.p\`\n  font-size: 16px;\n  font-weight: 900;\n  line-height: 26px;\n  color: #666;\n\`;\n\nconst P = styled.p\`\n  font-size: 14px;\n  font-weight: 900;\n  color: #666;\n  line-height: 22px;\n\`;\n\nexport default class SwitchSkeleton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { loading: true };\n  }\n\n  render() {\n    return (\n      <div>\n        <ButtonWrap>\n          <Button onClick={this.handleClickButton}>点击切换</Button>\n        </ButtonWrap>\n        <Skeleton avatar={true} animation={true} loading={this.state.loading}>\n          <Box>\n            <H>标题</H>\n            <P>如今，在各大互联网公司，他们都有属于自己的开源设计规范。</P>\n            <P>\n              页面的重点应该在形式上的有没和科学上的简洁,在解决用户需求行为时要大胆,用于创新。\n            </P>\n            <P>敢于解决当今金融市场软件上的刚性需求点。</P>\n          </Box>\n        </Skeleton>\n      </div>\n    );\n  }\n\n  handleClickButton = () => {\n    const { loading } = this.state;\n    this.setState({ loading: !loading });\n  };\n}\n`}</code>} desc={'占位符包裹子组件,通过loading实现占位符和子组件的切换'}  demo={<SwitchSkeleton />}></Demo>
                              <EditTables dataSource={SKELETON} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#skeleton-0'} /><Link title={'只有段落的占位符'} href={'#skeleton-1'} /><Link title={'更复杂的占位符'} href={'#skeleton-2'} /><Link title={'带动画的占位符'} href={'#skeleton-3'} /><Link title={'包含子组件'} href={'#skeleton-4'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        