import React from 'react';
import { NumberInput } from '@lugia/lugia-web';

export default class BaseNumberInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
    return <NumberInput value={this.state.value} onChange={this.onChange} />;
  }
}
