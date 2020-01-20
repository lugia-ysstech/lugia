import React from "react";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
import { Steps, Button, Theme } from "@lugia/lugia-web";
const Step = Steps.Step;
const Wrapper = styled.div`
  text-align: left;
  margin: 50px;
`;
export default class TypeSteps extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Steps orientation="horizontal" size={"normal"} desAlign={"center"}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" />
            <Step title="step3" stepStatus="next" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={"flat"} size={"normal"}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" />
            <Step title="step3" stepStatus="next" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={"icon"} size={"mini"}>
            <Step
              icon={"lugia-icon-financial_cloud"}
              title="step1"
              stepStatus="finish"
            />
            <Step
              icon={"lugia-icon-financial_cloud"}
              title="step2"
              stepStatus="process"
            />
            <Step
              icon={"lugia-icon-financial_cloud"}
              title="step3"
              stepStatus="next"
            />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={"dot"}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" isDashed={true} />
            <Step title="step3" stepStatus="next" isDashed={true} />
          </Steps>
        </Wrapper>
      </div>
    );
  }
}
