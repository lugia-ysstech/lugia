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
        width: 1000
      },
      [Widget.Step]: {
        width: 350,
        height: 100
      }
    };
    return (
      <Theme config={view}>
          <VWrapper>

            <Steps orientation="vertical" stepType="simple" size="mini">
              <Step title="1111" stepStatus="finish" content="content1" />
              <Step title="222" stepStatus="process" content="content2" />
              <Step title="33" stepStatus="next" content="content3" />
              <Step title="444" stepStatus="wait" content="content4" />
              <Step title="555" stepStatus="error" content="content5" />
            </Steps>
          </VWrapper>
          <VWrapper>

            <Steps orientation="vertical" stepType="simple" size="normal">
              <Step title="1111" stepStatus="finish" content="content1" />
              <Step title="222" stepStatus="process" content="content2" />
              <Step title="33" stepStatus="next" content="content3" />
              <Step title="444" stepStatus="wait" content="content4" />
              <Step title="555" stepStatus="error" content="content5" />
            </Steps>
          </VWrapper>
          <VWrapper>
            <Steps orientation="vertical" stepType="simple" size={'normal'}>
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
          </VWrapper>
          <VWrapper>

            <Steps orientation="vertical" stepType="flat" size="normal">
              <Step title="1111" stepStatus="finish" content="content1" />
              <Step title="222" stepStatus="process" content="content2" />
              <Step title="33" stepStatus="next" content="content3" />
              <Step title="444" stepStatus="wait" content="content4" />
              <Step title="555" stepStatus="error" content="content5" />
            </Steps>
          </VWrapper>
          <VWrapper>
            <Steps orientation="vertical" stepType={'icon'} size={'mini'}>
              <Step
                icon={'lugia-icon-financial_cloud'}
                title="1111"
                stepStatus="finish"
              />
              <Step
                icon={'lugia-icon-financial_cloud'}
                title="222"
                stepStatus="process"
              />
              <Step
                icon={'lugia-icon-financial_cloud'}
                title="333"
                stepStatus="next"
              />
              <Step
                icon={'lugia-icon-financial_cloud'}
                title="444"
                stepStatus="wait"
              />
              <Step
                icon={'lugia-icon-financial_cloud'}
                title="555"
                stepStatus="error"
              />
            </Steps>
          </VWrapper>
          <VWrapper>
            <Steps orientation="vertical" stepType={'dot'}>
              <Step title="1111" stepStatus="finish" />
              <Step title="222" stepStatus="process" isDashed={true} />
              <Step title="33" stepStatus="next" isDashed={true} />
              <Step title="444" stepStatus="wait" isDashed={true} />
              <Step title="555" stepStatus="error" isDashed={true} />
            </Steps>
          </VWrapper>
          <VWrapper>
            <Steps orientation="vertical" stepType="dot" size="normal">
              <Step title="1111" stepStatus="finish" content="content1" />
              <Step title="222" stepStatus="process" content="content2" />
              <Step title="33" stepStatus="next" content="content3" />
              <Step title="444" stepStatus="wait" content="content4" />
              <Step title="555" stepStatus="error" content="content5" />
            </Steps>
          </VWrapper>
      </Theme>
    );
  }
}
