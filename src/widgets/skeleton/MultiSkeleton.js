import React from 'react';
import { Skeleton } from '@lugia/lugia-web';

export default class MultiSkeleton extends React.Component {
  render() {
    return (
      <Skeleton
        picture={true}
        pictureWidth={200}
        pictureHeight={100}
        titleWidth={100}
        paragraphWidth={[200, 300, 200]}
      />
    );
  }
}
