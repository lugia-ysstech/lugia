import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import tooltip from '@lugia/lugia-web/dist/tooltip/lugia.tooltip.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseTooltip =  require('./BaseTooltip').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'文字提示'} subTitle={'Tooltip'} desc={'简单的文字气泡提示框'} />
                            <Demo title={'提示气泡框基本用法'} titleID={'tooltip-0'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Tooltip, Theme,Button } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\nconst Content = styled.div`\n  margin: 100px;\n`;\nconst ButtonDemo = styled(Button)`\n  width: 70px;\n`;\nexport default class BaseTooltip extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'\' };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    const text = <span>prompt text</span>;\n    const config = {\n      [Widget.Tooltip]: {\n        color: \'#fef0ef\',\n        fontColor: \'#000\'\n      }\n    };\n    return (\n      <Theme config={config}>\n        <Content className=\"demo\">\n          <div style={{ marginLeft: 70, whiteSpace: \'nowrap\' }}>\n            <Tooltip placement=\"topLeft\" title={text}>\n              <ButtonDemo type=\"primary\">TL</ButtonDemo>\n            </Tooltip>\n            <Tooltip placement=\"top\" title={text}>\n              <ButtonDemo type=\"primary\">Top</ButtonDemo>\n            </Tooltip>\n            <Tooltip placement=\"topRight\" title={text}>\n              <ButtonDemo type=\"primary\">TR</ButtonDemo>\n            </Tooltip>\n          </div>\n          <div style={{ width: 70, float: \'left\' }}>\n            <Tooltip placement=\"leftTop\" title={text}>\n              <ButtonDemo type=\"primary\">LT</ButtonDemo>\n            </Tooltip>\n            <Tooltip placement=\"left\" title={text}>\n              <ButtonDemo type=\"primary\">Left</ButtonDemo>\n            </Tooltip>\n            <Tooltip placement=\"leftBottom\" title={text}>\n              <ButtonDemo type=\"primary\">LB</ButtonDemo>\n            </Tooltip>\n          </div>\n          <div style={{ width: 70, marginLeft: 70 * 4 + 24 }}>\n            <Tooltip placement=\"rightTop\" title={text}>\n              <ButtonDemo type=\"primary\">RT</ButtonDemo>\n            </Tooltip>\n            <Tooltip placement=\"right\" title={text}>\n              <ButtonDemo type=\"primary\">Right</ButtonDemo>\n            </Tooltip>\n            <Tooltip placement=\"rightBottom\" title={text}>\n              <ButtonDemo type=\"primary\">RB</ButtonDemo>\n            </Tooltip>\n          </div>\n          <div\n            style={{\n              marginLeft: 70,\n              clear: \'both\',\n              whiteSpace: \'nowrap\'\n            }}\n          >\n            <Tooltip placement=\"bottomLeft\" title={text}>\n              <ButtonDemo type=\"primary\">BL</ButtonDemo>\n            </Tooltip>\n            <Tooltip placement=\"bottom\" title={text}>\n              <ButtonDemo type=\"primary\">Bottom</ButtonDemo>\n            </Tooltip>\n            <Tooltip placement=\"bottomRight\" title={text}>\n              <ButtonDemo type=\"primary\">BR</ButtonDemo>\n            </Tooltip>\n          </div>\n        </Content>\n      </Theme>\n    );\n  }\n}\n"}</code>} desc={'提示气泡框基本用法,十二个方向'}  demo={<BaseTooltip />}></Demo>
                            <EditTables dataSource={tooltip} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'提示气泡框基本用法'} href={'#tooltip-0'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         }   
        
