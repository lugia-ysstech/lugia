/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import styled from 'styled-components';
import { steps, Button, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
const Step = steps.Step;
const Steps = steps.Steps;
const Wrapper = styled.div`
  text-align: left;
  margin: 50px;
`;
export default class BaseSteps extends React.Component<any, any> {
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
          <p>基本使用,五种状态</p>
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
          <p>带有描述 居中显示</p>
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
      </Theme>
    );
  }
}
