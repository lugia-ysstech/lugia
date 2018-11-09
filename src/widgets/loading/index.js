import React from 'react';
import {Loading} from '@lugia/lugia-web';
class LoadingDemo extends React.Component {
  render() {
    // const { value, displayValue, } = this.state;
    return (
      <div>
        <Loading width={14} color={'red'} />
        <br />
        <br />
        <br />
        <Loading scale />
      </div>
    );
  }
}

export default LoadingDemo;
