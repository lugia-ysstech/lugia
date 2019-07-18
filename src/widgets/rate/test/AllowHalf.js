import React from 'react';
import { Rate } from '@lugia/lugia-web';
export default class AllowHalf extends React.Component<any, any> {
  render() {
    return (
      <Rate allowHalf={true}/>
    );
  }
}
