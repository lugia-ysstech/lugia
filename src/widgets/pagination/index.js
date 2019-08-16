import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import PAGINATION from '@lugia/lugia-web/dist/pagination/lugia.pagination.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const MoreTotalDemo =  require('./MoreTotalDemo').default;  const SizeChangeDemo =  require('./SizeChangeDemo').default;  const JumperDemo =  require('./JumperDemo').default;  const SimpleDemo =  require('./SimpleDemo').default;  
        
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
                              <Title title={'分页'} subTitle={'Pagination'} desc={'分页组件，分页展示数据。'} />
                              <Demo title={'基本用法'} titleID={'pagination-0'} code={<code>{ `import React from \'react\';\nimport {Pagination} from \'@lugia/lugia-web\';\n\nexport default class PaginationDemo extends React.Component {\n  render() {\n    return (\n      <Pagination defaultCurrent={1} total={50} />\n    );\n  }\n}\n`}</code>} desc={'最简单的用法'}  demo={<BasicDemo />}></Demo><Demo title={'更多分页'} titleID={'pagination-1'} code={<code>{ `import React from \'react\';\nimport {Pagination} from \'@lugia/lugia-web\';\n\nexport default class PaginationDemo extends React.Component {\n  render() {\n    return (\n      <Pagination defaultCurrent={6} total={500} />\n    );\n  }\n}\n`}</code>} desc={'更多分页'}  demo={<MoreTotalDemo />}></Demo><Demo title={'改变每页条数'} titleID={'pagination-2'} code={<code>{ `import React from \'react\';\nimport {Pagination} from \'@lugia/lugia-web\';\n\nexport default class PaginationDemo extends React.Component {\n  onShowSizeChange = (current, pageSize) => {\n    console.log(current, pageSize);\n  };\n  render() {\n    return (\n      <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />\n    );\n  }\n}\n`}</code>} desc={'显示改变每页条数'}  demo={<SizeChangeDemo />}></Demo><Demo title={'快速跳转'} titleID={'pagination-3'} code={<code>{ `import React from \'react\';\nimport {Pagination} from \'@lugia/lugia-web\';\n\nexport default class PaginationDemo extends React.Component {\n  onChange = pageNumber => {\n    console.log(pageNumber);\n  };\n  render() {\n    return (\n      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />\n    );\n  }\n}\n`}</code>} desc={'快速跳转至某页'}  demo={<JumperDemo />}></Demo><Demo title={'简洁分页'} titleID={'pagination-4'} code={<code>{ `import React from \'react\';\nimport {Pagination} from \'@lugia/lugia-web\';\n\nexport default class PaginationDemo extends React.Component {\n  render() {\n    return (\n      <Pagination simple defaultCurrent={2} total={50} />\n    );\n  }\n}\n`}</code>} desc={'更加简洁的分页'}  demo={<SimpleDemo />}></Demo>
                              <EditTables dataSource={PAGINATION} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#pagination-0'} /><Link title={'更多分页'} href={'#pagination-1'} /><Link title={'改变每页条数'} href={'#pagination-2'} /><Link title={'快速跳转'} href={'#pagination-3'} /><Link title={'简洁分页'} href={'#pagination-4'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        