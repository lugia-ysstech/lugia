/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import {Theme,Radio} from '@lugia/lugia-web';
// import {consts as Widget} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const Wrapper = styled.div`
  margin-left: 50px;
  width: 50%;
`;
const data = [
  { text: 'radio1', value: 'Apple' },
  { text: 'radio2', value: 'Pear' },
  { text: 'radio3', value: 'Orange', disabled: true },
];
const view = {
  [Widget.RadioGroup]: {
    width: 100,
  },
  register: {
    width: 120,
    color: 'red',
    margin: 20,
  },
};
const radioView = {
  [Widget.RadioGroup]: {
    width: 100,
    color: 'red',
  },
};
const onChange = obj => {
  console.info('obj-demo', obj);
};
export const RadioDemo = () => {
  return (
    <div>
      <Wrapper>
        <p>default</p>
        <Radio value="1">Radio</Radio>
      </Wrapper>
      <Wrapper>
        <p>checked</p>
        <Radio checked>Radio</Radio>
      </Wrapper>
      <Wrapper>
        <p>defaultChecked</p>
        <Radio defaultChecked>Radio</Radio>
      </Wrapper>
      <Wrapper>
        <p>disabled</p>
        <Radio value="1" disabled>
          Radio
        </Radio>
        <Radio value="1" checked disabled>
          Radio
        </Radio>
      </Wrapper>
      <Wrapper>
        <p>style default</p>
        <Radio value="1">Radio</Radio>
        <Radio value="2">Radio</Radio>
        <p>style vertical</p>
        <Radio value="1" checked styles="vertical">
          Radio
        </Radio>
        <Radio value="1" styles="vertical">
          Radio
        </Radio>
      </Wrapper>
      <Theme config={view}>
        <Radio viewClass="register" checked value="apple">
          Radio
        </Radio>
      </Theme>
    </div>
  );
};
export default  class RadioGroupDemo extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      value: 'apple',
      displayValue: 'hello',
    };
  }
  handleChange = (obj: Object) => {
    this.setState({
      value: obj.newValue,
      displayValue: obj.newDisplayValue,
    });
  };
  render() {
    return (
      <div>
        <Wrapper>
          <p>RadioGroup 正常</p>
          <RadioGroup defaultValue="1">
            <Radio value="1">Radio</Radio>
            <Radio value="2">Radio2</Radio>
          </RadioGroup>
          <p>RadioGroup</p>
          <RadioGroup value="1">
            <Radio value="1">Radio</Radio>
            <Radio value="2">Radio2</Radio>
          </RadioGroup>
          <p>vertical</p>
          <RadioGroup defaultValue="1">
            <Radio value="1" styles="vertical">
              Radio
            </Radio>
            <Radio value="2" styles="vertical">
              Radio
            </Radio>
          </RadioGroup>
          <p>data</p>
          <RadioGroup displayFiled="text" defaultValue="Apple" data={data} />
          <p>styled vertical</p>
          <RadioGroup
            onChange={onChange}
            styles="vertical"
            displayFiled="text"
            valueField="value"
            defaultValue="Apple"
            data={data}
          />
        </Wrapper>
        <Wrapper>
          <p>themes</p>
          <Theme config={view}>
            <RadioGroup defaultValue="1" onChange={onChange}>
              <Radio viewClass="register" value="1" styles="vertical">
                Radio
              </Radio>

              <Radio viewClass="register" value="2" styles="vertical">
                Radio
              </Radio>
            </RadioGroup>
          </Theme>
          <p>data theme</p>
          <Theme config={view}>
            <RadioGroup defaultValue="Apple" valueField="value" data={data} />
          </Theme>
        </Wrapper>

        <Wrapper>
          <p>data displayValue</p>
          <RadioGroup
            onChange={onChange}
            displayFiled="text"
            valueField="value"
            value="apples"
            styles="vertical"
            displayValue="DisplayValue"
            data={data}
          />
        </Wrapper>
        <Wrapper>
          <p>data displayValue</p>
          <RadioGroup
            onChange={onChange}
            displayFiled="text"
            valueField="value"
            defaultValue="apples"
            styles="vertical"
            displayValue="DisplayValue"
            data={data}
          />
        </Wrapper>

        <Wrapper>
          <RadioGroup childType="button" onChange={onChange} defaultValue="1">
            <RadioButton value="1">CheckBox1</RadioButton>
            <RadioButton value="2">CheckBox2</RadioButton>
            <RadioButton value="3">CheckBox3</RadioButton>
          </RadioGroup>
        </Wrapper>
        <br />
        <Wrapper>
          <Theme config={radioView}>
            <RadioGroup childType="button" onChange={onChange} defaultValue="1">
              <RadioButton value="1">CheckBox1</RadioButton>
              <RadioButton value="2">CheckBox2</RadioButton>
              <RadioButton value="3">CheckBox3</RadioButton>
            </RadioGroup>
          </Theme>
        </Wrapper>
        <br />
        <Wrapper>
          <RadioGroup
            onChange={onChange}
            data={data}
            defaultValue="apple"
            displayValue="check"
            childType="button"
          />
        </Wrapper>
        <br />
        <Wrapper>
          <RadioGroup
            onChange={this.handleChange}
            data={data}
            value={this.state.value}
            displayValue={this.state.displayValue}
            childType="button"
          />
        </Wrapper>
      </div>
    );
  }
}
