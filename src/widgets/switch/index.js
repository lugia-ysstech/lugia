import  React from 'react';
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
                const {next, prev, isMobile = false} = this.props;
                const span = isMobile ? 24 : 20;
                const style = isMobile ? {} : {paddingRight: '50px'};
                return(
                    <Row>
                        <Col span={span}>
                          <div style={style}>
                              <Title title={'开关'} subTitle={'Switch'} desc={'开关选择器'} />
                              <Demo title={'基本'} titleID={'switch-0'} code={<code>{ `import React from \'react\';\nimport { Switch } from \'@lugia/lugia-web\';\nexport default class BaseSwitch extends React.Component {\n  render() {\n    return (\n          <Switch defaultValue/>\n    );\n  }\n}\n`}</code>} desc={'开关组件基本用法'}  demo={<BaseSwitch />}></Demo><Demo title={'两种大小'} titleID={'switch-1'} code={<code>{ `import React from \'react\';\nimport { Switch } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  padding:0 0 10px 0;\n\`;\nexport default class BaseSwitch extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <DemoItem><Switch defaultValue /></DemoItem>\n        <DemoItem><Switch defaultValue size={\'small\'} /></DemoItem>\n      </React.Fragment>\n    );\n  }\n}\n`}</code>} desc={'属性size=\"small\"表示小号开关 '}  demo={<SizeSwitch />}></Demo><Demo title={'文字和图标'} titleID={'switch-2'} code={<code>{ `import React from \'react\';\nimport { Switch,Icon } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  padding:0 0 10px 0;\n\`;\n\nexport default class DataSwitch extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <DemoItem>\n          <Switch \n            defaultValue \n            data={[{ text: \'年\' }, { text: \'月\' }]} \n          />\n        </DemoItem>\n        <DemoItem>\n          <Switch \n            defaultValue \n            data={[{ text: \'开\' },{ text: \'关\' }]} \n          />\n        </DemoItem>\n        <DemoItem>\n          <Switch \n            defaultValue \n            displayFiled={\'left\'} \n            data={[\n              { text: \'开\',left: \'日\'},\n              { text: \'关\',left: \'月\'}\n            ]} \n          />\n        </DemoItem>\n          <Switch \n            defaultValue \n            data={[\n              { text: <Icon iconClass={\'lugia-icon-reminder_check\'} /> },\n              { text: <Icon iconClass={\'lugia-icon-reminder_close\'} /> }\n              ]} \n          />\n      </React.Fragment>\n    );\n  }\n}\n`}</code>} desc={'为开关配置文字和图标,通过属性displayFiled指定需要显示的文本,默认读取data中的text'}  demo={<DataSwitch />}></Demo><Demo title={'开关翻转'} titleID={'switch-3'} code={<code>{ `import React from \'react\';\nimport { Switch } from \'@lugia/lugia-web\';\nexport default class InverseSwitch extends React.Component {\n  render() {\n    return (\n          <Switch defaultValue isInverse />\n    );\n  }\n}\n`}</code>} desc={'isInverse属性设置反义开关'}  demo={<InverseSwitch />}></Demo><Demo title={'禁用'} titleID={'switch-4'} code={<code>{ `import React from \'react\';\nimport { Switch, Button } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  padding:0 0 20px 0;\n\`;\n\nexport default class DisabledSwitch extends React.Component {\n  state = {\n    disabled: true\n  };\n\n  toggle = () => {\n    this.setState({\n      disabled: !this.state.disabled\n    });\n  };\n\n  render() {\n    return (\n      <React.Fragment>\n        <DemoItem>\n          <Switch defaultValue disabled={this.state.disabled} />\n        </DemoItem>\n        <Button type=\"primary\" onClick={this.toggle}>\n          点击切换\n        </Button>     \n      </React.Fragment>\n    );\n  }\n}\n`}</code>} desc={'组件禁用状态'}  demo={<DisabledSwitch />}></Demo><Demo title={'加载'} titleID={'switch-5'} code={<code>{ `import React from \'react\';\nimport { Switch } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nexport const DemoItem=styled.div\`\n  padding:0 0 10px 0;\n\`;\nexport default class BaseSwitch extends React.Component{\n  render() {\n    return (\n      <React.Fragment>\n        <DemoItem>\n          <Switch loading />\n        </DemoItem>\n          <Switch size={\'small\'} loading />\n      </React.Fragment>\n    );\n  }\n}\n`}</code>} desc={'可以配置是否加载'}  demo={<LoadingSwitch />}></Demo><Demo title={'自动聚焦'} titleID={'switch-6'} code={<code>{ `import React from \'react\';\nimport { Switch } from \'@lugia/lugia-web\';\nexport default class OnfocusSwitch extends React.Component{\n  render() {\n    return (\n          <Switch defaultValue autoFocus/>\n    );\n  }\n}\n`}</code>} desc={'可以设置自动聚焦'}  demo={<OnfocusSwitch />}></Demo>
                              <EditTables dataSource={SWITCH} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本'} href={'#switch-0'} /><Link title={'两种大小'} href={'#switch-1'} /><Link title={'文字和图标'} href={'#switch-2'} /><Link title={'开关翻转'} href={'#switch-3'} /><Link title={'禁用'} href={'#switch-4'} /><Link title={'加载'} href={'#switch-5'} /><Link title={'自动聚焦'} href={'#switch-6'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        