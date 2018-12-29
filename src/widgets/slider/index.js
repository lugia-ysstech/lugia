/**
 *
 * create by liangguodong
 *
 *
 */
import React, { Component } from 'react';
import BaseSlider from './BaseSlider';
import DisabledSlider from './DisabledSlider';
import IconSlider from './IconSlider';
import VerticalSlider from './VerticalSlider';
import MarksSlider from './MarksSlider';

export default () => {
  return (
    <div>
      <BaseSlider />
      <DisabledSlider />
      <IconSlider />
      <VerticalSlider />
      <MarksSlider />
    </div>
  );
};
