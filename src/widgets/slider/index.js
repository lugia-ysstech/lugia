import  React from 'react';
import  Test from './test/demo';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table';
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import SLIDER from '@lugia/lugia-web/dist/slider/lugia.slider.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseSlider =  require('./BaseSlider').default;  const InputSlider =  require('./InputSlider').default;  const IconSlider =  require('./IconSlider').default;  const TipsSlider =  require('./TipsSlider').default;  const ValueSlider =  require('./ValueSlider').default;  const MarksSlider =  require('./MarksSlider').default;  const DisabledSlider =  require('./DisabledSlider').default;  const VerticalSlider =  require('./VerticalSlider').default;

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
