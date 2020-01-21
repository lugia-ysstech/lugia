import React from "react";
import { Popconfirm, Button, Icon } from "@lugia/lugia-web";
import styled from "styled-components";
const Direction = styled(Button)``;
const Wrapper = styled.div``;
const IconWrapper = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 14px;
`;
const HintIcon: Object = styled(Icon)`
  color: white;
  font-size: 14px;
`;
const PopWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
`;
export default class TypePopconfirm extends React.Component<any, any> {
  render() {
    const text = "确定删除这个选项吗?";
    return (
      <Wrapper>
        <PopWrapper>
          <Popconfirm
            placement="top"
            title={text}
            action={"click"}
            cancelText="No"
            okText="yes"
            okType="danger"
            icon={
              <IconWrapper style={{ background: "orange" }}>
                <HintIcon iconClass={"lugia-icon-reminder_exclamation"} />
              </IconWrapper>
            }
          >
            <Direction type="primary">提示</Direction>
          </Popconfirm>
        </PopWrapper>
        <PopWrapper>
          <Popconfirm
            placement="top"
            title={text}
            action={"click"}
            cancelText="No"
            okText="yes"
            okType="danger"
            icon={
              <IconWrapper style={{ background: "#f22735" }}>
                <HintIcon
                  style={{ color: "white" }}
                  iconClass={"lugia-icon-reminder_question"}
                />
              </IconWrapper>
            }
          >
            <Direction type="primary">危险操作</Direction>
          </Popconfirm>
        </PopWrapper>
      </Wrapper>
    );
  }
}
