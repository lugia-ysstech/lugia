import React from 'react';
import styled from 'styled-components';
import { Steps, Button, Theme } from '@lugia/lugia-web';
const Step = Steps.Step;
const VWrapper = styled.div`
  margin-left: 150px;
  display: inline-block;
`;
export default class OrientationSteps extends React.Component<any, any> {
  render() {
    return (
    <div>
        <VWrapper>
          <Steps orientation="vertical" stepType="simple" size="normal">
            <Step title="step1" stepStatus="finish" content="content1" />
            <Step title="step2" stepStatus="process" content="content2" />
            <Step title="step3" stepStatus="next" content="content3" />
          </Steps>
        </VWrapper>
        <VWrapper>
          <Steps orientation="vertical" stepType="flat" size="normal">
            <Step title="step1" stepStatus="finish" content="content1" />
            <Step title="step2" stepStatus="process" content="content2" />
            <Step title="step3" stepStatus="next" content="content3" />
          </Steps>
        </VWrapper>
        <VWrapper>
          <Steps orientation="vertical" stepType={'dot'}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" isDashed={true} />
            <Step title="step3" stepStatus="next" isDashed={true} />
          </Steps>
        </VWrapper>
      </div>
    );
  }
}
