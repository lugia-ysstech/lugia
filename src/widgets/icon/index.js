import  React from 'react';
        import {Anchor,Grid} from '@lugia/lugia-web';
        import EditTables from '../../edit-table'; 
        import ICON from '@lugia/lugia-web/dist/icon/lugia.icon.zh-CN.json';
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
                            <Demo title={'图标'} titleID={'icon-0'} code={<code>{ '/**\n *\n * create by liangguodong\n *\n */\nimport React from \'react\';\nimport { Icon, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nconst onClick = () => {};\nexport default class BaseIcon extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Icon]: {\n        margin: {\n          left: 10,\n          right: 10,\n          top: 10,\n          bottom: 0\n        }\n      }\n    };\n    return (\n      <Theme config={view}>\n        <Icon iconClass={\'lugia-icon-financial_unlock\'} onClick={onClick} />\n        <Icon\n          iconClass={\'lugia-icon-financial_upload_cloud\'}\n          onClick={onClick}\n        />\n        <Icon iconClass={\'lugia-icon-financial_pay\'} onClick={onClick} />\n      </Theme>\n    );\n  }\n}\n'}</code>} desc={'语义化的矢量图形,点击可以复制代码'}  demo={<BaseIcon />}></Demo>
                            <EditTables dataSource={ICON} />
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
        
