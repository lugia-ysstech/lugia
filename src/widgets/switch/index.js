/**
 *
 * create by LYQ
 *
 *
 * @flow
 */
import React, { Component } from 'react';
import BaseSwitch from './BaseSwitch';
import DataSwitch from './DataSwitch';
import DefaultValueSwitch from './DefaultValueSwitch';
import DisabledSwitch from './DisabledSwitch';
import DisplayFiledSwitch from './DisplayFiledSwitch';
import LoadingSwitch from './LoadingSwitch';
import OnfocusSwitch from './OnfocusSwitch';
import InverseSwitch from './InverseSwitch';

export default () => {
  return (
    <div>
      <BaseSwitch />
      <DisabledSwitch />
      <DefaultValueSwitch />
      <DataSwitch />
      <OnfocusSwitch />
      <DisplayFiledSwitch />
      <LoadingSwitch />
      <InverseSwitch />
    </div>
  );
};
