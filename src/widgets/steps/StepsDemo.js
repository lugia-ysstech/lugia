/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import { steps, Button, Theme } from '@lugia/lugia-web';
const Step = steps.Step;
const Steps = steps.Steps;
const stepsData = [
  {
    title: 'First',
    content: 'First-content'
  },
  {
    title: 'Second',
    content: 'Second-content'
  },
  {
    title: 'Last',
    content: 'Third-content'
  }
];
const StepContent = styled.div`
  margin-top: 30px;
  margin-left: 45px;
  border: 1px solid #ccc;
  height: 100px;
`;
const ButtonContainer = styled.div`
  margin-bottom: 30px;
`;
export default class StepsDemo extends React.Component<Object, Object> {
  constructor(props) {
    super(props);
    this.state = {
      currentStepNumber: 1
    };
  }
  next() {
    const currentStepNumber =
      this.state.currentStepNumber > 3 ? 1 : this.state.currentStepNumber + 1;
    this.setState({ currentStepNumber });
  }
  pre() {
    const currentStepNumber =
      this.state.currentStepNumber <= 1 ? 3 : this.state.currentStepNumber - 1;
    this.setState({ currentStepNumber });
  }
  render() {
    const { currentStepNumber } = this.state;
    const matchCurrentNumber = currentStepNumber > 0 && currentStepNumber <= 3;
    const theCurrentStepNumber = matchCurrentNumber ? currentStepNumber : 1;
    const content = matchCurrentNumber
      ? stepsData[theCurrentStepNumber - 1].content
      : '';
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
      <div>
        <Theme config={view}>
          <ButtonContainer>
            <Button type="primary" onClick={() => this.pre()}>
              pre
            </Button>
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          </ButtonContainer>
          <Steps
            currentStepNumber={currentStepNumber}
            stepType={'simple'}
            size={'normal'}
          >
            {stepsData.map((item, i) => <Step title={item.title} />)}
          </Steps>
          <StepContent>{content}</StepContent>
        </Theme>
      </div>
    );
  }
}
