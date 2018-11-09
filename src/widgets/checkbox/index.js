/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import { CheckBox, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
// import Widget from '../consts';
// import CheckBox from './';

const CheckBoxGroup = CheckBox.Group;
const CheckBoxButton = CheckBox.Button;
const Wrapper = styled.div`
  margin: 20px;
`;
const defaultValue = ['1', '2'];
const options = [
  { label: 'check1', value: '11', name: '1' },
  { label: 'check2', value: '22', name: '2' },
  { label: 'check3', value: '33', name: '3' },
];
const handleChange = obj => {
  console.info(obj);
};
const view = {
  [Widget.CheckBox]: {
    color: 'red',
  },
  [Widget.CheckBoxGroup]: {
    color: 'red',
    width: 100,
  },
  register: {
    width: 120,
    color: 'red',
    margin: 20,
  },
};
export default  class CheckBoxGroupDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      newValue: ['11', '44'],
      newDisplayValue: ['check4', 'check5'],
    };
  }

  handleChange = ({ newValue, newDisplayValue }: any): any => {
    console.info(newValue, newDisplayValue);
    this.setState({ newValue, newDisplayValue });
  };

  render() {
    return (
      <div>
        <Wrapper>
          <CheckBoxGroup onChange={this.handleChange} value={this.state.newValue}>
            <CheckBox value="11" disabled>
              CheckBox1
            </CheckBox>
            <CheckBox value="22">CheckBox2</CheckBox>
            <CheckBox value="33">CheckBox3</CheckBox>
          </CheckBoxGroup>
        </Wrapper>
        <Wrapper>
          <CheckBoxGroup onChange={this.handleChange}>
            <CheckBox value="11" disabled>
              CheckBox1
            </CheckBox>
            {123}
            <CheckBox value="22">CheckBox2</CheckBox>
            <CheckBox value="33">CheckBox3</CheckBox>
          </CheckBoxGroup>
        </Wrapper>
        <Wrapper>
          <Theme config={view}>
            <CheckBoxGroup
              onChange={handleChange}
              styles="vertical"
              data={options}
              defaultValue={['11']}
              displayField="label"
            />
          </Theme>
        </Wrapper>
        <Wrapper>
          <CheckBoxGroup
            onChange={this.handleChange}
            styles="vertical"
            data={options}
            value={['11', '44']}
            displayValue={['check4', 'check5']}
            displayField="label"
          />
        </Wrapper>
        <Wrapper>
          <CheckBoxGroup
            onChange={this.handleChange}
            styles="vertical"
            data={options}
            defaultValue={['11', '44']}
            displayValue={['check4', 'check5']}
            displayField="label"
          />
        </Wrapper>
        <Wrapper>
          <CheckBoxGroup childType="button" onChange={handleChange} value={defaultValue}>
            <CheckBoxButton value="1">CheckBox1</CheckBoxButton>
            <CheckBoxButton value="2">CheckBox2</CheckBoxButton>
            <CheckBoxButton value="3">CheckBox3</CheckBoxButton>
          </CheckBoxGroup>
        </Wrapper>
        <Wrapper>
          <Theme config={view}>
            <CheckBoxGroup childType="button" onChange={handleChange} defaultValue={defaultValue}>
              <CheckBoxButton value="1">CheckBox1</CheckBoxButton>
              <CheckBoxButton value="2">CheckBox2</CheckBoxButton>
              <CheckBoxButton value="3">CheckBox3</CheckBoxButton>
            </CheckBoxGroup>
          </Theme>
        </Wrapper>
        <Wrapper>
          <CheckBoxGroup
            onChange={this.handleChange}
            data={options}
            value={this.state.newValue}
            displayValue={['check4', 'check5']}
            displayField="label"
            childType="button"
          />
        </Wrapper>
        <Wrapper>
          <CheckBoxGroup
            styles="vertical"
            data={options}
            childType={'button'}
            defaultValue={['11', '44']}
            defaultDisplayValue={['check4', 'check5']}
            displayField="label"
          />
        </Wrapper>
      </div>
    );
  }
};
