import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import CARD from "@lugia/lugia-web/dist/card/lugia.card.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseCard = require("./BaseCard").default;
const TypeCard = require("./TypeCard").default;
const ComboCard = require("./ComboCard").default;
const TabsCard = require("./TabsCard").default;

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
                title={"卡片"}
                subTitle={"Card"}
                desc={"卡片容器，可添加文字、列表、图片等"}
              />
              <Demo
                title={"卡片基本用法"}
                titleID={"card-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Card, Theme } from \"@lugia/lugia-web\";\nimport Widget from \'@lugia/lugia-web/dist/consts/index\';\n\nconst themeConfig = {\n  [Widget.Card]: {\n    Container: {\n      normal: {\n        width: 300,\n      },\n    },\n    CardContent: {\n      normal: {\n        padding: {\n          bottom: 10\n        },\n      },\n    },\n  },\n};\nexport default class BaseCard extends React.Component<any, any> {\n  render() {\n    return (\n      <Theme config={themeConfig}>\n        <Card title={\"This is title\"} description={\"This is description\"} />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以添加标题,内容,操作等..."}
                demo={<BaseCard />}
              ></Demo>
              <Demo
                title={"卡片风格"}
                titleID={"card-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Card, Theme } from \"@lugia/lugia-web\";\nimport styled from \"styled-components\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport avatarImgSrc from \"../../../public/card-avatar-circle.png\";\nimport cardImgSrc from \"../../../public/card.jpg\";\n\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\nconst CardWrapper = styled.div\`\n  display: inline-block;\n  padding-right: 10px;\n  padding-top: 10px;\n\`;\nexport default class TypeCard extends React.Component<any, any> {\n  render() {\n    const imageVCard = {\n      [Widget.Card]: {\n        Container: {\n          normal: {\n            width: 160,\n            height: 220,\n            opacity: 0.8\n          }\n        },\n        CardImage: {\n          normal: {\n            width: \'100%\',\n            height: 130\n          }\n        },\n        CardTitle: {\n          normal: {\n            width: 100,\n            height: 20\n          }\n        },\n        CardContent: {\n          normal: {\n            padding: 0\n          }\n        }\n      }\n    };\n    const imageHCard = {\n      [Widget.Card]: {\n        Container: {\n          normal: {\n            width: 260,\n            height: 140\n          }\n        },\n        CardImage: {\n          normal: {\n            width: 160,\n            height: \'100%\'\n          }\n        }\n      }\n    };\n    const avatarVCard = {\n      [Widget.Card]: {\n        Container: {\n          normal: {\n            width: 160,\n            height: 220\n          }\n        },\n        CardAvatar: {\n          Container: {\n            normal: {\n              margin:{\n                top:20,\n                bottom:20\n              }\n            }\n          }\n        }\n      }\n    };\n    const avatarHCard = {\n      [Widget.Card]: {\n        Container: {\n          normal: {\n            width: 260,\n            height: 140,\n            padding:{\n              top:20\n            }\n          }\n        },\n        CardAvatar: {\n          Container: {\n            normal: {\n              margin: {\n                top: 10,\n                left: 20\n              }\n            }\n          }\n        }\n      }\n    };\n    return (\n      <Wrapper>\n        <div style={{ display: \"inline-flex\" }}>\n          <CardWrapper>\n            <Theme config={avatarVCard}>\n              <Wrapper>\n                <Card\n                  type={\"avatar\"}\n                  title={\"This is title\"}\n                  description={\"This is description\"}\n                  imageOrientation={\"vertical\"}\n                  avatar={avatarImgSrc}\n                />\n              </Wrapper>\n            </Theme>\n          </CardWrapper>\n\n          <CardWrapper>\n            <Theme config={imageVCard}>\n              <Card\n                viewClass={\"cardImage\"}\n                type={\"image\"}\n                imageOrientation={\"vertical\"}\n                title={\"This is title\"}\n                description={\"This is description\"}\n                image={cardImgSrc}\n              />\n            </Theme>\n          </CardWrapper>\n        </div>\n        <br />\n        <div style={{ display: \"inline-flex\" }}>\n          <CardWrapper>\n            <Theme config={avatarHCard}>\n              <Wrapper>\n                <Card\n                  type={\"avatar\"}\n                  title={\"This is title\"}\n                  description={\"This is description\"}\n                  avatar={avatarImgSrc}\n                />\n              </Wrapper>\n            </Theme>\n          </CardWrapper>\n          <CardWrapper>\n            <Theme config={imageHCard}>\n              <Wrapper>\n                <Card\n                  type={\"image\"}\n                  title={\"This is title\"}\n                  imageOrientation={\"horizontal\"}\n                  description={\"This is description\"}\n                  image={cardImgSrc}\n                />\n              </Wrapper>\n            </Theme>\n          </CardWrapper>\n        </div>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以添加图片,头像等 可以是水平风格,也可以是垂直风格"}
                demo={<TypeCard />}
              ></Demo>
              <Demo
                title={"卡片组合用法"}
                titleID={"card-2"}
                code={
                  <code>{`import React from \"react\";\nimport styled from \"styled-components\";\nimport { Card, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nconst CardContainer = styled.div\`\n  text-align: center;\n  width: 100%;\n  height: 100%;\n\`;\nconst Price = styled.div\`\n  text-align: center;\n  font-size: 16px;\n  color: #666;\n  margin-top: 36px;\n  margin-bottom: 26px;\n  width: 100%;\n\`;\nconst PriceNum = styled.div\`\n  text-align: center;\n  color: #4d63ff;\n  display: inline-block;\n\`;\nconst Buy = styled.button\`\n  position: absolute;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 20px;\n  margin-top: 32px;\n  color: #fff;\n  bottom: 10%;\n  width: 80%;\n  background-color: #4d63ff;\n  height: 32px;\n  border: 2px solid #4d63ff;\n  left: 10%;\n\`;\nclass AmountCard extends React.Component<Object, Object> {\n  render() {\n    const price = \"9.88\";\n    let int = 0;\n    let decimals = 0;\n    if (price.indexOf(\".\") > 0) {\n      int = price.substring(0, price.indexOf(\".\"));\n      decimals = price.substring(price.indexOf(\".\"));\n    }\n    return (\n      <CardContainer>\n        <Price>{\"价格\"}</Price>\n        <PriceNum>\n          <PriceNum style={{ fontSize: 60 }}>{int}</PriceNum>\n          <PriceNum style={{ fontSize: 45 }}>{decimals}</PriceNum>\n        </PriceNum>\n        <Buy>{\"购买\"}</Buy>\n      </CardContainer>\n    );\n  }\n}\n\nexport default class ComboCard extends React.Component<Object, Object> {\n  render() {\n    const combo = {\n      [Widget.Card]: {\n        Container: {\n          normal: { width: 220, height: 280 }\n        }\n      }\n    };\n\n    return (\n      <Theme config={combo}>\n        <Card\n          viewClass={\"vertical\"}\n          type={\"combo\"}\n          content={<AmountCard />}\n        />\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以添加其他组件放在卡片内部"}
                demo={<ComboCard />}
              ></Demo>
              <Demo
                title={"卡片组合用法"}
                titleID={"card-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Card, Theme, Tabs } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nconst Wrapper = styled.div\`\n  display: inline-block;\n\`;\nconst TabsWrapper = styled.div\`\n  display: inline-block;\n  margin-left:20px;\n\`;\nconst Operation = styled.div\`\n  color: #4d63ff;\n\`;\n\nexport default class TabsCard extends React.Component<Object, Object> {\n  render() {\n\n    const tabsCard = {\n      [Widget.Card]: {\n        Container: {\n          normal: { width: 400, height: 240 },\n        },\n      },\n    };\n    const defaultData = [\n      {\n        title: \'Tab1\',\n        content: \'content of Tab1\'\n      },\n      {\n        title: \'Tab2\',\n        content: \'content of Tab2\'\n      },\n      {\n        title: \'Tab3\',\n        content: \'content of Tab3\'\n      }\n    ];\n    return (\n      <Theme config={tabsCard}>\n        <Wrapper>\n          <Card\n            operation={<Operation>操作</Operation>}\n            viewClass={\'register\'}\n            type={\'combo\'}\n            content={<TabsWrapper> <Tabs data={defaultData} /></TabsWrapper>}\n          />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以添加其他组件放在卡片内部"}
                demo={<TabsCard />}
              ></Demo>
              <EditTables dataSource={CARD} />
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
                <Link title={"卡片基本用法"} href={"#card-0"} />
                <Link title={"卡片风格"} href={"#card-1"} />
                <Link title={"卡片组合用法"} href={"#card-2"} />
                <Link title={"卡片组合用法"} href={"#card-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
