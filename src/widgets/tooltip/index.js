import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import TOOLTIP from '@lugia/lugia-web/dist/tooltip/lugia.tooltip.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseTooltip =  require('./BaseTooltip').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'文字提示'} subTitle={'Tooltip'} desc={'简单的文字气泡提示框'} />
                              <Demo title={'提示气泡框基本用法'} titleID={'tooltip-0'} code={<code>{ 'import React from \'react\';\nimport { Tooltip, Theme,Button } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\nconst buttonWidth = 80;\nconst DirectionButton = styled(Button)`\n  width: ${buttonWidth}px;\n`;\nconst ToolTipBaseWrapper = styled.div`\n  display: inline-block;\n`;\nconst DirectionTopWrapper = styled.div`\n  margin-left: ${buttonWidth}px;\n  white-space: nowrap;\n  display: inline-block;\n`;\nconst DirectionLeftWrapper = styled.div`\n  width: ${buttonWidth}px;\n  position: absolute;\n`;\nconst DirectionRightWrapper = styled.div`\n  width: ${buttonWidth}px;\n  margin-left: ${buttonWidth * 4 + 24}px;\n`;\nconst DirectionBottomWrapper = styled.div`\n  margin-left: ${buttonWidth}px;\n  white-space: nowrap;\n  display: inline-block;\n`;\nconst ToolTipHWrapper = ToolTipBaseWrapper.extend`\n  margin-right: 10px;\n`;\nconst ToolTipVWrapper = ToolTipBaseWrapper.extend`\n  margin-top: 10px;\n`;\nexport default class BaseTooltip extends React.Component<any, any> {\n  constructor(props: any) {\n    super(props);\n    this.state = { value: \'\' };\n  }\n\n  onChange = ({ newValue: value }: any) => {\n    this.setState({ value });\n  };\n\n  render() {\n    const text = <span>prompt text</span>;\n    const config = {\n      [Widget.Tooltip]: {\n        color: \'#fff\',\n        fontColor: \'#000\',\n      },\n      [Widget.Button]: {\n        width: buttonWidth,\n      },\n    };\n    return (\n      <Theme config={config}>\n        <DirectionTopWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"topLeft\" title={text}>\n              <DirectionButton type=\"primary\">TL</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"top\" title={text}>\n              <DirectionButton type=\"primary\">Top</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"topRight\" title={text}>\n              <DirectionButton type=\"primary\">TR</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n        </DirectionTopWrapper>\n        <DirectionLeftWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"leftTop\" title={text}>\n              <DirectionButton type=\"primary\">LT</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"left\" title={text}>\n              <DirectionButton type=\"primary\">Left</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"leftBottom\" title={text}>\n              <DirectionButton type=\"primary\">LB</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n        </DirectionLeftWrapper>\n        <DirectionRightWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"rightTop\" title={text}>\n              <DirectionButton type=\"primary\">RT</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"right\" title={text}>\n              <DirectionButton type=\"primary\">Right</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n          <ToolTipVWrapper>\n            <Tooltip placement=\"rightBottom\" title={text}>\n              <DirectionButton type=\"primary\">RB</DirectionButton>\n            </Tooltip>\n          </ToolTipVWrapper>\n        </DirectionRightWrapper>\n        <DirectionBottomWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"bottomLeft\" title={text}>\n              <DirectionButton type=\"primary\">BL</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"bottom\" title={text}>\n              <DirectionButton type=\"primary\">Bottom</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n          <ToolTipHWrapper>\n            <Tooltip placement=\"bottomRight\" title={text}>\n              <DirectionButton type=\"primary\">BR</DirectionButton>\n            </Tooltip>\n          </ToolTipHWrapper>\n        </DirectionBottomWrapper>\n      </Theme>\n    );\n  }\n}\n'}</code>} desc={'提示气泡框基本用法,十二个方向'}  demo={<BaseTooltip />}></Demo>
                              <EditTables dataSource={TOOLTIP} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'提示气泡框基本用法'} href={'#tooltip-0'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         });   
        
