import React from 'react';
import {Checkbox} from '@lugia/lugia-web';

export default class CheckBoxDemo extends React.Component {
    render() {
        return (
            <div>
                <Checkbox checked onChange={this.handleChange}>
                    CheckBox
                </Checkbox>
            </div>
        );
    }
  handleChange = (value: Array<string>) => {
    this.setState({
      value,
    });
  };
}
