import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import EditTheme from "../../edit-theme";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import LABEL from "@lugia/lugia-web/dist/label/lugia.label.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BasicLabel = require("./BasicLabel").default;
const TextLabel = require("./TextLabel").default;
const PrefixLabel = require("./PrefixLabel").default;
const StyleLabel = require("./StyleLabel").default;

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
              <Title title={"文本"} subTitle={"Label"} desc={"文本组件"} />
              <Demo
                title={"基础使用"}
                titleID={"label-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Label } from \"@lugia/lugia-web\";\n\nexport default class BasicLabel extends React.Component<any, any> {\n\n  render() {\n    return <React.Fragment>\n      <Label onClick={this.onClick}>这是一个文本组件</Label>\n    </React.Fragment>;\n  }\n  onClick = () => {\n    console.log(\'clickLabel\');\n  }\n}\n`}</code>
                }
                desc={"基础Label的用法"}
                demo={<BasicLabel />}
              ></Demo>
              <Demo
                title={"传入text属性"}
                titleID={"label-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Label } from \"@lugia/lugia-web\";\n\n\nexport default class TextLabel extends React.Component<any, any> {\n\n  render() {\n    return <React.Fragment>\n      <Label text={\'这是一个传入text属性的文本组件\'}/>\n    </React.Fragment>;\n  }\n}\n`}</code>
                }
                desc={"传入text属性的用法"}
                demo={<TextLabel />}
              ></Demo>
              <Demo
                title={"有前缀的文本组件"}
                titleID={"label-2"}
                code={
                  <code>{`import React from \"react\";\nimport { Label } from \"@lugia/lugia-web\";\n\nexport default class PrefixLabel extends React.Component<any, any> {\n  render() {\n    return <React.Fragment>\n      <Label showPrefix  prefix={\'*\'} >这是一个带前缀的文本组件</Label>\n      <br/><br/>\n      <Label showPrefix  prefix={\'##\'} >这是一个带前缀的文本组件</Label>\n    </React.Fragment>;\n  }\n}\n`}</code>
                }
                desc={"有前缀的文本组件的用法"}
                demo={<PrefixLabel />}
              ></Demo>
              <Demo
                title={"文本组件主题配置"}
                titleID={"label-3"}
                code={
                  <code>{`import React from \"react\";\nimport { Label ,Theme} from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\n\nexport default class PrefixLabel extends React.Component<any, any> {\n  render() {\n    const config = {\n      [Widget.Label]: {\n        Container: {\n          normal: {\n            color: \'#2d3c93\',\n            font: {\n              weight: \'bold\',\n              size: 20,\n            },\n            margin: {\n              left: 30,\n              top: 10,\n            },\n            padding: {\n              right: 10,\n              bottom: 10,\n            },\n            border: {\n              left:{\n                width:2,\n                style:\'solid\',\n                color:\'#4d63ff\'\n              }\n            },\n\n          },\n          hover: {\n            color: \'#ac3400\',\n            cursor: \'pointer\',\n          },\n        },\n        LabelPrefix: {\n          normal: {\n            color: \'red\',\n            margin: {\n              right: 10,\n              left: 5\n            },\n          },\n        },\n      },\n    };\n    return <Theme config={config}>\n      <Label showPrefix  prefix={\'*\'} >这是一个带前缀的文本组件</Label>\n\n    </Theme>;\n  }\n}\n`}</code>
                }
                desc={"可支持配置的文本组件样式"}
                demo={<StyleLabel />}
              ></Demo>
              <EditTables dataSource={LABEL} />
              <EditTheme dataSource={{ LABEL }} />
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
                <Link title={"基础使用"} href={"#label-0"} />
                <Link title={"传入text属性"} href={"#label-1"} />
                <Link title={"有前缀的文本组件"} href={"#label-2"} />
                <Link title={"文本组件主题配置"} href={"#label-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
