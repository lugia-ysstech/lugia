import React from 'react';
import styled from 'styled-components';
import { Steps, Button, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
const Step = Steps.Step;
const VWrapper = styled.div`
  text-align: left;
  margin: 50px;
  display: inline-block;
`;
export default class OrientationSteps extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Steps]: {
        width: 400
      },
    };
    return (
      <Theme config={view}>
        <VWrapper>
          <Steps orientation="vertical" stepType="simple" size="normal">
            <Step title="step1" stepStatus="finish" content="content1" />
            <Step title="step2" stepStatus="process" content="content2" />
            <Step title="step3" stepStatus="next" content="content3" />
          </Steps>
        </VWrapper>
        <VWrapper>
          <Steps orientation="vertical" stepType="simple" size={'normal'}>
            <Step
              title="step1"
              description={'description1'}
              stepStatus="finish"
            />
            <Step
              title="step2"
              description={'description2'}
              stepStatus="process"
            />
            <Step title="step3" description={'description3'} stepStatus="next" />
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
          <Steps orientation="vertical" stepType={'icon'} size={'mini'}>
            <Step
              icon={'lugia-icon-financial_cloud'}
              title="step1"
              stepStatus="finish"
            />
            <Step
              icon={'lugia-icon-financial_cloud'}
              title="step2"
              stepStatus="process"
            />
            <Step
              icon={'lugia-icon-financial_cloud'}
              title="step3"
              stepStatus="next"
            />
          </Steps>
        </VWrapper>
        <VWrapper>
          <Steps orientation="vertical" stepType={'dot'}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" isDashed={true} />
            <Step title="step3" stepStatus="next" isDashed={true} />
          </Steps>
        </VWrapper>
      </Theme>
    );
  }
}
