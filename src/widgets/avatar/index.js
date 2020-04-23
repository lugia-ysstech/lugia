import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import EditTheme from "../../edit-theme";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import AVATAR from "@lugia/lugia-web/dist/avatar/lugia.avatar.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const ShapeAvatar = require("./ShapeAvatar").default;
const SizeAvatar = require("./SizeAvatar").default;
const TypeAvatar = require("./TypeAvatar").default;
const ComboAvatar = require("./ComboAvatar").default;

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
                title={"头像"}
                subTitle={"Avatar"}
                desc={"用来代表用户或事物，支持图片、图标或字符展示。"}
              />
              <Demo
                title={"形状"}
                titleID={"avatar-0"}
                code={
                  <code>{`import React from \"react\";\nimport { Avatar, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\nconst Wrapper = styled.div\`\`;\nexport default class ShapeAvatar extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Avatar]: {\n        Container: {\n          normal: {\n            background: { color: \"#e2e2e2\" },\n            margin: 10,\n            width: 50,\n            height: 50\n          }\n        }\n      }\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar viewClass=\"register\" shape={\"circle\"} name={\"lug\"} />\n          <Avatar viewClass=\"register\" shape={\"circle\"} name={\"lugia\"} />\n          <br />\n          <Avatar viewClass=\"register\" shape={\"square\"} name={\"lug\"} />\n          <Avatar viewClass=\"register\" shape={\"square\"} name={\"lugia\"} />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以选择圆形 和方形 两种风格"}
                demo={<ShapeAvatar />}
              ></Demo>
              <Demo
                title={"尺寸"}
                titleID={"avatar-1"}
                code={
                  <code>{`import React from \"react\";\nimport { Avatar, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\`;\nexport default class SizeAvatar extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Avatar]: {\n        Container: { normal: { background: { color: \"#e2e2e2\" }, margin: 10 } }\n      }\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar shape={\"circle\"} size={\"small\"} name={\"L\"} />\n          <Avatar shape={\"circle\"} size={\"default\"} name={\"lug\"} />\n          <Avatar shape={\"circle\"} size={\"large\"} name={\"lugia\"} />\n          <br />\n          <Avatar shape={\"square\"} size={\"small\"} name={\"L\"} />\n          <Avatar shape={\"square\"} size={\"default\"} name={\"lug\"} />\n          <Avatar shape={\"square\"} size={\"large\"} name={\"lugia\"} />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以选择三种尺寸头像"}
                demo={<SizeAvatar />}
              ></Demo>
              <Demo
                title={"风格"}
                titleID={"avatar-2"}
                code={
                  <code>{`import React from \"react\";\nimport { Avatar, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\nimport avatarSrc from \"../../../public/avatar-jiaxin.jpg\";\nconst Wrapper = styled.div\`\n  padding: 2px;\n\`;\nexport default class TypeAvatar extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Avatar]: {\n        Container: { normal: { background: { color: \"#e2e2e2\" }, margin: 10 } }\n      }\n    };\n    return (\n      <Theme config={view}>\n        <Wrapper>\n          <Avatar shape={\"circle\"} type=\"img\" src={avatarSrc} />\n          <Avatar shape={\"circle\"} type=\"text\" name={\"lugia\"} />\n          <Avatar\n            shape={\"circle\"}\n            type=\"icon\"\n            icon={\"lugia-icon-financial_user\"}\n          />\n          <br />\n          <Avatar shape={\"square\"} type=\"img\" src={avatarSrc} />\n          <Avatar shape={\"square\"} type=\"text\" name={\"lugia\"} />\n          <Avatar\n            shape={\"square\"}\n            type={\"icon\"}\n            icon={\"lugia-icon-financial_user\"}\n          />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以选择三种风格的头像,可写文本,图标,图片资源"}
                demo={<TypeAvatar />}
              ></Demo>
              <Demo
                title={"组合头像"}
                titleID={"avatar-3"}
                code={
                  <code>{`import React from \"react\";\nimport { Avatar, Badge, Theme } from \"@lugia/lugia-web\";\nimport Widget from \"@lugia/lugia-web/dist/consts\";\nimport styled from \"styled-components\";\n\nconst Wrapper = styled.div\`\`;\nexport default class ComboAvatar extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Avatar]: {\n        Container: { normal: { background: { color: \"#e2e2e2\" }, margin: 6 } }\n      },\n      [Widget.Badge]: {\n        Badge: {\n          normal: {\n            position: { right: 2, top: 2 }\n          }\n        }\n      }\n    };\n    const circle = {\n      [Widget.Badge]: {\n        Badge: {\n          normal: {\n            position: { right: 2, top: -2 }\n          }\n        }\n      }\n    };\n    const numBadge = {\n      [Widget.Badge]: {\n        Badge: {\n          normal: {\n            position: { right: -2, top: -7 }\n          }\n        }\n      }\n    };\n    return (\n      <Wrapper>\n        <Theme config={view}>\n          <Badge dot={true}>\n            <Avatar shape={\"square\"} size={\"large\"} name={\"lugia\"} />\n          </Badge>\n        </Theme>\n\n        <Theme config={circle}>\n          <Badge dot={true}>\n            <Avatar\n              type=\"icon\"\n              icon={\"lugia-icon-financial_user\"}\n              size={\"large\"}\n            />\n          </Badge>\n        </Theme>\n        <br />\n        <Theme config={view}>\n          <Badge count={10}>\n            <Avatar shape={\"square\"} size={\"large\"} name={\"lugia\"} />\n          </Badge>\n        </Theme>\n        <Theme config={numBadge}>\n          <Badge count={10}>\n            <Avatar\n              type=\"icon\"\n              icon={\"lugia-icon-financial_user\"}\n              size={\"large\"}\n            />\n          </Badge>\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n`}</code>
                }
                desc={"可以和徽标一块组合显示"}
                demo={<ComboAvatar />}
              ></Demo>
              <EditTables dataSource={AVATAR} />
              <EditTheme dataSource={{ AVATAR }} />
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
                <Link title={"形状"} href={"#avatar-0"} />
                <Link title={"尺寸"} href={"#avatar-1"} />
                <Link title={"风格"} href={"#avatar-2"} />
                <Link title={"组合头像"} href={"#avatar-3"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
