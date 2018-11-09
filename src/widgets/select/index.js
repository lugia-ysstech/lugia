/**
 *
 * create by LYQ
 *
 */

import * as React from 'react';
import {Select,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';

const data = (function(t) {
  const res = [];
  for (let i = 0; i < t; i++) {
    res.push({ value: `key-${i}`, label: `txt${i}` });
  }
  return res;
})(20 * 1);
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    const width = 300;
    this.state = {
      menu: null,
      value: ['key-a', 'key+', 'key++'],
      config: { [Widget.Select]: { width } },
    };
  }

  render() {
    const { config, value, displayValue } = this.state;

    return (
      <Theme config={config}>
        <div>
          <h2>single</h2>
          <Select
            data={data}
            displayField={'label'}
            value={value}
            throttle={0}
            onQuery={this.onQuery}
            canSearch
            mutliple
          />

          <h2>single search</h2>
          <Select canSearch displayField={'label'} data={data} />

          <h2>single canInput</h2>
          <Select canSearch canInput displayField={'label'} data={data} />

          <h2>非受限 mutliple</h2>
          <Select data={data} displayField={'label'} mutliple limitCount={5} />

          <h2>非受限 mutliple DefaultValue</h2>
          <Select
            mutliple
            defaultValue={['key-0', 'key-1']}
            defaultDisplayValue={['txt0', 'txt1']}
            displayField={'label'}
            limitCount={5}
            data={data}
            onSelect={this.onSelect}
          />

          <h2>受限 mutliple canInput</h2>
          <Select
            value={value}
            displayValue={[]}
            mutliple
            canSearch
            limitCount={3}
            canInput
            displayField={'label'}
            data={data}
            onQuery={this.onQuery}
            onChange={this.onChange}
          />
        </div>
      </Theme>
    );
  }

  onChange = obj => {
    const { value, displayValue } = obj;
    this.setState({ value, displayValue });
  };

  onSelect = obj => {};

  onQuery = value => {
    console.log(value);
  };

  onChangeNoDisplayValue = obj => {
    const { value, displayValue } = obj;

    this.setState({
      value,
      displayValue,
    });
  };
}
