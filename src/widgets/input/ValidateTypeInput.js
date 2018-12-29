/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Input } from "@lugia/lugia-web";
import styled from "styled-components";
import { fixControlledValue } from "@lugia/lugia-web/dist/utils";

const Wrapper = styled.div`
  float: left;
  margin-left: 50px;
`;

const onChange = cmpName => (value: any) => {};
class ValidateInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps: Object, preState: Object) {
    let { value } = nextProps;
    const hasValueInprops = "value" in nextProps;
    value = fixControlledValue(value);
    if (!preState) {
      return {
        value: hasValueInprops ? value : ""
      };
    }
    if (hasValueInprops) {
      return { value };
    }
  }
  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
    this.props.onChange({ newValue: value });
  };

  render() {
    const { validateType } = this.props;
    const value = this.state.value;
    const validateStatus = value.indexOf(",") === -1 ? "success" : "error";
    return (
      <Input
        onChange={this.onChange}
        validateType={validateType}
        validateStatus={validateStatus}
      />
    );
  }
}
export class TopInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps: Object, preState: Object) {
    let { value } = nextProps;
    const hasValueInprops = "value" in nextProps;
    value = fixControlledValue(value);
    if (!preState) {
      return {
        value: hasValueInprops ? value : "",
        validateStatus: "success"
      };
    }
    if (hasValueInprops) {
      return { value };
    }
  }
  onChange = (param: any) => {
    const { newValue: value } = param;
    this.setState({ value });
    this.props.onChange({ newValue: value });
  };
  onBlur = (event: UIEvent) => {
    const validateStatus =
      this.state.value.indexOf(",") === -1 ? "success" : "error";
    this.setState({ validateStatus });
  };
  render() {
    const { validateType } = this.props;
    return (
      <Input
        onBlur={this.onBlur}
        onChange={this.onChange}
        validateType={validateType}
        validateStatus={this.state.validateStatus}
      />
    );
  }
}

export default class ValidateTypeInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    return (
      <Wrapper>
        <div>校验是否含有</div>
        <p>校验信息显示类型 top '</p>
        <TopInput
          viewClass="register"
          validateType="top"
          onChange={onChange("limit")}
        />
        <p>校验信息显示类型 bottom</p>
        <ValidateInput
          viewClass="register"
          validateType="bottom"
          onChange={onChange("limit")}
        />
        <p>校验信息显示类型 inner</p>
        <ValidateInput
          viewClass="register"
          validateType="inner"
          onChange={onChange("limit")}
        />
      </Wrapper>
    );
  }
}
