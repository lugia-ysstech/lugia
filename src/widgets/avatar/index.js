import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import AVATAR from '@lugia/lugia-web/dist/avatar/lugia.avatar.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const ShapeAvatar =  require('./ShapeAvatar').default;  const SizeAvatar =  require('./SizeAvatar').default;  const TypeAvatar =  require('./TypeAvatar').default;  const ComboAvatar =  require('./ComboAvatar').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'头像'} subTitle={'Avatar'} desc={'用来代表用户或事物，支持图片、图标或字符展示。'} />
                              <Demo title={'形状'} titleID={'avatar-0'} code={<code>{ `import React from \'react\';\nimport { Avatar, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\nconst Wrapper = styled.div\`\n\`;\nexport default class ShapeAvatar extends React.Component<any, any> {\n\n  render () {\n    const view = {\n      [ Widget.Avatar ]: {\n        color: \'white\',\n        backgroundColor: \'#cccccc\',\n        margin: 10,\n      },\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar viewClass=\"register\" shape={\'circle\'} name={\'lug\'}/>\n          <Avatar viewClass=\"register\" shape={\'circle\'} name={\'lugia\'}/>\n          <br/>\n          <Avatar viewClass=\"register\" shape={\'square\'} name={\'lug\'}/>\n          <Avatar viewClass=\"register\" shape={\'square\'} name={\'lugia\'}/>\n        </Wrapper>\n      </Theme>);\n  }\n}\n`}</code>} desc={'可以选择圆形 和方形 两种风格'}  demo={<ShapeAvatar />}></Demo><Demo title={'尺寸'} titleID={'avatar-1'} code={<code>{ `import React from \'react\';\nimport { Avatar, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\n\`;\nexport default class SizeAvatar extends React.Component<any, any> {\n\n  render () {\n    const view = {\n      [ Widget.Avatar ]: {\n        color: \'white\',\n        backgroundColor: \'#cccccc\',\n        margin: 10,\n      },\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar shape={\'circle\'} size={\'small\'} name={\'L\'}/>\n          <Avatar shape={\'circle\'} size={\'default\'} name={\'lug\'}/>\n          <Avatar shape={\'circle\'} size={\'large\'} name={\'lugia\'}/>\n          <br/>\n          <Avatar shape={\'square\'} size={\'small\'} name={\'L\'}/>\n          <Avatar shape={\'square\'} size={\'default\'} name={\'lug\'}/>\n          <Avatar shape={\'square\'} size={\'large\'} name={\'lugia\'}/>\n        </Wrapper>\n      </Theme>);\n  }\n}\n`}</code>} desc={'可以选择三种尺寸头像'}  demo={<SizeAvatar />}></Demo><Demo title={'风格'} titleID={'avatar-2'} code={<code>{ `import React from \'react\';\nimport { Avatar, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\n  padding:2px;\n\`;\nexport default class TypeAvatar extends React.Component<any, any> {\n\n  render () {\n    const view = {\n      [ Widget.Avatar ]: {\n        color: \'white\',\n        backgroundColor: \'#cccccc\',\n        margin: 10,\n      },\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar shape={\'circle\'} src={\'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg\'}/>\n          <Avatar shape={\'circle\'} name={\'lugia\'}/>\n          <Avatar shape={\'circle\'} icon={\'lugia-icon-financial_user\'}/>\n          <br/>\n          <Avatar shape={\'square\'} src={\'http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg\'}/>\n          <Avatar shape={\'square\'} name={\'lugia\'}/>\n          <Avatar shape={\'square\'} icon={\'lugia-icon-financial_user\'}/>\n        </Wrapper>\n      </Theme>);\n  }\n}\n`}</code>} desc={'可以选择三种风格的头像,可写文本,图标,图片资源'}  demo={<TypeAvatar />}></Demo><Demo title={'组合头像'} titleID={'avatar-3'} code={<code>{ `import React from \'react\';\nimport { Avatar, Badge, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\n\`;\nexport default class ComboAvatar extends React.Component<any, any> {\n\n  render () {\n    const view = {\n      [ Widget.Avatar ]: {\n        color: \'white\',\n        backgroundColor: \'#cccccc\',\n        margin: 10,\n      },\n      [ Widget.Badge ]: {\n        position: { right: 10, top: 5 }\n      },\n    };\n    const register = {\n      [ Widget.Badge ]: {\n        position: { right: 15, top: 8 }\n      },\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Badge dot={true}>\n            <Avatar shape={\'square\'} size={\'large\'} name={\'lugia\'}/>\n          </Badge>\n          <Theme config={view}>\n            <Theme config={register}>\n              <Badge dot={true}>\n                <Avatar icon={\'lugia-icon-financial_user\'} size={\'large\'}/>\n              </Badge>\n            </Theme>\n            <br/>\n            <Badge count={10}>\n              <Avatar shape={\'square\'} size={\'large\'} name={\'lugia\'}/>\n            </Badge>\n            <Badge viewClass=\"register\" count={10}>\n              <Avatar icon={\'lugia-icon-financial_user\'} size={\'large\'}/>\n            </Badge>\n          </Theme>\n        </Wrapper>\n      </Theme>);\n  }\n}\n`}</code>} desc={'可以和徽标一块组合显示'}  demo={<ComboAvatar />}></Demo>
                              <EditTables dataSource={AVATAR} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'形状'} href={'#avatar-0'} /><Link title={'尺寸'} href={'#avatar-1'} /><Link title={'风格'} href={'#avatar-2'} /><Link title={'组合头像'} href={'#avatar-3'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         });   
        