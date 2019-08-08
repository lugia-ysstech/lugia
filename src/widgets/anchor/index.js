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
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'锚点'} subTitle={'Anchor'} desc={'用于跳转到页面指定位置。'} />
                              <Demo title={'基本用法'} titleID={'anchor-0'} code={<code>{ `import React from \'react\';
                              <EditTables dataSource={ANCHOR} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#anchor-0'} /><Link title={'指定容器'} href={'#anchor-1'} /><Link title={'固定状态改变的回调'} href={'#anchor-2'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         });   
        