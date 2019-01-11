/**
 *
 * create by ligx
 *
 * @flow
 */
import React from 'react';
import urls from './images';
import { PageLoading } from '@lugia/lugia-web';
import styled from 'styled-components';

const getKeyFrame = props => {
  const {urls} = props;
  const res = [];
  let imgIndex = 0;
  for (let i = 0; i < 100; i+=4) {
    const url = urls[imgIndex++];
    res.push(`${i}%  { background-image: url(${url});}`);
  }

  res.push(`100%  { background-image: url(${urls[0]});}`);

  return res.join('\n');
};

/*
 animation: mymove 1s linear infinite;
  @keyframes mymove
  {
   ${getKeyFrame}
  }
 */
const Box = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  background: no-repeat center center;
 
  transform: translate(-50%,-50%);`;

export default () => {

  return <Box><PageLoading time={2} loading urls={urls}/></Box>;
};
