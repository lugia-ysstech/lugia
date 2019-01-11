import React from 'react';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
import { Steps, Button, Theme } from '@lugia/lugia-web';
const Step = Steps.Step;
const Wrapper = styled.div`
  text-align: left;
  margin: 50px;
`;
export default class TypeSteps extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const view = {
      [Widget.Steps]: {
        width: 1000
      },
      [Widget.Step]: {
        width: 350,
        height: 100
      }
    };
    return (
      <Theme config={view}>
        <Wrapper>
          <Steps orientation="horizontal" size={'normal'}>
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
            <Step
              title="step4"
              description={'description4'}
              stepStatus="wait"
            />
            <Step
              title="step5"
              description={'description5'}
              stepStatus="error"
            />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" size={'normal'} desAlign={'center'}>
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
            <Step
              title="step4"
              description={'description4'}
              stepStatus="wait"
            />
            <Step
              title="step5"
              description={'description5'}
              stepStatus="error"
            />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'simple'} size={'mini'}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" />
            <Step title="step3" stepStatus="next" />
            <Step title="step4" stepStatus="wait" />
            <Step title="step5" stepStatus="error" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'flat'} size={'mini'}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" />
            <Step title="step3" stepStatus="next" />
            <Step title="step4" stepStatus="wait" />
            <Step title="step5" stepStatus="error" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'flat'} size={'normal'}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" />
            <Step title="step3" stepStatus="next" />
            <Step title="step4" stepStatus="wait" />
            <Step title="step5" stepStatus="error" />
          </Steps>
        </Wrapper>

        <Wrapper>
          <Steps orientation="horizontal" stepType={'icon'} size={'mini'}>
            <Step icon={'lugia-icon-financial_cloud'} stepStatus="finish" />
            <Step icon={'lugia-icon-financial_cloud'} stepStatus="process" />
            <Step icon={'lugia-icon-financial_cloud'} stepStatus="next" />
            <Step icon={'lugia-icon-financial_cloud'} stepStatus="wait" />
            <Step icon={'lugia-icon-financial_cloud'} stepStatus="error" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'dot'}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" isDashed={true} />
            <Step title="step3" stepStatus="next" isDashed={true} />
            <Step title="step4" stepStatus="wait" isDashed={true} />
            <Step title="step5" stepStatus="error" isDashed={true} />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'dot'}>
            <Step title="step1" stepStatus="finish" />
            <Step title="step2" stepStatus="process" />
            <Step title="step3" stepStatus="next" />
            <Step title="step4" stepStatus="wait" />
            <Step title="step5" stepStatus="error" />
          </Steps>
        </Wrapper>
      </Theme>
    );
  }
}
