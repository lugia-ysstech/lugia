import  React from 'react';
import Test from './test/demo';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import RATE from '@lugia/lugia-web/dist/rate/lugia.rate.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseRate =  require('./BaseRate').default;  const ReadOnlyDemo =  require('./ReadOnlyDemo').default;  const HalfRateDemo =  require('./HalfRateDemo').default;  const CustomRateDemo =  require('./CustomRateDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
        render(){
          return (<Test/>)
        }
         });   
