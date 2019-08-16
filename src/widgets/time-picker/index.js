import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import TIMEPICKER from '@lugia/lugia-web/dist/time-picker/lugia.time-picker.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseDemo =  require('./BaseDemo').default;  const FormatDemo =  require('./FormatDemo').default;  const ControlledDemo =  require('./ControlledDemo').default;  const DisabledDemo =  require('./DisabledDemo').default;  
        
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
                              <Title title={'时间选择器'} subTitle={'TimePicker'} desc={'用于时间选择,'} />
                              <Demo title={'基本'} titleID={'time-picker-0'} code={<code>{ `\nimport React from \'react\';\nimport { TimePicker } from \'@lugia/lugia-web\';\nimport {DemoItem} from \'./styled\';\nexport default class BaseDemo extends React.Component {\n  render() {\n    return  <div>\n              <DemoItem>\n                <TimePicker placeholder={\'选择时间\'}/>\n              </DemoItem>\n            </div> ;\n  }\n}\n`}</code>} desc={'时间组件基本用法'}  demo={<BaseDemo />}></Demo><Demo title={'时间格式'} titleID={'time-picker-1'} code={<code>{ `import React from \'react\';\nimport { TimePicker } from \'@lugia/lugia-web\';\nimport {DemoItem} from \'./styled\';\nexport default class BaseDemo extends React.Component {\n  render() {\n    return  <div>\n              <DemoItem>\n                <TimePicker defaultValue={\'23:09:09\'} format={\'HH:mm:ss\'}/>\n              </DemoItem>   \n              <br/>\n              <DemoItem>\n                <TimePicker defaultValue={\'23时09分09秒\'} format={\'HH时mm分ss秒\'}/>\n              </DemoItem>   \n              <DemoItem>\n                <TimePicker defaultValue={\'23时09分\'} format={\'HH时mm分\'}/>\n              </DemoItem> \n            </div> ;\n  }\n}\n`}</code>} desc={'使用format指定时间格式，格式的部分内容省略时，对应列也会消失'}  demo={<FormatDemo />}></Demo><Demo title={'受控组件'} titleID={'time-picker-2'} code={<code>{ `\nimport React from \'react\';\nimport { TimePicker } from \'@lugia/lugia-web\';\nimport {DemoItem} from \'./styled\';\nexport default class BaseDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value:\'20:13:14\'};\n  }\n  onChange=obj => {\n    const {newValue}=obj;\n    this.setState({value:newValue});\n  }\n  render() {\n    return  <div>\n              <DemoItem>\n                <TimePicker value={this.state.value} format={\'HH:mm:ss\'} onChange={this.onChange}/>\n              </DemoItem>\n            </div> ;\n  }\n}\n`}</code>} desc={'需要value 和 onChange 配合使用'}  demo={<ControlledDemo />}></Demo><Demo title={'禁用'} titleID={'time-picker-3'} code={<code>{ `\nimport React from \'react\';\nimport { TimePicker } from \'@lugia/lugia-web\';\nimport {DemoItem} from \'./styled\';\nexport default class BaseDemo extends React.Component {\n  render() {\n    return  <div>\n              <DemoItem>\n                <TimePicker disabled defaultValue={\'23:09:09\'} format={\'HH:mm:ss\'} />\n              </DemoItem>\n            </div> ;\n  }\n}\n`}</code>} desc={'disabled 属性，组件为不可用状态'}  demo={<DisabledDemo />}></Demo>
                              <EditTables dataSource={TIMEPICKER} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本'} href={'#time-picker-0'} /><Link title={'时间格式'} href={'#time-picker-1'} /><Link title={'受控组件'} href={'#time-picker-2'} /><Link title={'禁用'} href={'#time-picker-3'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        