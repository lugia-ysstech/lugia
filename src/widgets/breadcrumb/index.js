import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import BREADCRUMB from '@lugia/lugia-web/dist/breadcrumb/lugia.breadcrumb.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const DefaultBreadcrumb =  require('./DefaultBreadcrumb').default;  const IconBreadcrumb =  require('./IconBreadcrumb').default;  const SeparatorBreadcrumb =  require('./SeparatorBreadcrumb').default;  const RoutesBreadcrumb =  require('./RoutesBreadcrumb').default;  
        
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
                              <Title title={'面包屑'} subTitle={'Breadcrumb'} desc={'显示系统的层级关系和当先所在的位置,并能向上返回'} />
                              <Demo title={'基本用法'} titleID={'breadcrumb-0'} code={<code>{ `/**\n * create by szfeng\n */\nimport React from \'react\';\nimport { Breadcrumb } from \'@lugia/lugia-web\';\n\nexport default class DefaultBreadcrumb extends React.Component<any, any> {\n  render() {\n    return (\n      <Breadcrumb>\n        <Breadcrumb.Item href=\"breadcrumb\">首页</Breadcrumb.Item>\n        <Breadcrumb.Item href=\"breadcrumb\">二级面包屑</Breadcrumb.Item>\n        <Breadcrumb.Item href=\"breadcrumb\">三级面包屑</Breadcrumb.Item>\n        <Breadcrumb.Item>四级面包屑</Breadcrumb.Item>\n      </Breadcrumb>\n    );\n  }\n}\n`}</code>} desc={'通过Breadcrumb.Item使用,使用href属性跳转页面,href传入的是完整的路径'}  demo={<DefaultBreadcrumb />}></Demo><Demo title={'带图标的Breadcrumb'} titleID={'breadcrumb-1'} code={<code>{ `/**\n * create by szfeng\n */\nimport React from \'react\';\nimport { Breadcrumb, Icon } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst CommonIcon = styled(Icon)\`\n    margin-right: 5px;\n\`;\n\nexport default class IconBreadcrumb extends React.Component<any, any> {\n  render() {\n    return (\n      <Breadcrumb>\n        <Breadcrumb.Item href=\"component/breadcrumb\">\n          <CommonIcon iconClass=\"lugia-icon-logo_windows\" />\n          <span>首页</span>\n        </Breadcrumb.Item>\n        <Breadcrumb.Item href=\"component/breadcrumb\">\n          <CommonIcon iconClass=\"lugia-icon-logo_lugia\" />\n          <span>二级面包屑</span>\n        </Breadcrumb.Item>\n        <Breadcrumb.Item href=\"component/breadcrumb\">\n          <CommonIcon iconClass=\"lugia-icon-logo_twitter\" />\n          <span>三级面包屑</span>\n        </Breadcrumb.Item>\n        <Breadcrumb.Item>\n          <CommonIcon iconClass=\"lugia-icon-logo_codepen_ciecle\" />\n          <span>四级面包屑</span>\n        </Breadcrumb.Item>\n      </Breadcrumb>\n    );\n  }\n}\n`}</code>} desc={'配合Icon使用,生成图标'}  demo={<IconBreadcrumb />}></Demo><Demo title={'分隔符'} titleID={'breadcrumb-2'} code={<code>{ `/**\n * create by szfeng\n */\nimport React from \'react\';\nimport { Breadcrumb } from \'@lugia/lugia-web\';\n\nexport default class SeparatorBreadcrumb extends React.Component<any, any> {\n  render() {\n    return (\n      <Breadcrumb separator={\'>\'}>\n        <Breadcrumb.Item href=\"breadcrumb\">首页</Breadcrumb.Item>\n        <Breadcrumb.Item href=\"breadcrumb\">二级面包屑</Breadcrumb.Item>\n        <Breadcrumb.Item href=\"breadcrumb\">三级面包屑</Breadcrumb.Item>\n        <Breadcrumb.Item>四级面包屑</Breadcrumb.Item>\n      </Breadcrumb>\n    );\n  }\n}\n`}</code>} desc={'可以自定义分隔符'}  demo={<SeparatorBreadcrumb />}></Demo><Demo title={'routes生成Breadcrumb'} titleID={'breadcrumb-3'} code={<code>{ `/**\n * create by szfeng\n */\nimport React from \'react\';\nimport { Breadcrumb } from \'@lugia/lugia-web\';\n\nconst routes = [\n  {\n    path: \'index\',\n    title: \'首页\'\n  },\n  {\n    path: \'first\',\n    title: \'一级面包屑\'\n  },\n  {\n    path: \'second:id\',\n    title: \'二级面包屑:id\'\n  },\n  {\n    path: \'third\',\n    title: \'四级面包屑\'\n  }\n];\n\nexport default class RoutesBreadcrumb extends React.Component<any, any> {\n  render() {\n    return <Breadcrumb routes={routes} params={{ id: \'params\' }} />;\n  }\n}\n`}</code>} desc={'通过传入routes数据使用,可以通过params传入参数'}  demo={<RoutesBreadcrumb />}></Demo>
                              <EditTables dataSource={BREADCRUMB} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#breadcrumb-0'} /><Link title={'带图标的Breadcrumb'} href={'#breadcrumb-1'} /><Link title={'分隔符'} href={'#breadcrumb-2'} /><Link title={'routes生成Breadcrumb'} href={'#breadcrumb-3'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        