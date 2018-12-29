/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Popconfirm, Theme, Button, Input, Icon } from "@lugia/lugia-web";
import styled from "styled-components";
const Direction = styled(Button)``;
const Wrapper = styled.div`
  margin: 100px;
`;
const IconWrapper = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 14px;
`;
const HintIcon: Object = styled(Icon)`
  color: white;
`;
export default class TypePopconfirm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    const text = "确定删除这个选项吗?";
    return (
      <Wrapper>
        <Popconfirm
          title={text}
          action={"click"}
          cancelText="No"
          okText="yes"
          okType="danger"
          icon={
            <IconWrapper style={{ background: "orange" }}>
              <HintIcon
                style={{ color: "white" }}
                iconClass={"lugia-icon-reminder_exclamation"}
              />
            </IconWrapper>
          }
        >
          <Direction type='primary'>提示</Direction>
        </Popconfirm>

        <Popconfirm
          title={text}
          action={"click"}
          cancelText="No"
          okText="yes"
          okType="danger"
          icon={
            <IconWrapper style={{ background: "red" }}>
              <HintIcon
                style={{ color: "white" }}
                iconClass={"lugia-icon-reminder_question"}
              />
            </IconWrapper>
          }
        >
          <Direction type='primary'>危险操作</Direction>
        </Popconfirm>
      </Wrapper>
    );
  }
}
