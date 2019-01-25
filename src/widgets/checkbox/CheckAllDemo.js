import * as React from 'react';
import styled from 'styled-components';
import {Checkbox} from '@lugia/lugia-web';

const CheckBoxGroup = Checkbox.Group;
const data = [
  {
    text: 'Apple',
    value: 'apple',
  },
  {
    text: 'Pear',
    value: 'pear',
  },
  {
    text: 'Orange',
    value: 'orange',
  },
];
const CheckAll = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;
const Items = styled.div`
  padding: 10px 20px;
`;

export default class extends React.Component {
  constructor(){
    super();
    const value = ['pear'];
    this.state = {
      value,
      indeterminate: value.length > 0,
      checked: value.length === data.length,
    };
    this.allValues = [];
    data.forEach(item => {
      this.allValues.push(item.value);
    });
  }
  handleChange = value => {
    console.log('value ->', value);
    const { newValue } =  value;
    this.setState({
      value: newValue,
      checked: newValue.length === data.length,
      indeterminate: !!newValue.length && newValue.length < data.length,
    });
  };
  handleCheckAll = () => {
    const { checked } = this.state;
    this.setState({
      value: checked ? [] : this.allValues,
      checked: !checked,
      indeterminate: false,
    });
  };
  render() {
    const { value, indeterminate, checked } = this.state;
    return (
      <div>
        <CheckAll>
          <Checkbox indeterminate={indeterminate} checked={checked} onChange={this.handleCheckAll}>
            Check All
          </Checkbox>
        </CheckAll>
        <Items>
          <CheckBoxGroup data={data} value={value} onChange={this.handleChange} />
        </Items>
      </div>
    );
  }
}
