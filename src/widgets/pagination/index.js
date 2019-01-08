import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import PAGINATION from '@lugia/lugia-web/dist/pagination/lugia.pagination.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'分页'} subTitle={'Pagination'} desc={'分页组件，分页展示数据。'} />
                            <Demo title={'基本用法'} titleID={'pagination-0'} code={<code>{ 'import React from \'react\';\nimport {Pagination} from \'@lugia/lugia-web\';\n\nexport default class PaginationDemo extends React.Component {\n  render() {\n    return (\n      <Pagination defaultCurrent={1} total={50} />\n    );\n  }\n}\n'}</code>} desc={'最简单的用法'}  demo={<BasicDemo />}></Demo>
                            <EditTables dataSource={PAGINATION} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#pagination-0'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         }   
        
