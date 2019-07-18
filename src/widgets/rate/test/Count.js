import React from 'react';
import { Rate } from '@lugia/lugia-web';
export default class Count extends React.Component<any, any> {
  render() {
    return (
      <Rate count={10}/>
    );
  }
}
