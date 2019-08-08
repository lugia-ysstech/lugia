import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import TRANSFER from '@lugia/lugia-web/dist/transfer/lugia.transfer.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const LimitedDemo =  require('./LimitedDemo').default;  const SearchDemo =  require('./SearchDemo').default;  const ThemeDemo =  require('./ThemeDemo').default;  const TreeDemo =  require('./TreeDemo').default;  const LimitedTreeDemo =  require('./LimitedTreeDemo').default;  const DisplayTreeDemo =  require('./DisplayTreeDemo').default;  const TreeTreeDemo =  require('./TreeTreeDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'穿梭框'} subTitle={'Transfer'} desc={'穿梭框。'} />
                              <Demo title={'基本'} titleID={'transfer-0'} code={<code>{ `import React from \'react\';
                              <EditTables dataSource={TRANSFER} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本'} href={'#transfer-0'} /><Link title={'受控的穿梭框'} href={'#transfer-1'} /><Link title={'带搜索框'} href={'#transfer-2'} /><Link title={'可配置 Theme'} href={'#transfer-3'} /><Link title={'树形穿梭框'} href={'#transfer-4'} /><Link title={'受限的树形穿梭框'} href={'#transfer-5'} /><Link title={'树形穿梭框取消项'} href={'#transfer-6'} /><Link title={'树形穿梭框Theme'} href={'#transfer-7'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         });   
        