import  React from 'react';
import  TestDemo from './test/demo';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import UPLOAD from '@lugia/lugia-web/dist/upload/lugia.upload.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseUpload =  require('./BaseUpload').default;  const FileListUpload =  require('./FileListUpload').default;  const CustomUpload =  require('./CustomUpload').default;  const PictureUpload =  require('./PictureUpload').default;  const DisabledUpload =  require('./DisabledUpload').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
        render(){
          return (
            <TestDemo/>
          )
        }
         });   
