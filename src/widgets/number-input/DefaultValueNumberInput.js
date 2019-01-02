/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { NumberInput } from '@lugia/lugia-web';

export default class DefaultValueNumberInput extends React.Component<any, any> {
  render() {
    return (
      <div>
        <NumberInput
          defaultValue={1000}
          onChange={this.props.onChange}
          max={10000}
          min={100}
          step={100}
        />
      </div>
    );
  }
}
