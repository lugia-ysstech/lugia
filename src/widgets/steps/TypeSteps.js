/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
import { steps, Button, Theme } from "@lugia/lugia-web";
const Step = steps.Step;
const Steps = steps.Steps;
const Wrapper = styled.div`
  text-align: left;
  margin: 50px;
`;
export default class TypeSteps extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
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
          <p>带有描述</p>
          <Steps orientation="horizontal" size={"normal"}>
            <Step
              title="1111"
              description={"description111"}
              stepStatus="finish"
            />
            <Step
              title="222"
              description={"description2"}
              stepStatus="process"
            />
            <Step title="33" description={"description33"} stepStatus="next" />
            <Step
              title="444"
              description={"description444"}
              stepStatus="wait"
            />
            <Step
              title="555"
              description={"description5555"}
              stepStatus="error"
            />
          </Steps>
        </Wrapper>
        <Wrapper>
          <p>带有描述 居中显示</p>
          <Steps orientation="horizontal" size={"normal"} desAlign={"center"}>
            <Step
              title="1111"
              description={"description111"}
              stepStatus="finish"
            />
            <Step
              title="222"
              description={"description2"}
              stepStatus="process"
            />
            <Step title="33" description={"description33"} stepStatus="next" />
            <Step
              title="444"
              description={"description444"}
              stepStatus="wait"
            />
            <Step
              title="555"
              description={"description5555"}
              stepStatus="error"
            />
          </Steps>
        </Wrapper>
        <Wrapper>
          <p>简洁风格 size mini</p>
          <Steps orientation="horizontal" stepType={"simple"} size={"mini"}>
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" />
            <Step title="33" stepStatus="next" />
            <Step title="444" stepStatus="wait" />
            <Step title="555" stepStatus="error" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <p>半扁平风格</p>
          <Steps orientation="horizontal" stepType={"flat"} size={"mini"}>
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" />
            <Step title="33" stepStatus="next" />
            <Step title="444" stepStatus="wait" />
            <Step title="555" stepStatus="error" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <p>半扁平风格</p>
          <Steps orientation="horizontal" stepType={"flat"} size={"normal"}>
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" />
            <Step title="33" stepStatus="next" />
            <Step title="444" stepStatus="wait" />
            <Step title="555" stepStatus="error" />
          </Steps>
        </Wrapper>

        <Wrapper>
          <p>icon</p>
          <Steps orientation="horizontal" stepType={"icon"} size={"mini"}>
            <Step icon={"lugia-icon-financial_cloud"} stepStatus="finish" />
            <Step icon={"lugia-icon-financial_cloud"} stepStatus="process" />
            <Step icon={"lugia-icon-financial_cloud"} stepStatus="next" />
            <Step icon={"lugia-icon-financial_cloud"} stepStatus="wait" />
            <Step icon={"lugia-icon-financial_cloud"} stepStatus="error" />
          </Steps>
        </Wrapper>
        <Wrapper>
          <p>点状 虚线</p>
          <Steps orientation="horizontal" stepType={"dot"}>
            <Step title="1111" stepStatus="finish" />
            <Step title="222" stepStatus="process" isDashed={true} />
            <Step title="33" stepStatus="next" isDashed={true} />
            <Step title="444" stepStatus="wait" isDashed={true} />
            <Step title="555" stepStatus="error" isDashed={true} />
          </Steps>
        </Wrapper>
        <Wrapper>
          <p>点状 实线</p>
          <Steps orientation="horizontal" stepType={"dot"}>
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
