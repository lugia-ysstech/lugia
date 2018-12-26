import * as React from 'react';
import {Affix,Button} from '@lugia/lugia-web';

export default class BasicDemo extends React.Component {
  handleChange = res => {
    console.info(res);
  };
  render() {
    return (
      <div>
        <Affix offsetTop={20}>
          <Button type="primary" onChange={this.handleChange}>
            Affix top
          </Button>
        </Affix>
      </div>
    );
  }
}
