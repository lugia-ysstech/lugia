/**
 *
 * create by liangguodong
 *
 */
import React from 'react';
import { Loading } from '@lugia/lugia-web';
export default class BaseLoad extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Loading width={14} color={'red'} />
      </div>
    );
  }
}
