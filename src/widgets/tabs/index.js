import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import TABS from "@lugia/lugia-web/dist/tabs/lugia.tabs.zh-CN.json";
import TABPANE from "@lugia/lugia-web/dist/tabs/lugia.tabpane.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseTabs = require("./BaseTabs").default;
const PositionTabs = require("./PositionTabs").default;
const TypeTabs = require("./TypeTabs").default;
const PagedTypeTabs = require("./PagedTypeTabs").default;
const OrderTabs = require("./OrderTabs").default;
const ChangeTabs = require("./ChangeTabs").default;

const { Link } = Anchor;
const { Row, Col } = Grid;

export default PageNavHoC(
  widgetrouter,
  class ComDemo extends React.Component {
    handleLinkClick = (e, href) => {
      if (href) {
        const name = href.slice(1);
        const anchorElement = document.getElementById(name);
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    };

    render() {
      const { next, prev, isMobile = false } = this.props;
      const span = isMobile ? 24 : 20;
      const style = isMobile ? {} : { paddingRight: "50px" };
      return (
        <Row>
          <Col span={span}>
            <div style={style}>
              <Title
                title={"标签页"}
                subTitle={"Tabs"}
                desc={"选项卡切换组件"}
              />
              <Demo
                title={"基本使用"}
                titleID={"tabs-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Tabs } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\n\nconst TabPane = Tabs.TabPane;\n\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\n\nconst defaultData = [\n  {title: \"Tab1\", content: \"content of Tab1\"},\n  {title: \"Tab2\", content: \"content of Tab2\"},\n  {title: \"Tab3\", content: \"content of Tab3\"},\n  {title: \"Tab4\", content: \"content of Tab4\"},\n  {title: \"Tab5\", content: \"content of Tab5\"},\n  {title: \"Tab6\", content: \"content of Tab6\"},\n  {title: \"Tab7\", content: \"content of Tab7\"},\n  {title: \"Tab8\", content: \"content of Tab8\"}\n];\nexport default class BaseTabs extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <Tabs\n          titleType={\"line\"}\n          tabPosition={\"top\"}\n          data={defaultData}\n        />\n        <Tabs\n          titleType={\"line\"}\n          tabPosition={\"top\"}\n        >\n          <TabPane title={\"Tab1\"} content={<div>content of Tab1</div>} value={\"0\"}/>\n          <TabPane title={\"Tab2\"} content={<div>content of Tab2</div>} value={\"1\"}/>\n          <TabPane title={\"Tab3\"} content={<div>content of Tab3</div>} value={\"2\"}/>\n          <TabPane title={\"Tab4\"} content={<div>content of Tab4</div>} value={\"3\"}/>\n          <TabPane title={\"Tab5\"} content={<div>content of Tab5</div>} value={\"4\"}/>\n          <TabPane title={\"Tab6\"} content={<div>content of Tab6</div>} value={\"5\"}/>\n        </Tabs>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "标签页基本使用 配置data,或者children,同时配置以data 优先显示"
                }
                demo={<BaseTabs />}
              ></Demo>
              <Demo
                title={"位置"}
                titleID={"tabs-1"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs, Select } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\nconst Wrapper = styled.div\`\n  margin:10px 0;\n\`;\nconst defaultData = [\n  { title: \'Tab1\', content: \'content of Tab1\', value:\'1\'},\n  { title: \'Tab2\', content: \'content of Tab2\', value:\'2\'},\n  { title: \'Tab3\', content: \'content of Tab3\', value:\'3\'},\n  { title: \'Tab4\', content: \'content of Tab4\', value:\'4\'},\n  { title: \'Tab5\', content: \'content of Tab5\', value:\'5\'},\n  { title: \'Tab6\', content: \'content of Tab6\', value:\'6\'},\n  { title: \'Tab7\', content: \'content of Tab7\', value:\'7\'},\n  { title: \'Tab8\', content: \'content of Tab8\', value:\'8\'}\n];\n\nconst selectData = [\n  { label: \'top\', value: \'top\' },\n  { label: \'bottom\', value: \'bottom\' },\n  { label: \'left\', value: \'left\' },\n  { label: \'right\', value: \'right\' }\n];\n\nconst themeConfig = {\n  [Widget.Select]: {\n    Container: {\n      normal: {\n        width: 300\n      },\n    }\n  }\n};\n\nexport default class PositionTabs extends React.Component<any, any> {\n  state = {\n    tabPosition: \'top\'\n  };\n\n  handleSelect = obj => {\n    const { newValue } = obj;\n    this.setState({ tabPosition: newValue });\n  };\n\n  render() {\n    const {tabPosition} = this.state;\n    return (\n      <Theme config={themeConfig}>\n        <Wrapper>\n          <Select displayField={\'label\'} data={selectData} defaultValue={tabPosition} onSelect={this.handleSelect} />\n        </Wrapper>\n          <Tabs\n            titleType={\'line\'}\n            tabPosition={tabPosition}\n            data={defaultData}\n          />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以配置标签页显示位置,上,下,左,右四个方向"}
                demo={<PositionTabs />}
              ></Demo>
              <Demo
                title={"风格"}
                titleID={"tabs-2"}
                code={
                  <code>{`import React from \'react\';\nimport {  Tabs, Select } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\n\nconst TabsWrapper = styled.div\`\n  margin: 0 0 20px;\n\`;\n\nconst Title = styled.div\`\n   margin: 0 0 10px;\n\`;\n\nconst defaultData = [\n  { title: \'Tab1\', content: \'content of Tab1\', value:\'1\'},\n  { title: \'Tab2\', content: \'content of Tab2\', value:\'2\'},\n  { title: \'Tab3\', content: \'content of Tab3\', value:\'3\'},\n  { title: \'Tab4\', content: \'content of Tab4\', value:\'4\'},\n  { title: \'Tab5\', content: \'content of Tab5\', value:\'5\'},\n  { title: \'Tab6\', content: \'content of Tab6\', value:\'6\'},\n  { title: \'Tab7\', content: \'content of Tab7\', value:\'7\'},\n  { title: \'Tab8\', content: \'content of Tab8\', value:\'8\'}\n];\n\nexport default class TypeTabs extends React.Component<any, any> {\n  render() {\n    return (\n        <Wrapper>\n          <TabsWrapper>\n            <Title>线性风格</Title>\n            <Tabs\n              tabType={\'line\'}\n              pagedType={\'single\'}\n              data={defaultData}\n            />\n          </TabsWrapper>\n          <TabsWrapper>\n            <Title>分隔线(仅支持线性风格)</Title>\n            <Tabs\n              tabType={\'line\'}\n              pagedType={\'single\'}\n              showDividerLine={true}\n              data={defaultData}\n            />\n          </TabsWrapper>\n\n          <TabsWrapper>\n            <Title>卡片风格</Title>\n            <Tabs\n              tabType={\'card\'}\n              pagedType={\'single\'}\n              data={defaultData}\n            />\n          </TabsWrapper>\n\n          <TabsWrapper>\n            <Title>窗口风格</Title>\n            <Tabs\n              tabType={\'window\'}\n              pagedType={\'page\'}\n              data={defaultData}\n            />\n          </TabsWrapper>\n\n        </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "可以配置标签页风格,默认是线性, 可以选择 卡片风格,窗口风格"
                }
                demo={<TypeTabs />}
              ></Demo>
              <Demo
                title={"翻页类型"}
                titleID={"tabs-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs, Select } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div\`\n\n  margin: 10px 0;\n\`;\nconst Title = styled.div\`\n   margin: 0 0 20px;\n\`;\n\nconst defaultData = [\n  { title: \'Tab1\', content: \'content of Tab1\', value:\'1\'},\n  { title: \'Tab2\', content: \'content of Tab2\', value:\'2\'},\n  { title: \'Tab3\', content: \'content of Tab3\', value:\'3\'},\n  { title: \'Tab4\', content: \'content of Tab4\', value:\'4\'},\n  { title: \'Tab5\', content: \'content of Tab5\', value:\'5\'},\n  { title: \'Tab6\', content: \'content of Tab6\', value:\'6\'},\n  { title: \'Tab7\', content: \'content of Tab7\', value:\'7\'},\n  { title: \'Tab8\', content: \'content of Tab8\', value:\'8\'},\n  { title: \'Tab9\', content: \'content of Tab9\', value:\'9\'},\n  { title: \'Tab10\', content: \'content of Tab10\', value:\'10\'},\n  { title: \'Tab11\', content: \'content of Tab11\', value:\'11\'},\n  { title: \'Tab12\', content: \'content of Tab12\', value:\'12\'},\n  { title: \'Tab13\', content: \'content of Tab13\', value:\'13\'}\n];\n\nexport default class PagedTypeTabs extends React.Component<any, any> {\n\n  onPreClick = res => { console.log(\'onPreClick\',res) };\n  onNextClick = res => { console.log(\'onNextClick\',res) };\n\n  render() {\n    const view = {\n      [Widget.Tabs]: {\n        Container: {\n          normal: {\n            width: 348\n          },\n        },\n        TabHeader: {\n          DefaultTabPan: {\n            normal: {\n              width: 100\n            },\n          }\n        }\n      },\n    };\n\n    return (\n      <Theme config={view}>\n          <Wrapper>\n            <Title>单个翻页类型</Title>\n            <Tabs\n              pagedType={\'single\'}\n              data={defaultData}\n              onPreClick={this.onPreClick}\n              onNextClick={this.onNextClick}\n            />\n          </Wrapper>\n\n          <Wrapper>\n            <Title>整页翻页类型</Title>\n            <Tabs\n              pagedType={\'page\'}\n              data={defaultData}\n              onPreClick={this.onPreClick}\n              onNextClick={this.onNextClick}\n            />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={
                  "当页签数量超过显示区可容纳数量时，会出现翻页按钮。可以配置标签页翻页类型,默认是单个,可以设置为整页"
                }
                demo={<PagedTypeTabs />}
              ></Demo>
              <Demo
                title={"自定义增删标签页"}
                titleID={"tabs-4"}
                code={
                  <code>{`import React from \'react\';\nimport { Tabs } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\n\nconst hasActivityKeyDefaultData = [\n  {\n    title: \'Tab1\',\n    content: \'content of Tab1\',\n    value: \'0\'\n  },\n  {\n    title: \'Tab2\',\n    content: \'content of Tab2\',\n    value: \'1\'\n  },\n];\n\nconst Title = styled.div\`\n   margin: 0 0 10px;\n\`;\n\nexport default class OrderTabs extends React.Component<any, any> {\n  constructor() {\n    super();\n    this.state = {\n      data:hasActivityKeyDefaultData\n    };\n  }\n\n  onAddClick = () => {\n    const {data} = this.state;\n    const addItem = [\n      { title: \'用户管理\', content: \'这里是用户管理界面\' , value: \'用户管理\' },\n      { title: \'权限管理\', content: \'这里是权限管理界面\' , value: \'权限管理\'},\n      { title: \'数据统计\', content: \'这里是数据统计界面\' , value: \'数据统计\'},\n      { title: \'消息通知\', content: \'这里是消息通知界面\' , value: \'消息通知\'},\n      { title: \'个人中心\', content: \'这里是个人中心界面\' , value: \'个人中心\'},\n      { title: \'设置\', content: \'这里是设置界面\' , value: \'设置\'},\n      { title: \'图表统计\', content: \'这里是图表统计界面\' , value: \'图表统计\'},\n    ];\n    const index = Math.floor(Math.random() * 5);\n    const item = addItem[index];\n    const {value} = item;\n    item.value = \`\${value}\${index + Math.floor(Math.random() * 200)}\`;\n    data.push(item);\n    this.setState({data});\n  };\n\n  onDeleteClick = res => {\n    const { data } = this.state;\n    const { index } = res;\n    const newDate = [...data];\n    newDate.splice(index, 1);\n    this.setState({ data: newDate });\n  };\n\n  render() {\n    const {data} = this.state;\n    return (\n      <div>\n        <Title>  </Title>\n        <Tabs\n          tabType={\'card\'}\n          pagedType={\'single\'}\n          onAddClick={this.onAddClick}\n          onDelete={this.onDeleteClick}\n          data={data}\n          showAddBtn={true}\n          showDeleteBtn={true}\n        />\n      </div>\n    );\n  }\n}\n`}</code>
                }
                desc={"卡片风格和窗口风格,可以自定义增加,删除标签页"}
                demo={<OrderTabs />}
              ></Demo>
              <Demo
                title={"修改配置标签"}
                titleID={"tabs-5"}
                code={
                  <code>{`import React from \'react\';\nimport { Theme, Tabs, Button,Icon } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst CustomHome = styled.div\`\n  width: 40px;\n\`;\nconst CustomTitle = styled.div\`\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 120px;\n\`;\nconst CustomContent = styled.div\`\n  padding: 20px;\n\`;\n\nconst defaultHome = [\n  {\n    title: <CustomHome> <Icon iconClass={\"lugia-icon-financial_home\"} /></CustomHome>,\n    content: <CustomContent>content of Home</CustomContent>,\n    value: \'0\'\n  }\n];\n\nconst getRandom = (limit:number) => {\n  return Math.floor(Math.random() * limit);\n};\nconst getData = () => {\n  const defaultData = [];\n  for(let i = 0;i< 5;i++){\n    const valueNumber = getRandom(100);\n    const valueNumberAfter = getRandom(20);\n    const title = \`Tab\${valueNumber}\${valueNumberAfter}\`;\n    const item = {\n      title: <CustomTitle>{title}</CustomTitle> ,\n      content: <CustomContent>Content of new {title}</CustomContent>  ,\n      value:title\n    };\n    defaultData.push(item)\n  }\n  return defaultHome.concat(defaultData);\n};\n\nconst themeConfig = {\n  [Widget.Tabs]: {\n    TabHeader: {\n      DefaultTabPan: {\n        normal: {\n          padding: {\n            left: 0,\n            right: 0,\n            top:0,\n            bottom:0\n          },\n        },\n\n      },\n    },\n  },\n};\nexport default class ChangeTabs extends React.Component<any, any> {\n  constructor() {\n    super();\n    this.state = {\n      data:getData()\n    };\n  }\n\n  render() {\n\n    const { data } = this.state;\n    return (\n      <div>\n        <Theme config={themeConfig}>\n          <Tabs\n            tabType={\'line\'}\n            data={data}\n          />\n          <Tabs\n            tabType={\'card\'}\n            data={data}\n          />\n          <Tabs\n            tabType={\'window\'}\n            data={data}\n          />\n        </Theme>\n\n      </div>\n    );\n\n  }\n}\n`}</code>
                }
                desc={"可以自定义配置标签内容"}
                demo={<ChangeTabs />}
              ></Demo>
              <EditTables dataSource={TABS} />
              <EditTables dataSource={TABPANE} />
              <FooterNav prev={prev} next={next} />
            </div>
          </Col>
          {!isMobile && (
            <Col span={4}>
              <Anchor
                slideType="line"
                onClick={this.handleLinkClick}
                useHref={false}
              >
                <Link title={"基本使用"} href={"#tabs-0"} />
                <Link title={"位置"} href={"#tabs-1"} />
                <Link title={"风格"} href={"#tabs-2"} />
                <Link title={"翻页类型"} href={"#tabs-3"} />
                <Link title={"自定义增删标签页"} href={"#tabs-4"} />
                <Link title={"修改配置标签"} href={"#tabs-5"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
