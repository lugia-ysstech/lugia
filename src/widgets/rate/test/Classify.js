import React from 'react';
import { Rate } from '@lugia/lugia-web';
export default class Classify extends React.Component<any, any> {
  render() {
    return (
      <Rate classify={true}/>
    );
  }
}
