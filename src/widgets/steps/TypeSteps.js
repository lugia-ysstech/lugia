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
              title="1111"
              description={'description111'}
              stepStatus="finish"
            />
            <Step
              title="222"
              description={'description2'}
              stepStatus="process"
            />
            <Step title="33" description={'description33'} stepStatus="next" />
            <Step
              title="444"
              description={'description444'}
              stepStatus="wait"
            />
            <Step
              title="555"
              description={'description5555'}
              stepStatus="error"
            />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" size={'normal'} desAlign={'center'}>
            <Step
              title="1111"
              description={'description111'}
              stepStatus="finish"
            />
            <Step
              title="222"
              description={'description2'}
              stepStatus="process"
            />
            <Step title="33" description={'description33'} stepStatus="next" />
            <Step
              title="444"
              description={'description444'}
              stepStatus="wait"
            />
            <Step
              title="555"
              description={'description5555'}
              stepStatus="error"
            />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'simple'} size={'mini'}>
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" />
            <Step title="33" stepStatus="next" />
            <Step title="444" stepStatus="wait" />
            <Step title="555" stepStatus="error" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'flat'} size={'mini'}>
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" />
            <Step title="33" stepStatus="next" />
            <Step title="444" stepStatus="wait" />
            <Step title="555" stepStatus="error" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'flat'} size={'normal'}>
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" />
            <Step title="33" stepStatus="next" />
            <Step title="444" stepStatus="wait" />
            <Step title="555" stepStatus="error" />
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
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" isDashed={true} />
            <Step title="33" stepStatus="next" isDashed={true} />
            <Step title="444" stepStatus="wait" isDashed={true} />
            <Step title="555" stepStatus="error" isDashed={true} />
          </Steps>
        </Wrapper>
        <Wrapper>
          <Steps orientation="horizontal" stepType={'dot'}>
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" />
            <Step title="33" stepStatus="next" />
            <Step title="444" stepStatus="wait" />
            <Step title="555" stepStatus="error" />
          </Steps>
        </Wrapper>
      </Theme>
    );
  }
}
