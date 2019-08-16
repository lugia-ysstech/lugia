import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import AUTOCOMPLETE from '@lugia/lugia-web/dist/auto-complete/lugia.auto-complete.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const DefaultAutoComplete =  require('./DefaultAutoComplete').default;  const ShowOldValueAutoComplete =  require('./ShowOldValueAutoComplete').default;  const EmailAutoComplete =  require('./EmailAutoComplete').default;  
        
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
                              <Title title={'自动完成'} subTitle={'AutoComplete'} desc={'需要自动完成数据时使用'} />
                              <Demo title={'基本用法'} titleID={'auto-complete-0'} code={<code>{ `/**\n *\n * create by szfeng\n *\n */\nimport React from \'react\';\nimport { AutoComplete } from \'@lugia/lugia-web\';\n\nconst data = [\n  \'Nikcy Romero\',\n  \'Armin van Buuren\',\n  \'Hardwell\',\n  \'Zedd\',\n  \'Kazze\',\n\n  \'Vicetone\',\n  \'Martin Garrix\',\n  \'David Guetta\',\n  \'The Chainsmokers\',\n  \'Kygo\',\n\n  \'Axwell ^ Ingrosso\',\n  \'Dimitri Vegas & Like Mike\',\n  \'Calvin Harris\',\n  \'Avicci\',\n  \'Fedde Le Grand\',\n\n  \'Tiesto\',\n  \'Snoop Dogg\',\n  \'Bassjackers\',\n  \'Sebastian Ingrosso\',\n  \'Swedish House Mafia\',\n  \'Alesso\',\n  \'Afrojack\',\n  \'Knife Party\',\n  \'Dannic\',\n  \'R3hab\'\n];\n\nexport default class DefaultAutoComplete extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      menuData: data,\n      value: \'\'\n    };\n  }\n  render() {\n    return (\n      <AutoComplete\n        data={this.state.menuData}\n        onChange={this.onChange}\n        placeholder={\'请输入\'}\n      />\n    );\n  }\n\n  onChange = value => {\n    this.search(value);\n  };\n\n  search(query) {\n    let menuData;\n    let rowSet = [];\n    const len = data.length;\n\n    for (let i = 0; i < len; i++) {\n      const row = data[i];\n      if (query === row) {\n        rowSet = [];\n        break;\n      }\n\n      if (this.searchValue(query, row)) {\n        rowSet.push(row);\n      }\n    }\n\n    if (rowSet.length === len) {\n      menuData = data;\n    } else {\n      menuData = rowSet;\n    }\n    this.setState({ menuData });\n  }\n\n  searchValue = (query, row) => {\n    return row.indexOf(query) !== -1 || row === query;\n  };\n}\n`}</code>} desc={'自定义将检索过的数据传入自动完成,生成数据源'}  demo={<DefaultAutoComplete />}></Demo><Demo title={'记录上一次选中值'} titleID={'auto-complete-1'} code={<code>{ `/**\n *\n * create by szfeng\n *\n */\nimport React from \'react\';\nimport { AutoComplete } from \'@lugia/lugia-web\';\n\nconst data = [\n  \'Nikcy Romero\',\n  \'Armin van Buuren\',\n  \'Hardwell\',\n  \'Zedd\',\n  \'Kazze\',\n\n  \'Vicetone\',\n  \'Martin Garrix\',\n  \'David Guetta\',\n  \'The Chainsmokers\',\n  \'Kygo\',\n\n  \'Axwell ^ Ingrosso\',\n  \'Dimitri Vegas & Like Mike\',\n  \'Calvin Harris\',\n  \'Avicci\',\n  \'Fedde Le Grand\',\n\n  \'Tiesto\',\n  \'Snoop Dogg\',\n  \'Bassjackers\',\n  \'Sebastian Ingrosso\',\n  \'Swedish House Mafia\',\n  \'Alesso\',\n  \'Afrojack\',\n  \'Knife Party\',\n  \'Dannic\',\n  \'R3hab\'\n];\n\nexport default class ShowOldAutoComplete extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      menuData: data,\n      value: \'\'\n    };\n  }\n  render() {\n    return (\n      <AutoComplete\n        data={this.state.menuData}\n        onChange={this.onChange}\n        placeholder={\'请输入\'}\n        showOldValue={true}\n      />\n    );\n  }\n\n  onChange = value => {\n    this.search(value);\n  };\n\n  search(query) {\n    let menuData;\n    let rowSet = [];\n    const len = data.length;\n\n    for (let i = 0; i < len; i++) {\n      const row = data[i];\n      if (query === row) {\n        rowSet = [];\n        break;\n      }\n\n      if (this.searchValue(query, row)) {\n        rowSet.push(row);\n      }\n    }\n\n    if (rowSet.length === len) {\n      menuData = data;\n    } else {\n      menuData = rowSet;\n    }\n    this.setState({ menuData });\n  }\n\n  searchValue = (query, row) => {\n    return row.indexOf(query) !== -1 || row === query;\n  };\n}\n`}</code>} desc={'通过开启showOldValue属性,在每次选中后,可记录上一次选中值,且可选择旧值'}  demo={<ShowOldValueAutoComplete />}></Demo><Demo title={'Email后置补全'} titleID={'auto-complete-2'} code={<code>{ `/**\n *\n * create by szfeng\n *\n */\nimport React from \'react\';\nimport { AutoComplete } from \'@lugia/lugia-web\';\n\nconst data = [\'@gmail.com\', \'@sina.com\', \'@163.com\', \'@qq.com\'];\n\nexport default class Demo extends React.Component<any, any> {\n  constructor(props) {\n    super(props);\n    this.state = {\n      menuData: []\n    };\n  }\n  render() {\n    const { menuData } = this.state;\n    return (\n      <AutoComplete\n        data={menuData}\n        onChange={this.onChange}\n        placeholder={\'请输入\'}\n        showOldValue={true}\n      />\n    );\n  }\n\n  onChange = value => {\n    const newData = [];\n    data.forEach(item => {\n      if (value.indexOf(\'@\') === -1) {\n        item = \'\' + value + item;\n        newData.push(item);\n      }\n    });\n\n    this.setState({ menuData: newData });\n  };\n}\n`}</code>} desc={'将补全过的数据传入自动完成，生成数据源'}  demo={<EmailAutoComplete />}></Demo>
                              <EditTables dataSource={AUTOCOMPLETE} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        {!isMobile && <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#auto-complete-0'} /><Link title={'记录上一次选中值'} href={'#auto-complete-1'} /><Link title={'Email后置补全'} href={'#auto-complete-2'} />
                            </Anchor>
                        </Col>}
                    </Row>
                )
            }
         });   
        