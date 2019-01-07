import React from 'react';
import { AmountInput } from '@lugia/lugia-web';

export default class BaseAmountInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  onChange = ({ newValue: value }: any) => {
    this.setState({ value });
  };

  render() {
   return <AmountInput value={this.state.value} onChange={this.onChange} />;
  }
}
