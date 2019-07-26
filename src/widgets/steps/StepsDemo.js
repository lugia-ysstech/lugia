import React from "react";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";
import { Steps, Button, Theme } from "@lugia/lugia-web";
const Step = Steps.Step;

const steps = [
  {
    title: "First Step",
    description: "First Step Content"
  },
  {
    title: "Second Step",
    description: "Second  Step Content"
  },
  {
    title: "Last Step",
    description: "Third  Step Content"
  }
];
const StepDescription = styled.div`
  width: 400px;
  margin-top: 40px;
  border: 1px solid #ccc;
  height: 100px;
  text-align: center;
  padding-top: 20px;
`;
const Warpper = styled.div`
  margin-left: 50px;
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
    const description = matchCurrentNumber
      ? steps[theCurrentStepNumber - 1].description
      : "";
    const view = {
      [Widget.Steps]: {
        StepsOutContainer: {
          normal: {
            width: 400
          }
        }
      },
      [Widget.Button]: {
        Container: {
          normal: {
            width: 80,
            margin: {
              top: 20
            }
          }
        }
      }
    };
    const button = {
      [Widget.Button]: {
        Container: {
          normal: {
            margin: {
              left: 6
            }
          }
        }
      }
    };
    return (
      <Warpper>
        <Theme config={view}>
          <Steps
            currentStepNumber={currentStepNumber}
            stepType={"simple"}
            desAlign={'center'}
            size={"normal"}
          >
            {steps.map((item, i) => <Step title={item.title} />)}
          </Steps>
          <StepDescription>{description}</StepDescription>
          <Button type="primary" onClick={() => this.pre()}>
            上一步
          </Button>
          <Button theme={button} type="primary" onClick={() => this.next()}>
            下一步
          </Button>
        </Theme>
      </Warpper>
    );
  }
}
