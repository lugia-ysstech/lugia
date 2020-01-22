import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import RATE from "@lugia/lugia-web/dist/rate/lugia.rate.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseRate = require("./BaseRate").default;
const ReadOnlyDemo = require("./ReadOnlyDemo").default;
const HalfRateDemo = require("./HalfRateDemo").default;
const CustomRateDemo = require("./CustomRateDemo").default;

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
              <Title title={"评分"} subTitle={"Rate"} desc={"评分组件"} />
              <Demo
                title={"评分基本用法"}
                titleID={"rate-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Rate } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nconst TextBox = styled.span\`\n  font-size: 14px;\n  color: #333;\n  margin: 0 6px;\n\`;\nexport default class RateDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {\n      defaultPropsConfig: {\n        count: 10,\n        max: 10,\n        value: 3,\n        disabled: false,\n        allowHalf: false,\n        classify: false,\n        onClick: res => {\n          this.setStateValue(\"defaultPropsConfig\", \"value\", res.newValue);\n        },\n        onChange: res => {\n          this.setStateValue(\"defaultPropsConfig\", \"value\", res.newValue);\n        }\n      },\n    };\n  }\n  render() {\n\n    return (\n      <div>\n        <div>\n          <Rate />\n        </div>\n       <div>\n         <Rate {...this.state.defaultPropsConfig} />\n         <TextBox>{this.state.defaultPropsConfig.value} 颗星</TextBox>\n       </div>\n\n      </div>\n    );\n  }\n  setStateValue = (target: string, props: string, val: number) => {\n    const data = Object.assign(this.state[target], { value: val });\n    this.setState({\n      [target]: data\n    });\n  };\n}\n`}</code>
                }
                desc={"评分基本用法"}
                demo={<BaseRate />}
              ></Demo>
              <Demo
                title={"只读"}
                titleID={"rate-1"}
                code={
                  <code>{`import React from \'react\';\nimport { Rate} from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst TextBox = styled.span\`\n  font-size: 14px;\n  color: #333;\n  margin: 0 6px;\n\`;\nexport default class RateDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {value:3.5};\n  }\n  render() {\n    const config = {\n      count: 5,\n      max: 5,\n      value: 3.6,\n      disabled: true,\n      allowHalf: true,\n      className: \'cccc\',\n      onClick: res => {\n        this.setStateValue(\"value\",  res.newValue);\n      },\n      onChange: res => {\n        this.setStateValue(\"value\", res.newValue);\n      }\n    };\n    const {value} = this.state;\n    return (\n      <div>\n          <Rate {...config} character=\"好\" />\n          <TextBox>{value} 颗星</TextBox>\n      </div>\n    );\n  }\n  setStateValue = (target: string, val: number) => {\n    this.setState({\n      [target]: val\n    });\n  };\n}\n`}</code>
                }
                desc={"只读，无法进行鼠标交互"}
                demo={<ReadOnlyDemo />}
              ></Demo>
              <Demo
                title={"半星"}
                titleID={"rate-2"}
                code={
                  <code>{`import React from \'react\';\nimport { Rate } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst TextBox = styled.span\`\n  font-size: 14px;\n  color: #333;\n  margin: 0 6px;\n\`;\nexport default class HalfRateDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {\n      value:7\n    };\n  }\n  render() {\n\n    const config = {\n      count: 5,\n      max: 10,\n      disabled: false,\n      allowHalf: true,\n      classify: false,\n      onClick: res => {\n        this.setStateValue(\"value\",  res.newValue);\n      },\n      onChange: res => {\n        this.setStateValue(\"value\", res.newValue);\n      }\n    };\n    const {value} = this.state;\n    return (\n      <div>\n          <Rate {...config} value={value}/>\n          <TextBox>{value} 分</TextBox>\n      </div>\n    );\n  }\n\n  setStateValue = (target: string, val: number) => {\n    this.setState({\n      [target]: val\n    });\n  };\n}\n`}</code>
                }
                desc={"支持选中半星"}
                demo={<HalfRateDemo />}
              ></Demo>
              <Demo
                title={"自定义其他形状"}
                titleID={"rate-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Rate } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\nconst TitleBox = styled.div\`\n  font-size: 14px;\n  margin: 10px  0;\n\`;\nexport default class RateDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {};\n  }\n  render() {\n\n    const characterProps = {\n      count: 5,\n      max: 5,\n      value: 3.5,\n      disabled: false,\n      allowHalf: true,\n      classify: false,\n      onClick: res => {\n        this.setStateValue(\"characterProps\", \"value\", res.newValue);\n      },\n      onChange: res => {\n        this.setStateValue(\"characterProps\", \"value\", res.newValue);\n      }\n    };\n    const lowProps = {\n      count: 5,\n      max: 5,\n      value: 2,\n      disabled: false,\n      allowHalf: false,\n      classify: true,\n      iconClass: {\n        default: \'lugia-icon-financial_meh\',\n        danger: \'lugia-icon-financial_sad\',\n        amazed: \'lugia-icon-financial_smile\'\n      },\n      onClick: res => {\n        this.setStateValue(\"lowProps\", \"value\", res.newValue);\n      },\n      onChange: res => {\n        this.setStateValue(\"lowProps\", \"value\", res.newValue);\n      }\n    };\n    const defaultProps = {\n      count: 5,\n      max: 5,\n      value: 3,\n      disabled: false,\n      allowHalf: false,\n      classify: true,\n      iconClass: {\n        default: \'lugia-icon-financial_meh\',\n        danger: \'lugia-icon-financial_sad\',\n        amazed: \'lugia-icon-financial_smile\'\n      },\n      onClick: res => {\n        this.setStateValue(\"defaultProps\", \"value\", res.newValue);\n      },\n      onChange: res => {\n        this.setStateValue(\"defaultProps\", \"value\", res.newValue);\n      }\n    };\n    const highProps = {\n      count: 5,\n      max: 5,\n      value: 4,\n      disabled: false,\n      allowHalf: false,\n      classify: true,\n      iconClass: {\n        default: \'lugia-icon-financial_meh\',\n        danger: \'lugia-icon-financial_sad\',\n        amazed: \'lugia-icon-financial_smile\'\n      },\n      onClick: res => {\n        this.setStateValue(\"highProps\", \"value\", res.newValue);\n      },\n      onChange: res => {\n        this.setStateValue(\"highProps\", \"value\", res.newValue);\n      }\n    };\n    return (\n      <div>\n\n          <TitleBox>文字评分</TitleBox>\n          <Rate {...characterProps} character=\"好\" />\n          <TitleBox>分级评分 低分值样式</TitleBox>\n          <Rate {...lowProps} />\n          <TitleBox>分级评分 正常样式</TitleBox>\n          <Rate {...defaultProps} />\n          <TitleBox>分级评分  高分值样式</TitleBox>\n          <Rate {...highProps} />\n\n      </div>\n\n    );\n  }\n  setStateValue = (target: string, val: number) => {\n    this.setState({\n      [target]: val\n    });\n  };\n}\n`}</code>
                }
                desc={
                  "可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文"
                }
                demo={<CustomRateDemo />}
              ></Demo>
              <EditTables dataSource={RATE} />
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
                <Link title={"评分基本用法"} href={"#rate-0"} />
                <Link title={"只读"} href={"#rate-1"} />
                <Link title={"半星"} href={"#rate-2"} />
                <Link title={"自定义其他形状"} href={"#rate-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
