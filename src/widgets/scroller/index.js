/**
 *
 * create by LYQ
 *
 * @flow
 */
import React from 'react';
import {ThrottleScroller} from '@lugia/lugia-web';

class Div extends React.Component<any, any> {
  render() {
    return <div>hello</div>;
  }
}

const Scroller = ThrottleScroller(Div, 20);

const InputDemo = () => {
  const config = {
    type: 'y',
    viewSize: 250,
    totalSize: 558,
    left: 100,
    // value: 50,
  };

  function onChange(v) {
    console.info('滚动', v);
  }

  return (
    <div style={{ top: '50px', position: 'absolute' }}>
      {/*<Scroller {...config}/>*/}
      <Scroller
        {...config}
        onChange={onChange}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 1, 2, 3, 134, 1234, 132, 41]}
      />
    </div>
  );
};
export default InputDemo;
