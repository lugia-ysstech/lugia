import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Theme, Grid, Radio, Upload, Button, Input } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts/index";
import { getBorderRadius, getBorder } from "@lugia/theme-utils";
import Header from "../components/header";

import banner from "./img/banner-background.png";
import { linkToUrl } from "../support/commonMethods";

const { Row, Col } = Grid;
const { Group: RadioGroup, Button: RadioButton } = Radio;
const { Textarea } = Input;

const BannerImg = styled.div`
  width: 100%;
  height: 100%;
  background:url("${banner}") no-repeat;
  background-size: cover;
  background-position: center center;
  position:absolute;
  top:0;
  z-index:-1;
  &:after {
    display: inline-block;
    content: "";
    width: 100%;
    height: 170px;
    background: #F6FAFB;
    position: absolute;
    bottom: -170px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 20px;
`;

const DialogWrap = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;
const DialogWrapInner = styled.div`
  width: 700px;
  background: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(77, 104, 255, 0.19);
`;
const ContentWrap = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

const DialogTitleWrap = styled(ContentWrap)`
  height: 70px;
`;
const DialogTitle = styled.div`
  font-family: PingFangSC-Regular;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  text-align: center;
`;

const DialogContentWrap = styled(ContentWrap)``;
const UserInputAreaWrap = styled.div`
  width: 100%;
  padding: 0 50px;
`;
const UserInputArea = styled.div`
  width: 100%;
`;
const UserInputTitle = styled.div`
  width: 100%;
  line-height: 20px;
  margin: 24px 0 6px 0;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #202700;
`;
const StarWrap = styled.span`
  display: inline-block;
  margin-right: 2px;
  font-size: 18px;
  color: #f22735;
  transform: translateY(5px);
`;
const UploadFileWrap = styled.div`
  width: 100%;
`;
const UploadTitle = styled.div`
  line-height: 20px;
  margin: 24px 0 6px 0;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #50575d;
`;

