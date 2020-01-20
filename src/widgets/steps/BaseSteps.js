import React from "react";
import styled from "styled-components";
import { Steps, Button, Theme } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
const Step = Steps.Step;
const Wrapper = styled.div`
  text-align: left;
  margin-bottom: 50px;
`;
export default class BaseSteps extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Wrapper>
          <Steps orientation="horizontal" size={"normal"}>
            <Step
              title="step1"
              description={"description1"}
              stepStatus="finish"
            />
            <Step
              title="step2"
              description={"description2"}
              stepStatus="process"
            />
            <Step
              title="step3"
              description={"description3"}
              stepStatus="next"
            />
          </Steps>
        </Wrapper>
        <br />
        <Wrapper>
          <Steps orientation="horizontal" size={"normal"} desAlign={"center"}>
            <Step
              title="step1"
              description={"description1"}
              stepStatus="finish"
            />
            <Step
              title="step2"
              description={"description2"}
              stepStatus="process"
            />
            <Step
              title="step3"
              description={"description3"}
              stepStatus="next"
            />
          </Steps>
        </Wrapper>
      </div>
    );
  }
}
