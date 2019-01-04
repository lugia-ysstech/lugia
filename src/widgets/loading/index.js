import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import LOADING from '@lugia/lugia-web/dist/loading/lugia.loading.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseLoad =  require('./BaseLoad').default;  const ScaleLoad =  require('./ScaleLoad').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'加载中'} subTitle={'Loading'} desc={'用于页面和区块的加载中状态'} />
                            <Demo title={'基本用法'} titleID={'loading-0'} code={<code>{ '/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Loading } from \'@lugia/lugia-web\';\nexport default class BaseLoad extends React.Component<any, any> {\n  render() {\n    return (\n      <div>\n        <Loading width={14} color={\'red\'} />\n      </div>\n    );\n  }\n}\n'}</code>} desc={'加载中基本用法'}  demo={<BaseLoad />}></Demo><Demo title={'基本用法'} titleID={'loading-1'} code={<code>{ '/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Loading } from \'@lugia/lugia-web\';\nexport default class ScaleLoad extends React.Component<any, any> {\n  render() {\n    return (\n        <Loading scale />\n    );\n  }\n}\n'}</code>} desc={'加载中基本用法'}  demo={<ScaleLoad />}></Demo>
                            <EditTables dataSource={LOADING} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#loading-0'} /><Link title={'基本用法'} href={'#loading-1'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         }   
        
