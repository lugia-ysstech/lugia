import React from "react";
import styled from "styled-components";
import { Steps } from "@lugia/lugia-web";
const Step = Steps.Step;
const Wrapper = styled.div`
  margin-bottom: 50px;
`;
export default class SizeSteps extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Wrapper>
          <Steps stepType="simple" size="mini">
            <Step title="step1" stepStatus="finish" content="content1" />
            <Step title="step2" stepStatus="process" content="content2" />
            <Step title="step3" stepStatus="next" content="content3" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps stepType="simple" size="normal">
            <Step title="step1" stepStatus="finish" content="content1" />
            <Step title="step2" stepStatus="process" content="content2" />
            <Step title="step3" stepStatus="next" content="content3" />
          </Steps>
        </Wrapper>
      </div>
    );
  }
}
