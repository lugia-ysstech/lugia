import React from 'react';
import styled from 'styled-components';
import { Steps, Button, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
const Step = Steps.Step;
const Wrapper = styled.div`
  text-align: left;
  margin: 50px;
`;
export default class BaseSteps extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Steps]: {
        width: 470
      },
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
          </Steps>
        </Wrapper>
      </Theme>
    );
  }
}
