import React from "react";
import { Anchor, Grid } from "@lugia/lugia-web";
import EditTables from "../../edit-table";
import FooterNav from "../../footer-nav";
import PageNavHoC from "../../common/PageNavHoC";
import widgetrouter from "../../router/widgetrouter";
import UPLOAD from "@lugia/lugia-web/dist/upload/lugia.upload.zh-CN.json";
import Demo from "../code-box";
import Title from "../code-box/Title";
const BaseUpload = require("./BaseUpload").default;
const CustomUpload = require("./CustomUpload").default;
const FileListUpload = require("./FileListUpload").default;
const PictureUpload = require("./PictureUpload").default;
const DisabledUpload = require("./DisabledUpload").default;

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
                title={"上传"}
                subTitle={"Upload"}
                desc={"上传组件,可通过文件选择和拖拽上传"}
              />
              <Demo
                title={"默认上传"}
                titleID={"upload-0"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const defaultProps = {\n      inputId: \'defaultUpload\',\n      url: \'/upload\',\n      multiple: true,\n    };\n\n    return (\n      <div>\n        <Upload {...defaultProps} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"默认的上传组件风格"}
                demo={<BaseUpload />}
              ></Demo>
              <Demo
                title={"多种风格"}
                titleID={"upload-1"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload,  Button } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\n\nconst Title = styled.div\`\n    margin: 10px 0;\n\`;\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const bothProps = {\n      areaType: \'both\',\n      inputId: \'bothUpload\',\n      url: \'/upload\',\n    };\n    const buttonProps = {\n      areaType: \'button\',\n      inputId: \'buttonUpload\',\n      url: \'/upload\',\n    };\n    const pictureProps = {\n      areaType: \'picture\',\n      inputId: \'pictureUpload\',\n      url: \'/upload\',\n    };\n    const areaProps = {\n      areaType: \'area\',\n      inputId: \'areaUpload\',\n      url: \'/upload\',\n    };\n    const customProps = {\n      areaType: \'custom\',\n      inputId: \'customUpload\',\n      url: \'/upload\'\n    };\n\n    return (\n      <div>\n        <Title>带按钮的默认上传</Title>\n        <Upload {...bothProps} />\n        <Title>按钮上传</Title>\n        <Upload {...buttonProps} />\n        <Title>图片上传</Title>\n        <Upload {...pictureProps} />\n        <Title>区域上传</Title>\n        <Upload {...areaProps} />\n        <Title>自定义上传</Title>\n        <Upload {...customProps} userDefine={ <Button circle icon=\"lugia-icon-financial_download\" />  } />\n\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"多种风格上传,按钮,区域,图片等"}
                demo={<CustomUpload />}
              ></Demo>
              <Demo
                title={"文件列表"}
                titleID={"upload-2"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload } from \'@lugia/lugia-web\';\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const buttonProps = {\n      areaType: \'button\',\n      inputId: \'buttonUpload\',\n      showFileList: true,\n      url: \'/upload\',\n      fileList: [\n        { id: 1, name: \'上传完成的图片.jpg\', status: \'done\' },\n        { id: 2, name: \'上传失败的文档.doc\', status: \'fail\' }\n      ]\n    };\n    return (\n      <div>\n        <Upload {...buttonProps} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"显示文件列表"}
                demo={<FileListUpload />}
              ></Demo>
              <Demo
                title={"图片上传"}
                titleID={"upload-3"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\n\nconst Title = styled.div\`\n    margin: 10px 0;\n\`;\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n  }\n\n  render() {\n    const smallPictureProps = {\n      areaType: \'picture\',\n      inputId: \'upload1\',\n      size: \'small\',\n      url: \'/upload\',\n    };\n    const defaultPictureProps = {\n      areaType: \'picture\',\n      inputId: \'upload2\',\n      url: \'/upload\',\n    };\n    const largePictureProps = {\n      areaType: \'picture\',\n      inputId: \'upload3\',\n      size: \'large\',\n      url: \'/upload\',\n    };\n\n    return (\n      <div>\n        <Title>size：small</Title>\n        <Upload {...smallPictureProps} />\n        <Title>size：default</Title>\n        <Upload {...defaultPictureProps} />\n        <Title>size：large</Title>\n        <Upload {...largePictureProps} />\n      </div>\n    );\n  }\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"多种图片上传尺寸"}
                demo={<PictureUpload />}
              ></Demo>
              <Demo
                title={"禁用"}
                titleID={"upload-4"}
                code={
                  <code>{`import React from \'react\';\nimport { Upload } from \'@lugia/lugia-web\';\nimport styled from \"styled-components\";\n\nconst Title = styled.div\`\n    margin: 10px 0;\n\`;\n\nclass UploadDemo extends React.Component<any, any> {\n  constructor(props: Object) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    const defaultProps = {\n      areaType: \'default\',\n      inputId: \'upload\',\n      showFileList: true,\n      disabled: true,\n      url: \'/upload\',\n    };\n    const bothProps = {\n      areaType: \'both\',\n      inputId: \'upload\',\n      showFileList: true,\n      disabled: true,\n      url: \'/upload\',\n    };\n    const buttonProps = {\n      areaType: \'button\',\n      inputId: \'upload2\',\n      showFileList: true,\n      disabled: true,\n      url: \'/upload\',\n\n    };\n    const areaProps = {\n      areaType: \'area\',\n      inputId: \'upload3\',\n      disabled: true,\n      showFileList: true,\n      url: \'/upload\',\n    };\n    const pictureProps = {\n      areaType: \'picture\',\n      inputId: \'upload4\',\n      disabled: true,\n      showFileList: true,\n      url: \'/upload\',\n    };\n    return (\n      <div>\n        <Title>areaType: default</Title>\n        <Upload {...defaultProps} />\n        <Title>areaType: both</Title>\n        <Upload {...bothProps} />\n        <Title>areaType: button</Title>\n        <Upload {...buttonProps} />\n        <Title>areaType: area</Title>\n        <Upload {...areaProps} />\n        <Title>areaType: picture</Title>\n        <Upload {...pictureProps} />\n      </div>\n    );\n  }\n\n}\n\nexport default UploadDemo;\n`}</code>
                }
                desc={"禁用上传功能"}
                demo={<DisabledUpload />}
              ></Demo>
              <EditTables dataSource={UPLOAD} />
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
                <Link title={"默认上传"} href={"#upload-0"} />
                <Link title={"多种风格"} href={"#upload-1"} />
                <Link title={"文件列表"} href={"#upload-2"} />
                <Link title={"图片上传"} href={"#upload-3"} />
                <Link title={"禁用"} href={"#upload-4"} />
              </Anchor>
            </Col>
          )}
        </Row>
      );
    }
  }
);
