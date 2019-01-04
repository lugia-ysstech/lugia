import React from 'react';
import { Skeleton } from '@lugia/lugia-web';

export default class Paragraph extends React.Component {
  render() {
    return (
      <Skeleton
        avatar={false}
        paragraph={{ rows: 6 }}
        titleWidth={100}
        paragraphWidth={[200, 300, 400, 400, 350, 250]}
      />
    );
  }
}
