import React from "react";
import { Input, Theme } from "@lugia/lugia-web";
import styled from "styled-components";
import { fixControlledValue } from "@lugia/lugia-web/dist/utils";

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
`;
const OutWrapper = styled.div`
  display: flex;
`;

const onChange = cmpName => (value: any) => {};

export class ValidateInput extends React.Component<any, any> {
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
    const validateStatus = value.indexOf("a") === -1 ? "success" : "error";

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
    this.props.onChange({ newValue: value });
    const validateStatus = value.indexOf("a") === -1 ? "success" : "error";
    this.setState({ value, validateStatus });
  };
  render() {
    const { validateType } = this.props;
    return (
      <Input
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
      <OutWrapper>
        <Wrapper>
          <TopInput validateType="top" onChange={onChange("limit")} />
        </Wrapper>
        <Wrapper>
          <ValidateInput validateType="bottom" onChange={onChange("limit")} />
        </Wrapper>
        <Wrapper>
          <ValidateInput validateType="inner" onChange={onChange("limit")} />
        </Wrapper>
      </OutWrapper>
    );
  }
}
