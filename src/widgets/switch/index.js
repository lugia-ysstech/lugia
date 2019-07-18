import  React from 'react';
import  Test from './test/demo';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table';
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import SWITCH from '@lugia/lugia-web/dist/switch/lugia.switch.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseSwitch =  require('./BaseSwitch').default;  const SizeSwitch =  require('./SizeSwitch').default;  const DataSwitch =  require('./DataSwitch').default;  const InverseSwitch =  require('./InverseSwitch').default;  const DisabledSwitch =  require('./DisabledSwitch').default;  const LoadingSwitch =  require('./LoadingSwitch').default;  const OnfocusSwitch =  require('./OnfocusSwitch').default;

        const { Link } = Anchor;
        const { Row,Col } = Grid;

      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                  <Test/>
                )
            }
         });
