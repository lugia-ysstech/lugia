import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import icon from '@lugia/lugia-web/dist/icon/lugia.icon.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseIcon =  require('./BaseIcon').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
        export default class ComDemo extends React.Component {
            render(){
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'图标'} subTitle={'Icon'} desc={'语义化的矢量图形'} />
                            <Demo title={'图标'} titleID={'icon-0'} code={<code>{ "/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Icon } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nexport default class BaseIcon extends React.Component<any, any> {\n  render() {\n    const onClick = () => {};\n    const defaultView = {\n      [Widget.Icon]: {\n        margin: {\n          left: 20,\n          right: 20,\n          top: 20,\n          bottom: 20\n        }\n      }\n    };\n    return (\n      <Theme config={defaultView}>\n        <Icon\n          iconClass=\"lugia-icon-financial_switch_e_and_c\"\n          onClick={onClick}\n        />\n        <Icon iconClass=\"lugia-icon-direction_down\" onClick={onClick} />\n        <Icon\n          iconClass=\"lugia-icon-reminder_close_circle_o\"\n          onClick={onClick}\n        />\n      </Theme>\n    );\n  }\n}\n"}</code>} desc={'语义化的矢量图形,点击可以复制代码'}  demo={<BaseIcon />}></Demo>
                            <EditTables dataSource={icon} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'图标'} href={'#icon-0'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         }   
        
