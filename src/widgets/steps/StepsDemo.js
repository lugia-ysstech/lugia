import React from 'react';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import { Steps, Button, Theme } from '@lugia/lugia-web';
const Step = Steps.Step;
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
  margin-top: 10px;
  border: 1px solid #ccc;
  height: 200px;
  width: 400px;
  font-size:12px;
  background：#e8e8e8;
  border-radius:4px;
  position:relative;
`;
const ButtonContainer = styled.div`
  display: inline-block;
  margin-top: 20px;
  margin-right: 8px;
`;
const ContentText = styled.div`
  margin-top: 10px;
  text-align: center;
  color: #666;
  font-size: 14px;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
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
        width: 400
      }
    };
    return (
      <div>
        <Theme config={view}>
          <Steps
            currentStepNumber={currentStepNumber}
            stepType={'simple'}
            size={'normal'}
          >
            {stepsData.map((item, i) => <Step title={item.title} />)}
          </Steps>
          <StepContent>{<ContentText>{content}</ContentText>}</StepContent>
          <ButtonContainer>
            <Button type="primary" onClick={() => this.pre()}>
              上一步
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button type="primary" onClick={() => this.next()}>
              下一步
            </Button>
          </ButtonContainer>
        </Theme>
      </div>
    );
  }
}