const DialogFooter = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const radioGroupTheme = {
  [Widget.RadioGroup]: {
    Container: {
      normal: {
        width: 600,
        height: 32,
        borderRadius: getBorderRadius(4),
        background: { color: "#fff" }
      }
    },
    CheckButton: {
      CheckButtonChecked: {
        normal: {
          width: 150,
          height: 32,
          border: getBorder({ color: "#4D68FF", width: 1, style: "solid" }),
          color: "#fff",
          font: { fontSize: 14 }
        }
      },
      CheckButtonUnChecked: {
        normal: {
          width: 150,
          height: 32,
          font: { fontSize: 14 }
        }
      }
    }
  }
};
const textareaTheme = {
  [Widget.Textarea]: {
    Container: {
      normal: {
        width: 600,
        height: 60
      }
    }
  }
};
const buttonTheme = {
  [Widget.Button]: {
    Container: {
      normal: {
        width: 160,
        height: 32,
        background: {
          image: "linear-gradient(90deg, #4D68FF 0%, #8093FF 100%)"
        },
        margin: {
          right: 8,
          left: 8
        }
      },
      disabled: {
        color: "#FFFFFF",
        background: {
          color: "#D8D8D8",
          image: "none"
        }
      }
    }
  }
};
const cancelButtonTheme = {
  [Widget.Button]: {
    Container: {
      normal: {
        width: 160,
        height: 32,
        margin: {
          right: 8,
          left: 8
        }
      }
    }
  }
};

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: "0",
      textValue: {
        0: { value: "", title: "您找不到什么教程呢？" },
        1: {
          value: "",
          title: "您看不懂什么教程呢？",
          placeholder: true,
          desc: true,
          descValue: "",
          descTitle: "您能说一下具体哪里看不懂嘛？"
        },
        2: {
          value: "",
          title: "您发现哪个教程有错误呢？",
          placeholder: true,
          desc: true,
          descValue: "",
          descTitle: "您能说一下哪里有错误吗？"
        },
        3: { value: "", title: "请输入您的反馈" }
      }
    };
  }

  onRadioGroupChange = obj => {
    const { newValue } = obj;
    this.setState({
      radioValue: newValue
    });
  };

  getFormatStateData = () => {
    const { textValue } = this.state;
    let dataIndexArr = Object.keys(textValue);
    let dataArr = [];
    const len = dataIndexArr.length;
    for (let i = 0; i < len; i++) {
      dataArr.push(textValue[dataIndexArr[i]]);
    }
    return dataArr;
  };

  handleTextareaChange = (index, value, desc = false) => {
    const { textValue } = this.state;
    const oldValue = textValue[index];
    const chosenValue = desc ? "descValue" : "value";
    this.setState({
      textValue: {
        ...textValue,
        [index]: { ...oldValue, [chosenValue]: value }
      }
    });
  };
  getUserInputArea = () => {
    const { radioValue } = this.state;
    const data = this.getFormatStateData();
    return (
      data &&
      data.map((item, index) => {
        const {
          value,
          title,
          placeholder = false,
          desc = false,
          descTitle = "",
          descValue = ""
        } = item;
        if (radioValue == index) {
          return (
            <UserInputArea>
              <UserInputTitle>
                <StarWrap>*</StarWrap>
                {title}
              </UserInputTitle>
              <Theme config={textareaTheme}>
                <Textarea
                  placeholder={
                    placeholder && "请把教程名称或教程链接粘贴在这里"
                  }
                  value={value}
                  onChange={({ newValue }) =>
                    this.handleTextareaChange(index, newValue)
                  }
                />
              </Theme>
              {desc && (
                <Fragment>
                  <UserInputTitle>{descTitle}</UserInputTitle>
                  <Theme config={textareaTheme}>
                    <Textarea
                      placeholder="请把教程名称或教程链接粘贴在这里"
                      value={descValue}
                      onChange={({ newValue }) =>
                        this.handleTextareaChange(index, newValue, desc)
                      }
                    />
                  </Theme>
                </Fragment>
              )}
            </UserInputArea>
          );
        }
      })
    );
  };

  hasAllNecessaryValue = () => {
    let flag = false;
    const data = this.getFormatStateData();
    data &&
      data.forEach(item => {
        const { value } = item;
        value || (flag = true);
      });
    return flag;
  };

  handleOkClick = () => {
    const { textValue } = this.state;
    console.log("textValue", textValue);
  };

  render() {
    const uploadDefaultProps = {
      areaType: "default",
      inputId: "upload",
      showFileList: true,
      url: "http://localhost:7001/upload",
      multiple: true,
      isShowProgress: false,
      defaultTips: {
        uploadTips: "请选择或拖拽上传文件, 限制每个在20MB以内"
      },
      accessKey: ["uploadToken"],
      beforeUpload: (file: Object) => {
        return new Promise((resolve, reject) => {
          request({
            url: "http://localhost:7001/getToken",
            method: "post",
            dataType: "json",
            data: { name: file.name },
            onSuccess: res => {
              if (res.code === 200) {
                file.uploadToken = res.data;
                resolve({ status: true, file });
              } else {
                reject();
              }
            },
            onFail: res => {
              reject();
            }
          });
        });
      },
      data: {},
      onChange: res => {},
      onSuccess: (res, fileList) => {},
      onComplete: res => {},
      onProgress: res => {},
      onFail: res => {}
    };

    return (
      <Fragment>
        <BannerImg />
        <Row>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 3 }}>
            <Wrapper> </Wrapper>
          </Col>
          <Col span={22} md={{ span: 22 }} xl={{ span: 20 }} xxl={{ span: 18 }}>
            <Header />

            <DialogWrap>
              <DialogWrapInner>
                <DialogTitleWrap>
                  <DialogTitle>您要提交什么优化反馈呢？</DialogTitle>
                </DialogTitleWrap>

                <DialogContentWrap>
                  <Theme config={radioGroupTheme}>
                    <RadioGroup
                      childType="button"
                      onChange={this.onRadioGroupChange}
                      defaultValue="0"
                    >
                      <RadioButton value="0">找不到教程</RadioButton>
                      <RadioButton value="1">看不懂教程</RadioButton>
                      <RadioButton value="2">教程有错误</RadioButton>
                      <RadioButton value="3">其它</RadioButton>
                    </RadioGroup>
                  </Theme>
                  <UserInputAreaWrap>
                    {this.getUserInputArea()}

                    <UploadFileWrap>
                      <UploadTitle>附件</UploadTitle>
                      <Upload {...uploadDefaultProps} />
                    </UploadFileWrap>
                  </UserInputAreaWrap>
                </DialogContentWrap>

                <DialogFooter>
                  <Theme config={buttonTheme}>
                    <Button
                      type="primary"
                      disabled={this.hasAllNecessaryValue()}
                      onClick={this.handleOkClick}
                    >
                      确定
                    </Button>
                  </Theme>
                  <Theme config={cancelButtonTheme}>
                    <Button onClick={() => linkToUrl("/tutorial")}>取消</Button>
                  </Theme>
                </DialogFooter>
              </DialogWrapInner>
            </DialogWrap>
          </Col>
          <Col span={1} md={{ span: 1 }} xl={{ span: 2 }} xxl={{ span: 3 }}>
            <Wrapper> </Wrapper>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
