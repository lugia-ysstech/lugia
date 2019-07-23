import React from 'react';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import { Steps, Button, Theme } from '@lugia/lugia-web';
const Step = Steps.Step;

const steps = [
  {
    title: 'First',
    description: 'First-content',
  },
  {
    title: 'Second',
    description: 'Second-content',
  },
  {
    title: 'Last',
    description: 'Third-content',
  },
];
const StepDescription = styled.div`
  width: 600px;
  margin-top: 50px;
  border: 1px solid #ccc;
  height: 100px;
`;
const Warpper = styled.div`
  margin-left: 50px;
`;
const ButtonContainer = styled.div`
  margin-bottom: 30px;
`;



export default class StepsDemo extends React.Component<Object, Object> {
  constructor(props) {
    super(props);
    this.state = {
      currentStepNumber: 1,
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
    const description = matchCurrentNumber ? steps[theCurrentStepNumber - 1].content : '';
    const view = {
      [Widget.Steps]: {
        StepsOutContainer: {
          normal: {
            width: 600,
          },
        },
      },
    };
    return (
      <Warpper>
        <Theme config={view}>
          <ButtonContainer>
            <Button type="primary" onClick={() => this.pre()}>
              pre
            </Button>
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          </ButtonContainer>
          <Steps currentStepNumber={currentStepNumber} stepType={'simple'} size={'normal'}>
            {steps.map((item, i) => (
              <Step  title={item.title} />
            ))}
          </Steps>
          <StepDescription>{description}</StepDescription>
        </Theme>
      </Warpper>
    );
  }
}
